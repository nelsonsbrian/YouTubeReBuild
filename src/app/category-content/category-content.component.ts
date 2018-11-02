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
  localVideos: Video[] = [];
  ngOnInit() {
    this.getCategories();

    // this.localCategories.forEach(category => this.getVideosByCategory(category.id));
    // this.getVideosByCategory("1");
  }

  constructor(private youtubeApiService: YoutubeApiService) { }

  getCategories() {
    this.youtubeApiService.getAllCategories().subscribe(response => {
      for (let i = 0; i < response.json().items.length; i++) {
        let id = response.json().items[i].id;
        let title = response.json().items[i].snippet.title
        let chanId = response.json().items[i].snippet.channelId;
        let newCategory = new Category(title, id, chanId);
        this.localCategories.push(newCategory);
      }
      this.getVideosByCategory();
    });
  }

  getVideosByCategory() {
    for (let j = 0; j < this.localCategories.length; j++) {
      this.youtubeApiService.getVideosByCategory(this.localCategories[j].id).subscribe(response => {
        for (let i = 0; i < response.json().items.length; i++) {
          let id = response.json().items[i].id;
          let title = response.json().items[i].snippet.title;
          let desc = response.json().items[i].snippet.description;
          let thumbnail = response.json().items[i].snippet.thumbnails.default;
          let chanId = response.json().items[i].snippet.channelId;
          let channelTitle = response.json().items[i].snippet.channelTitle;
          let newVideo = new Video(id, title, thumbnail, chanId, channelTitle, desc, this.localCategories[j].id);
          this.localVideos.push(newVideo);
        }
      });
    }
    console.log(this.localCategories);
    console.log(this.localVideos);
    //this.removeUnusedCategories()
  }

  getCategoryDesc(catId: string) {
    let categoryDesc;
    for (let i = 0; i < this.localCategories.length; i++) {
      console.log(this.localCategories[i].id);
      if (this.localCategories[i].id === catId) {
        categoryDesc = this.localCategories[i].title;
      }
    }

    // this.localCategories.filter( category => category.id === catId);
    return categoryDesc;
  }

  removeUnusedCategories() {
    console.log(this.localCategories.length);
    for(let i = this.localCategories.length-1; i > 0; i--) {
      console.log(this.localCategories[i].title);
      let counter = 0;
      for(let j = 0; j < this.localVideos.length; j++) {
        if (this.localVideos[j].category === this.localCategories[i].id) {
          counter++;
        }
      }
      if (counter == 0) {
        console.log("removed category " + this.localCategories[i].title);
        this.localCategories.splice(i, 1);
      }
    }
  }

  loadVideo(video: Video) {
    this.loadVideoSender.emit(video);
  }

}
