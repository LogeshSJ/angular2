import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',

// })
// export class AppComponent implements OnInit {
//   title = 'angular2';
//   constructor(private storageService: StorageService){}

//     ngOnInit(): void{
//       this.storageService.loadUsers();
//   }
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.storageService.loadUsers();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login'], { replaceUrl: true });
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
