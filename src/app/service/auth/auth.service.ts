import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import {HttpClient, HttpParams, HttpStatusCode} from "@angular/common/http";
import {Location} from "@angular/common";
import {Observable} from "rxjs";
import { User } from '../../core/model/user.model';
import { State } from '../../core/model/state.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);
  location = inject(Location);
  notConnected = "Not_Connected";

  private fetchUser$: WritableSignal<State<User>> =
    signal(State.Builder<User>().forSuccess({email: this.notConnected}));
  fetchUser = computed(() => this.fetchUser$());

  fetch(forceResync: boolean): void {
    this.fetchHttpUser(forceResync)
      .subscribe({
        next: user => this.fetchUser$.set(State.Builder<User>().forSuccess(user)),
        error: err => {
          if (err.status === HttpStatusCode.Unauthorized && this.isAuthenticated()) {
            this.fetchUser$.set(State.Builder<User>().forSuccess({email: this.notConnected}));
          } else {
            this.fetchUser$.set(State.Builder<User>().forError(err));
          }
        }
      })
  }
}
