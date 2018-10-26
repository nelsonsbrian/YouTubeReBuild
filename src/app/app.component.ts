import { Component } from '@angular/core';
import { Channel } from './models/channel.model';
import { Category } from './models/category.model';
import { Video } from './models/video.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  masterCategoryList: Category[] = [
    new Category("News"),
    new Category("Weather"),
    new Category("Education"),
    new Category("Sports"),
    new Category("Technology")
  ];

  masterChannelList: Channel[] = [
    new Channel("Coding Train", "https://yt3.ggpht.com/a-/AN66SAw73K0zo5OAEFdMYWhmSJepKitKyDSW4P46wQ=s288-mo-c-c0xffffffff-rj-k-no", "In this YouTube channel I publish \"creative coding\" video tutorials every week. Subjects covered range from the basics of programming languages like JavaScript (with p5.js) and Java (with Processing) to generative algorithms like physics simulation, computer vision, and data visualization."),
    new Channel("Coding Train", "https://yt3.ggpht.com/a-/AN66SAw73K0zo5OAEFdMYWhmSJepKitKyDSW4P46wQ=s288-mo-c-c0xffffffff-rj-k-no", "In this YouTube channel I publish \"creative coding\" video tutorials every week. Subjects covered range from the basics of programming languages like JavaScript (with p5.js) and Java (with Processing) to generative algorithms like physics simulation, computer vision, and data visualization."),
    new Channel("Coding Train", "https://yt3.ggpht.com/a-/AN66SAw73K0zo5OAEFdMYWhmSJepKitKyDSW4P46wQ=s288-mo-c-c0xffffffff-rj-k-no", "In this YouTube channel I publish \"creative coding\" video tutorials every week. Subjects covered range from the basics of programming languages like JavaScript (with p5.js) and Java (with Processing) to generative algorithms like physics simulation, computer vision, and data visualization."),
    new Channel("Coding Train", "https://yt3.ggpht.com/a-/AN66SAw73K0zo5OAEFdMYWhmSJepKitKyDSW4P46wQ=s288-mo-c-c0xffffffff-rj-k-no", "In this YouTube channel I publish \"creative coding\" video tutorials every week. Subjects covered range from the basics of programming languages like JavaScript (with p5.js) and Java (with Processing) to generative algorithms like physics simulation, computer vision, and data visualization."),
    new Channel("Coding Train", "https://yt3.ggpht.com/a-/AN66SAw73K0zo5OAEFdMYWhmSJepKitKyDSW4P46wQ=s288-mo-c-c0xffffffff-rj-k-no", "In this YouTube channel I publish \"creative coding\" video tutorials every week. Subjects covered range from the basics of programming languages like JavaScript (with p5.js) and Java (with Processing) to generative algorithms like physics simulation, computer vision, and data visualization."),
    new Channel("NFL", "https://yt3.ggpht.com/a-/AN66SAwnbo8iBPftYPatwm-F4udpAIdxnheCZ2ss2A=s288-mo-c-c0xffffffff-rj-k-no", "The official YouTube page of the NFL. Subscribe to the NFL YouTube channel to see immediate in-game highlights from your favorite teams and players, daily fantasy football updates, all your favorite NFL podcasts, and more!"),
    new Channel("CNN", "https://yt3.ggpht.com/a-/AN66SAz-dUVC7Ze4UxFf8Vzu1Z3tt0HnsyiTOVPdWg=s288-mo-c-c0xffffffff-rj-k-no", "CNN operates as a division of Turner Broadcasting System, which is a subsidiary of Warner Media. CNN identifies itself as -- and is widely known to be - the most trusted source for news and information. The CNN umbrella includes nine cable and satellite television networks, two radio networks, the CNN Digital Network, which is the top network of news Web sites in the United States, and CNN Newsource, the world's most extensively syndicated news service. CNN is proud of our ability to bring you up-to-the-minute news from around the world, as a result of our many extensions.")
  ];

  masterVideoList: Video[] = [
    new Video("Man arrested in connection to suspicious devices", "https://www.youtube.com/watch?v=f-Y_ykluDHc", this.masterChannelList[6], "Federal authorities arrest a person in Florida in connection to the packages containing suspected explosives, multiple law enforcement sources say.", [this.masterCategoryList[1]], 4 * 60 + 12),
    new Video("Man arrested in connection to suspicious devices", "https://www.youtube.com/watch?v=f-Y_ykluDHc", this.masterChannelList[6], "Federal authorities arrest a person in Florida in connection to the packages containing suspected explosives, multiple law enforcement sources say.", [this.masterCategoryList[1]], 4 * 60 + 12),
    new Video("Man arrested in connection to suspicious devices", "https://www.youtube.com/watch?v=f-Y_ykluDHc", this.masterChannelList[6], "Federal authorities arrest a person in Florida in connection to the packages containing suspected explosives, multiple law enforcement sources say.", [this.masterCategoryList[1]], 4 * 60 + 12),
    new Video("Man arrested in connection to suspicious devices", "https://www.youtube.com/watch?v=f-Y_ykluDHc", this.masterChannelList[6], "Federal authorities arrest a person in Florida in connection to the packages containing suspected explosives, multiple law enforcement sources say.", [this.masterCategoryList[1]], 4 * 60 + 12),
  ];

  selectedChannel: Channel = null;
  newChannel: Channel = null;
  channelToSell: Channel = null;

}
