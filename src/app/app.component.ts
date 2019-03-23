import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//renderiza o templete informado, pode ser a pagina inteira(arquivo) ou a tag
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello NG';
}
