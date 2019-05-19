import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CribService } from './crib-listing.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  public crib = [];

  constructor(private _cribService: CribService) { }

  ngOnInit() {
    this._cribService.getCrib()
    .subscribe(data => this.crib = data);
  }

}
