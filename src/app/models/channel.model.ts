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
    public loggedIn: boolean = false;
    static master: Channel = null;


    constructor(public name?: string, public img?: string, public description?: string) {};

    isDuplicateUpload(videoId: number) {
        for (let i = 0; i < this.videos.length; i ++) {
            if (this.videos[i].id === videoId) {
                return true;
            }
        }
        return false;
    }

    isDuplicateOnPlaylist(videoId: number, playList: Playlist) {
        for (let i = 0; i < playList.list.length; i ++) {
            if (playList.list[i].id === videoId) {
                return true;
            }
        }
        return false;
    }    

    addToPlayList(video: Video, playList: Playlist) {
        if (this.isDuplicateOnPlaylist(video.id, playList)) {
            playList.list.push(video);
        }
    }

    removeFromPlayList(video: Video, playList: Playlist) {
        if (!(this.isDuplicateOnPlaylist(video.id, playList))) {
            let index = null;
            for (let i = 0; i < playList.list.length; i++) {
                if (playList.list[i].id = video.id) {
                    index = i;
                }
            }
            playList.list.splice(index,1);
        }
    }    


    watchVideo(video: Video) {
        video.watchedVideo();
        this.history.push(video);
    }

    logOn() {
        this.loggedIn = true;
        Channel.master = this;
    }

    logOff() {
        this.loggedIn = false;
        Channel.master = null;
    }


}





