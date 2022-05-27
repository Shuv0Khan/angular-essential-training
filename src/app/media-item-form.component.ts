import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { MediaItemService } from "./media-item.service";
import { lookupListToken } from "./providers";

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit{
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupList,
    private router: Router) {}

  ngOnInit(): void {
      this.form = this.formBuilder.group({
        medium: this.formBuilder.control('Movies'),
        name: this.formBuilder.control('', Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+')
        ])),
        category: this.formBuilder.control(''),
        year: this.formBuilder.control('', this.yearValidator)
      })
  }

  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }

    const year = parseInt(control.value, 10);
    const min = 1900;
    const max = 2100;
    if (min <= year && year <= max) {
      return null;
    } else {
      return { year: {
        min,
        max
      } };
    }
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
    this.mediaItemService.add(mediaItem)
      .subscribe(() => {
        this.router.navigate(['/', mediaItem.medium]);
      });
  }
}
