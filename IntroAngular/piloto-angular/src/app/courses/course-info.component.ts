import { CourseService } from './course.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./Course";

@Component({
  templateUrl: 'course-info.component.html',
})
export class CourseInfoComponent implements OnInit {

  course: Course;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    const routerId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.courseService.retrieveById(routerId)?.subscribe({
      next: course => this.course = course,
      error: err => console.error("Error", err)
    });

  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      next: course => console.log("Success Save Data", course),
      error: err => console.error("Error", err),
    });
  }
}
