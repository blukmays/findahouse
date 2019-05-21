import { Component, OnInit } from '@angular/core';
import { CribService } from './../crib-listing/crib-listing.service';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

    propertyTypes: Array<string> = ['House', 'Condo', 'Duplex'];
  constructor( public cribService: CribService) { }

  ngOnInit() {
  }

  onCribSubmit(data): void {
    this.cribService.addCrib(data);
  }

}
