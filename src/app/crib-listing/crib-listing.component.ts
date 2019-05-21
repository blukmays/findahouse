import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CribService } from './crib-listing.service';
import { Crib } from '../crib'
@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {
  
  public cribs: Array<Crib> = [];
  error: string;

  constructor(private _cribService: CribService) { }

  ngOnInit() {
    this._cribService.getCrib()
    .subscribe(data => {
      this.cribs = data;
      console.log(this.cribs);
    });
    this._cribService.newCribSubject.subscribe(
      data => console.log(data)
    );
  }

}
