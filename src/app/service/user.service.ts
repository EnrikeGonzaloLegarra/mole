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
  saveScore(username: string, score: number) {
    const oldData = this.getStorageData() || [];
    oldData.push({ username, score });
    const jsonData = JSON.stringify(oldData);
    const encryptedData = AES.encrypt(jsonData, this.secretKey).toString();
    localStorage.setItem('data', encryptedData);
  }

  getStorageData() {
    const encryptedData = localStorage.getItem('data');
    if (encryptedData) {
      const decryptedData = AES.decrypt(encryptedData, this.secretKey).toString(enc.Utf8);
      try {
        return JSON.parse(decryptedData);
      } catch (error) {
        console.error('Error parsing JSON data:', error);
      }
    }
    return null;
  }

}
