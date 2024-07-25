import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , FontAwesomeModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  faIconLibrary: FaIconLibrary = inject(FaIconLibrary);
  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome(): void {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
