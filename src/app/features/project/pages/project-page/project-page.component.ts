import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ProfileHeaderComponent} from "../../../../shared/components/profile-header/profile-header.component";

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [CommonModule, ProfileHeaderComponent, ReactiveFormsModule],
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  private _editMode: boolean = false;
  projectForm = this.fb.group({
    projectName: ['New Album', Validators.required],
    projectDescription: [
      'Hey everyone...\n' +
      'I’m a singer in my beginning. Looking for a cool producer to do some shit together.\n' +
      'I want to make a song+clip to make a breakthrough.\n' +
      'I’m looking for beginners semi-professionals to start an interesting way together.\n' +
      'I’m a singer in my beginning.\n' +
      'Looking for a cool producer to do some shit together.\n' +
      'I’m a singer in my beginning. Looking for a cool producer to do some shit together.\n' +
      'I want to make a song+clip to make a breakthrough.\n' +
      'I’m looking for beginners semi-professionals to start an interesting way together.\n' +
      'I’m a singer in my beginning.\n' +
      'Looking for a cool producer to do some shit together.\n' +
      'I’m a singer in my beginning. Looking for a cool producer to do some shit together.\n' +
      'I want to make a song+clip to make a breakthrough.\n' +
      'I’m looking for beginners semi-professionals to start an interesting way together.\n' +
      'I’m a singer in my beginning.\n' +
      'Looking for a cool producer to do some shit together.\n'],
    projectPicture: [],
    inDemand: this.fb.array([
      this.fb.control('Producer'),
      this.fb.control('Record studio owner'),
      this.fb.control('Guitarist'),
      this.fb.control('Record company'),
      this.fb.control('Fashionista'),
      this.fb.control('Makeup artist'),
      this.fb.control('Decorator'),
      this.fb.control('Producer'),
      this.fb.control('Record studio owner'),
      this.fb.control('Guitarist'),
      this.fb.control('Record company'),
      this.fb.control('Fashionista'),
      this.fb.control('Makeup artist'),
      this.fb.control('Decorator'),
    ])
  });

  get editMode(): boolean {
    return this._editMode;
  }

  set editMode(value: boolean) {
    value ? this.projectForm.enable() : this.projectForm.disable();
    this._editMode = value;
  }

  get inDemand() {
    return this.projectForm.get('inDemand') as FormArray;
  }

  addRole() {
    (this.projectForm.get('inDemand') as FormArray).insert(0, this.fb.control('', Validators.required));
  }

  removeRoleAt(index: number) {
    (this.projectForm.get('inDemand') as FormArray).removeAt(index);
  }

  onSubmit() {
    this.editMode = false;
    console.warn(this.projectForm.value);
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.editMode = false;
  }
}
