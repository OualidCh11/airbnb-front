import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import {  MenuModule  } from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';
import { CategoryComponent } from './category/category.component';
import { AvatarComponent } from './avatar/avatar.component';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import { MenuItem } from 'primeng/api';
import { ToastService } from '../../service/toastService/toast.service';



@Component({
  selector: 'app-navbar',
  standalone: true,
  
  imports: [
    FontAwesomeModule,
    ButtonModule,
    MenuModule,
    ToolbarModule,
    CategoryComponent,
    AvatarComponent
  ],

  providers: [DialogService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  location = "Anywhere";
  guests = "Add guests";
  dates = "Any week";

  toastService = inject(ToastService);

  currentMenuItems: MenuItem[] | undefined = []

  ngOnInit(): void {
    this.currentMenuItems = this.fetchMenu();
    this.toastService.send({severity:"info", summary:"Welcome to your home hehe"});

  }

  private fetchMenu(): MenuItem[] {
    return[
      {
        label:"Sign up",
        styleClass:"font-bold"
      }, 
      {
        label:"Log in",
      }
    ]
  }
  

}
