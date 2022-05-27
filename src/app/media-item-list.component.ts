import { Component, OnInit } from "@angular/core";
import { MediaItemService } from "./media-item.service";

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponenet implements OnInit {
  mediaItems;

  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit(): void {
      this.mediaItems = this.mediaItemService.get();
  }

  onMediaItemDelete(mediaItem) {
    console.dir(mediaItem)
    this.mediaItemService.delete(mediaItem);
  }
}
