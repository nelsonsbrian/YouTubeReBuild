import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Video } from '../models/video.model';
import { YoutubeApiService } from '../youtube-api.service';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.css'],
  providers: [ YoutubeApiService ]
})
export class CategoryContentComponent implements OnInit {

  @Input() ChildVideosInCategory: Video[];
  @Output() loadVideoSender = new EventEmitter();

  localVideos: any[] = null;

  ngOnInit() {
    this.getCategories();
    console.log(this.localVideos.items);

  }
  
  constructor(private youtubeApiService: YoutubeApiService) {  }

  getCategories() {
    this.youtubeApiService.getAllCategories().subscribe(response => {
      this.localVideos = response.json().items;
      // console.log(this.localVideos.id)
      // for (let i = 0; i < this.localVideos.items.length; i++) {

      // }
    });
  }

  loadVideo(video: Video) {
    this.loadVideoSender.emit(video);
  }

}
