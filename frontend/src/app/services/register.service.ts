import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../interfaces/Register';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'http://localhost:3000/registers';
  constructor(private http: HttpClient) {}

  getAllRegisters(): Observable<Register[]> {
    return this.http.get<Register[]>(this.apiUrl)
  }

  getRegisterById(_id: string): Observable<Register> {
    return this.http.get<Register>(`${this.apiUrl}/${_id}`)
  }

  create(register: Register): Observable<Register> {
    return this.http.post<Register>(this.apiUrl, register)
  }

  update(id: string, register: Register): Observable<Register> {
    console.log(register)
    return this.http.put<Register>(`${this.apiUrl}/${id}`, register)
  }

}

