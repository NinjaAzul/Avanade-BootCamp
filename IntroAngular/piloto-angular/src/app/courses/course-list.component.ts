import { Course } from './Course';
import { Component, OnInit } from "@angular/core";
import { CourseService } from './course.service';


@Component({
  templateUrl: "./course-list.component.html"
})
export class CourseListComponent implements OnInit {

  filteredCourses: Course[] = [];

  _courses: Course[] = [];

  _filterBy: string;

  constructor(private courseService: CourseService) {

  }


  ngOnInit(): void {
    this.retrieveAll();
  }


  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: err => console.error('Error', err),
    });
  }

  deleteById(couseId: number): void {
    this.courseService.deleteById(couseId).subscribe({
      next: () => {
        console.log("Success Delete");
        this.retrieveAll();
      },
      error: err => console.error("Error", err),

    })
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter((course: Course) =>
      course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1)
  }

  get filter() {
    return this._filterBy;
  }
}
