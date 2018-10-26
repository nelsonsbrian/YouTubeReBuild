import { Component, Input } from '@angular/core';
import { Video } from '../models/video.model';
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {

@Input() VideosInCategory: Video[];
}
