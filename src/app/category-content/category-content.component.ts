import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../models/video.model';
import { YoutubeApiService } from '../youtube-api.service';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.css'],
  providers: [ YoutubeApiService ]
})
export class CategoryContentComponent {

  @Input() ChildVideosInCategory: Video[];
  @Output() loadVideoSender = new EventEmitter();

  localVideos: any[] = null;
  
  constructor(private youtubeApiService: YoutubeApiService) {  }

  getCategories() {
    this.youtubeApiService.getAllCategories().subscribe(response => {
      this.localVideos = response.json();
      console.log(this.localVideos);
    });
  }

  loadVideo(video: Video) {
    this.loadVideoSender.emit(video);
  }

}
