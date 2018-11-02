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

  localVideos: Video[] = null;
  localCategories: Category[] = [];

  
  ngOnInit() {
    this.localCategories = this.getCategories();
    //console.log(this.localCategories);
    
  }
  
  constructor(private youtubeApiService: YoutubeApiService) { }
  
  getCategories() {
    let cate: Category[] = [];
    this.youtubeApiService.getAllCategories().subscribe(response => {
      this.localVideos = response.json().items;

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

  loadVideo(video: Video) {
    this.loadVideoSender.emit(video);
  }

}
