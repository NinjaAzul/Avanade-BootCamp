
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './Course';



@Injectable({
  providedIn: 'root',
})
export class CourseService {

  private coursesUrl: string = 'http://localhost:3100/api/courses';

  constructor(private httpClient: HttpClient) { }

  retrieveAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.coursesUrl);
  }
  retrieveById(id: number): Observable<Course> | undefined {
    return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
  }
  save(course: Course): Observable<Course> {
    if (course.id) {
      return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course);
    } else {
      return this.httpClient.put<Course>(`${this.coursesUrl}`, course);
    }
  }
  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`);
  }
}




