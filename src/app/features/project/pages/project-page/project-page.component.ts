import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  @Input() editMode: boolean = true;

  projectForm = this.fb.group({
    projectName: ['New Album', Validators.required],
    projectDescription: ['Hey everyone...\n' +
    '          I’m a singer in my beginning. Looking for a cool producer to do some shit together.\n' +
    '           I want to make a song+clip to make a breakthrough.\n' +
    '           I’m looking for beginners semi-professionals to start an interesting way together. <br>I’m a singer in my\n' +
    '          beginning. Looking for a cool producer to do some shit together.\n'],
    projectPicture: [],
    inDemand: ['', '', '']
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
