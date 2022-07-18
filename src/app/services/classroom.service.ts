import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iClassRoom, iClassRoomItem } from '../interfaces/class-room/class-room';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(private http: HttpClient) { }

  ListClassRoomItem(): Observable<iClassRoomItem[]> {
    return this.http.get<iClassRoomItem[]>('http://localhost:3000/itemClassRoom')
  }

   getClassRoom(): Observable<iClassRoom[]> {
    return this.http.get<iClassRoom[]>('http://localhost:3000/classroom')
  }

  DeleteClassRoom(id: any): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/classroom/${id}`)
  }

  AddClassRoom(): Observable<any> {
    const data = {
      "id": 10,
      "name": "PRUEBA",
      "title": "Vehiculo Blindado de Transporte de Personal",
      "status": 1,
      "url": "login",
      "time": "40",
      "img": "../../assets/logos/cacfr.svg"
    }
    return this.http.post('http://localhost:3000/classroom',data)
  }

  Login(user: any) : Observable<any> {
    return this.http.get('http://localhost:3000/users', user)

  }
}
 