import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ProfileHeaderComponent} from "../../../../shared/components/profile-header/profile-header.component";
import {Observable, take} from "rxjs";
import {Project} from "../../../../../assets/models/project.model";
import {selectCurrentProject} from "../../../../store/project-store/project.selectors";
import {select, Store} from "@ngrx/store";
import {ProjectActions} from "../../../../store/project-store/project.actions";
import {selectCurrentProfileId} from "../../../../store/selectors";

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [CommonModule, ProfileHeaderComponent, ReactiveFormsModule],
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  currentProfileId$: Observable<string | null>;
  private _editMode: boolean = false;
  currentProject$: Observable<Project | null>;
  projectForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      photoUrl: '',
      inDemand: this.fb.array([])
    });
  }

  // projectForm = this.fb.group({
  //   name: ['New Album', Validators.required],
  //   description: [
  //     'Hey everyone...\n' +
  //     'I’m a singer in my beginning. Looking for a cool producer to do some shit together.\n' +
  //     'I want to make a song+clip to make a breakthrough.\n' +
  //     'I’m looking for beginners semi-professionals to start an interesting way together.\n' +
  //     'I’m a singer in my beginning.\n' +
  //     'Looking for a cool producer to do some shit together.\n' +
  //     'I’m a singer in my beginning. Looking for a cool producer to do some shit together.\n' +
  //     'I want to make a song+clip to make a breakthrough.\n' +
  //     'I’m looking for beginners semi-professionals to start an interesting way together.\n' +
  //     'I’m a singer in my beginning.\n' +
  //     'Looking for a cool producer to do some shit together.\n' +
  //     'I’m a singer in my beginning. Looking for a cool producer to do some shit together.\n' +
  //     'I want to make a song+clip to make a breakthrough.\n' +
  //     'I’m looking for beginners semi-professionals to start an interesting way together.\n' +
  //     'I’m a singer in my beginning.\n' +
  //     'Looking for a cool producer to do some shit together.\n'],
  //   photoUrl: "",
  //   inDemand: this.fb.array([
  //     this.fb.control('Producer'),
  //     this.fb.control('Record studio owner'),
  //     this.fb.control('Guitarist'),
  //     this.fb.control('Record company'),
  //     this.fb.control('Fashionista'),
  //     this.fb.control('Makeup artist'),
  //     this.fb.control('Decorator'),
  //     this.fb.control('Producer'),
  //     this.fb.control('Record studio owner'),
  //     this.fb.control('Guitarist'),
  //     this.fb.control('Record company'),
  //     this.fb.control('Fashionista'),
  //     this.fb.control('Makeup artist'),
  //     this.fb.control('Decorator'),
  //   ])
  // });

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
    const projectFormValue = this.projectForm.value;
    this.currentProject$
      .pipe(take(1))
      .subscribe((currentProject) => {
        if (currentProject) {
          const updatedProject: Project = {
            projectId: currentProject.projectId,
            profileId: currentProject.profileId,
            daysLeft: currentProject.daysLeft,
            name: projectFormValue.name || '',
            description: projectFormValue.description || '',
            photoUrl: projectFormValue.photoUrl || '',
            inDemand: projectFormValue.inDemand?.map((x: string | null) => x ?? '') || []
          };
          this.store.dispatch(ProjectActions.updateProject({updatedProject}));
        }
      });
  }

  ngOnInit(): void {
    this.currentProfileId$ = this.store.select(selectCurrentProfileId);
    this.currentProject$ = this.store.pipe(select(selectCurrentProject));

    this.currentProject$.subscribe((currentProject) => {
      if (currentProject) {
        this.projectForm = this.fb.group({
          name: [currentProject.name, Validators.required],
          description: [currentProject.description],
          photoUrl: currentProject.photoUrl,
          inDemand: this.fb.array(currentProject.inDemand)
        });
        this.editMode = false;
      }
    });
  }
}
