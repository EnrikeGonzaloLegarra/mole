import { TestBed } from '@angular/core/testing';
import { AES, enc } from 'crypto-js';
import { environment } from "../../environments/environment";
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    userService = TestBed.inject(UserService);
  });

  it('should save user to localStorage', () => {
    const userName = 'Enrike';
    spyOn(localStorage, 'setItem');
    userService.saveUser(userName);
    expect(localStorage.setItem).toHaveBeenCalledWith('sharedData', userName);
  });

  it('should delete user from localStorage', () => {
    spyOn(localStorage, 'removeItem');
    userService.deleteUser();
    expect(localStorage.removeItem).toHaveBeenCalledWith('sharedData');
  });

  it('should get user from localStorage', () => {
    const userName = 'Enrike';
    spyOn(localStorage, 'getItem').and.returnValue(userName);
    const result = userService.getUser();
    expect(localStorage.getItem).toHaveBeenCalledWith('sharedData');
    expect(result).toEqual(userName);
  });

  it('should save score to localStorage', () => {
    const username = 'Enrike';
    const score = 10;
    const jsonData = JSON.stringify({ username, score });
    const encryptedData = AES.encrypt(jsonData, environment.SECRET_KEY).toString();
    spyOn(localStorage, 'setItem');
    userService.saveScore({ username, score });
    expect(localStorage.setItem).toHaveBeenCalledWith('data', encryptedData);
  });

  it('should get score from localStorage', () => {
    const username = 'Enrike';
    const score = 10;
    const jsonData = JSON.stringify({ username, score });
    const encryptedData = AES.encrypt(jsonData, environment.SECRET_KEY).toString();
    spyOn(localStorage, 'getItem').and.returnValue(encryptedData);
    const result = userService.getStorageData();
    expect(localStorage.getItem).toHaveBeenCalledWith('data');
    expect(result).toEqual(jsonData);
  } );

});
