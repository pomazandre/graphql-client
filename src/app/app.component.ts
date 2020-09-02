import { Component, OnInit } from '@angular/core';
import { request } from 'graphql-request'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';

  ngOnInit(){
    const query = `{
      posts {
                id
                title
                author {
                      name
                }
              }
    }`;

    
    request('http://localhost:3000/', query).then((data) => console.log(data))
  }
}
