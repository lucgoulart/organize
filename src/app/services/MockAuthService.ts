import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockAuthService {
  private mockUsers = [
    { email: 'salmanlucas17@outlook.com', password: '12345678' },
    { email: 'fesungaila@icloud.com', password: '12345678' },
  ];

  constructor() {}

  // Método para verificar se um usuário existe com base no nome de usuário e senha
  authenticate(username: string, password: string): boolean {
    const user = this.mockUsers.find(
      (u) => u.email === username && u.password === password
    );
    return !!user;
  }
}
