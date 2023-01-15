import { Component } from '@angular/core';
import { User } from '../modele/user';

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile-component.component.html',
  styleUrls: ['./user-profile-component.component.css']
})
export class UserProfileComponentComponent {
  Objet:User = new User("Dion", "https://www.google.com/search?q=image&oq=image&aqs=chrome..69i57j69i59j35i39j69i59j0i512j0i433i512j0i512l4.2289j0j15&sourceid=chrome&ie=UTF-8#imgrc=22LfYBs93BDCLM");
}
