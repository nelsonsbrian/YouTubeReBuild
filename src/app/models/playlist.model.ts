import { Video } from './video.model';

export class Playlist {

    public list: Video[] = [];

    constructor(public title?: string) {};    
}