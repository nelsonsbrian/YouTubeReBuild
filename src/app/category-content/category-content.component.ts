import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Video } from '../models/video.model';
import { YoutubeApiService } from '../youtube-api.service';
import { Category } from '../models/category.model';


@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.css'],
  providers: [YoutubeApiService]
})
export class CategoryContentComponent implements OnInit {

  @Input() ChildVideosInCategory: Video[];
  @Output() loadVideoSender = new EventEmitter();

  localCategories: Category[] = [];
  
  ngOnInit() {
    this.localCategories = this.getCategories();
    // this.localCategories.forEach(category => this.getVideosByCategory(category.id));
    this.getVideosByCategory("1");
    }
  
  constructor(private youtubeApiService: YoutubeApiService) { }
  
  getCategories() {
    let cate: Category[] = [];
    this.youtubeApiService.getAllCategories().subscribe(response => {
      for (let i = 0; i < response.json().items.length; i++) {
        let id = response.json().items[i].id;
        let title = response.json().items[i].snippet.title
        let chanId = response.json().items[i].snippet.channelId;
        let newCategory = new Category(title, id, chanId);
        cate.push(newCategory);
      }
    });
    console.log(cate);
    return cate;
  }

  getVideosByCategory(catId: string) {
    let videos: Video[] = [];
    this.youtubeApiService.getVideosByCategory(catId).subscribe(response => {
      for (let i = 0; i < response.json().items.length; i++) {
        let data = response.json();
        let id = response.json().items[i].id;
        let title = response.json().items[i].snippet.title;
        let desc = response.json().items[i].snippet.description;
        let thumbnail = response.json().items[i].snippet.thumbnails.default;
        let chanId = response.json().items[i].snippet.channelId;
        let channelTitle = response.json().items[i].snippet.channelTitle;
        let newVideo = new Video (id, title, thumbnail, chanId, channelTitle, desc, catId);
        videos.push(newVideo);
      }
    });
    console.log(videos);
    return videos; 

  }

  loadVideo(video: Video) {
    this.loadVideoSender.emit(video);
  }

}
