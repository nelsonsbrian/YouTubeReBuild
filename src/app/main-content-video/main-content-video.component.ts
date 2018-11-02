import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../youtube-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Video } from '../models/video.model';

@Component({
  selector: 'app-main-content-video',
  templateUrl: './main-content-video.component.html',
  styleUrls: ['./main-content-video.component.css'],
  providers: [YoutubeApiService]  
})
export class MainContentVideoComponent implements OnInit {
  videoId: string = null;
  video;
  constructor(private youtubeApiService: YoutubeApiService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.videoId = (urlParameters['id']);
      this.video = this.getVideoObject();
    });
  }

  getVideoObject() {
    this.youtubeApiService.getVideo()
  }
}
