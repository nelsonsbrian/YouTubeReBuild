export class Video {

    public likes: number = 0;
    public views: number = 0;
    public dislikes: number = 0;
    public comments: string[] = [];
    public publishedDate: Date = new Date();

    constructor(public title?: string, public img?: string, public publisher?: string, public description?: string, public category?: string[]) {};

    
}