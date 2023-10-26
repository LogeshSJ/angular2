import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   constructor(private storageService: StorageService, private router: Router) {}
//   isValidUser(user: User): boolean {
//     let users: User[] = this.storageService.getAllUsers();
//     let isUser: boolean = false;
//     for (let u of users) {
//       if (u.email === user.email && u.password === user.password) {

//         this.storageService.setLoggedInUser(u);
//         isUser = true;
//         break;
//       }
//     }
//     return isUser;
//   }

//   register(registerForm: User) {
//     let user: User[] = this.storageService.getAllUsers();

//     let registerUser = {
//       id: user.length + 1,
//       email: registerForm.email,
//       password: registerForm.password,
//     };

//     user.push(registerUser);

//     localStorage.setItem('users', JSON.stringify(user));
//   }
//   logout() {
//     this.storageService.removeLoggedInUser();
//   }
//   isLogged(): boolean {
//     return this.storageService.isUserLoggedIn();
//   }
//   getLoggedInUser():User{
//     return this.storageService.getLoggedInUser();
//   }
// }

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storageService: StorageService) {}

  isValidUser(user: User): boolean {
    let users: User[] = this.storageService.getAllUsers();

    let isUser: boolean = false;
    for (let u of users) {
      if (u.email === user.email && u.password === user.password) {
        this.storageService.setLoggedInUser(u);
        isUser = true;
        break;
      }
    }
    return isUser;
  }

  register(registerForm: User) {
    let users: User[] = this.storageService.getAllUsers();

    let registerUser = {
      id: users.length + 1,
      email: registerForm.email,
      password: registerForm.password,
    };

    users.push(registerUser);
    localStorage.setItem('users', JSON.stringify(users));
  }

  isLoggedIn(): boolean {
    return this.storageService.isLoggedInUser();
  }

  logout(): void {
    this.storageService.removeLoggedInUser();
  }

  getLoggedInUser(user: User[]) {
    return this.storageService.getLoggedInUser();
  }
}
