import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent implements OnInit {

  @Input() profileName: string = 'Billie Eilish'; //todo: limit number of letter
  @Input() profileAboutMe: string = 'A sing-song-writer, producer, artist and an activist. Hope to get some new co-workers to get my ideas come true.'; //todo: limit number of letter
  @ContentChild('profileActions', {static: true}) profileActionsTemplate: TemplateRef<any>;
  @Input() numbersDisplayList: { label: string, number: number }[] = [
    {label: 'Projects', number: 67},
    {label: 'Believers', number: 90},
    // {label: 'Beliefs', number: 56}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
