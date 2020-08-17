import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myName = 'Yash Joshi';
  myNickName = 'YJ';
  aboutMe = `I am a full stack developer, hailing from India, I got intially exposed to Microsoft .NET technology stack, in my 
  first company, and got opportunity to work and have fun with C#, "Model-View-Contoller" Framework, WEB API,AJAX,Windows 
  Forms, SQL. This is not it, from the front end side I know HTML, CSS, Angular (well I created my portfolio with it, so 
  hell Yeah !! ).
  Next company I worked with C#,Windows Service, XML, MEAN Stack, Sencha JS, Java, JSON.
  I also do software designing, document development, estimation, product testing, compatibilty testing, create custom 
  templates that can be readily used, saving developer efforts by not recreating it again and again. `;
  constructor() { }

  ngOnInit(): void {
  }

}
