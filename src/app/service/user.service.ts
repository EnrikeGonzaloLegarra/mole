import {Injectable} from '@angular/core';
import {AES, enc} from 'crypto-js';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
   secretKey = environment.SECRET_KEY;

  constructor() {
  }

  saveUser(userName: string) {
    localStorage.setItem('sharedData', userName);
  }
  deleteUser(){
    localStorage.removeItem('sharedData');
  }
  getUser(){
    return localStorage.getItem('sharedData');
  }
  saveScore({ username, score }: { username: string; score: number }) {
    const jsonData = JSON.stringify({ username, score });
    const encryptedData = AES.encrypt(jsonData, this.secretKey).toString();
    localStorage.setItem('data', encryptedData);
  }

  getStorageData(){
    const encryptedData = localStorage.getItem('data');
    if (encryptedData) {
      const decryptedData = AES.decrypt(encryptedData, this.secretKey).toString(enc.Utf8);
      return JSON.parse(decryptedData);
    }
  }

}
