import { Category } from './category.model';
import { Channel } from './channel.model';

export class Video {

    public likes: number = 0;
    public views: number = 0;
    public dislikes: number = 0;
    public comments: string[] = [];
    public publishedDate: Date = new Date();
    public watched: Date[] = [];
    public duration: number;

    constructor(
        public id?: string,
        public title?: string,
        public thumbnail?: object,
        public publisherId?: string,
        public publisherChannel?: string,
        public description?: string,
        public category?: string
    ) {
        this.views = Math.ceil(Math.random() * 100000) + 102;
        this.duration = 60;
    };

    watchedVideo() {
        this.watched.push(new Date());
        console.log("inc");
        this.views++;
    }

    addComment(comment: string) {
        this.comments.push(comment);
    }

    addLike() {
        this.likes++;
    }

    addDislike() {
        this.dislikes++;
    }
}