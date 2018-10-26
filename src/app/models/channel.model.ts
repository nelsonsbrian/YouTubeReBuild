import { Video } from './video.model';
import { Playlist } from './playlist.model';


export class Channel {

    public TotalLikes: number = 0;
    public TotalViews: number = 0;
    public TotalDislikes: number = 0;
    public joinedDate: Date = new Date();
    public subscribers: Channel[] = [];
    public subscriberCount: number = 0;
    public videos: Video[] = [];
    public videoCount: number = 0;
    public history: Video[] = [];
    public watchLater: Playlist[] = [];
    public videosLiked: Video[] = [];


    constructor(public name?: string, public img?: string, public description?: string) {};

    isDuplicateVideo(videoId: number) {
        for (let i = 0; i < this.videos.length; i ++) {
            if (this.videos[i].id === videoId) {
                return true;
            }
        }
        return false;
    }    

    getVideo(videoId: number) {
        
    }

    watchVideo(videoid: number) {
        this.videos.push()
    }
}





