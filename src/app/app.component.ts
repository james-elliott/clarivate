import { Component } from '@angular/core';
import { TopnavComponent } from './layout/topnav/topnav.component';
import { LayoutModule } from './layout/layout.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clarity';
}
