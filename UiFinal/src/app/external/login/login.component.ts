import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private userService: UserService,
    private router: Router,
    private alert: AlertService) { }

  ngOnInit() {
    this.user = new User();
  }

  login() {
    this.userService.login(this.user)
    .subscribe((result) => {
      if(result)
      {
       // console.log(result); 
       this.userService.setCurrentUser(result);
       this.router.navigate(['/internal']);
      }
      else
      this.alert.danger('MailId or Password is incorrect.');
    });
  }
}
