import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { youTubeApi } from './api-keys';
import { Video } from './models/video.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class YoutubeApiService {

  constructor(private http: Http) { }

  static videoPage: Video = null;

  getAllCategories() {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${youTubeApi}`);
  }

  getVideosByCategory(catId: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=${catId}&key=${youTubeApi}`);
  }

  setVideo(video: Video) {
    YoutubeApiService.videoPage = video;
  }
  
  getVideo() {
    console.log(YoutubeApiService.videoPage);
    return YoutubeApiService.videoPage;
  }
}
