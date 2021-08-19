import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  characters!: string;
  constructor(private _http: HttpClient) {}

  public getStarWarsAPI() {
    return this._http.get('https://swapi.dev/api/people/').subscribe((data) => {
      console.log(data);
      this.characters = JSON.stringify(data, null, 4);
    });
  }
}
