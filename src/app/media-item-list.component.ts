import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MediaItemService } from "./media-item.service";

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponenet implements OnInit {
  mediaItems;

  constructor(private mediaItemService: MediaItemService,
    private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activateRoute.paramMap
      .subscribe(paramMap => {
        let medium = paramMap.get('medium');
        if (medium.toLowerCase() === 'all') {
          medium = '';
        }

        this.getMediaItems(medium);

      })
  }

  getMediaItems(medium) {
    this.mediaItemService.get(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      })
  }

  onMediaItemDelete(mediaItem) {
    console.dir(mediaItem)
    this.mediaItemService.delete(mediaItem)
      .subscribe(()=>{
        this.getMediaItems(mediaItem.medium);
      });
  }
}
