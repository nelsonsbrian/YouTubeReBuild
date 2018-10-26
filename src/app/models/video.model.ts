import { Category } from './category.model';
import { Channel } from './channel.model';

export class Video {

    public likes: number = 0;
    public views: number = 0;
    public dislikes: number = 0;
    public comments: string[] = [];
    public publishedDate: Date = new Date();
    public watched: Date[] = [];

    constructor(public title?: string, public img?: string, public publisher?: Channel, public description?: string, public category?: Category[], public duration?: number) {
        this.views = Math.ceil(Math.random() * 100000) + 102;
    };

    
}