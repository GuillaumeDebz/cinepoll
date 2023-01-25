import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hide-password',
  templateUrl: './hide-password.component.html',
  styleUrls: ['./hide-password.component.scss'],
})
export class HidePasswordComponent implements OnInit {
  
  // EXPORTER STATUS HIDE //
  @Output() hideStatus = new EventEmitter<boolean>();
  
  // STATUS HIDE //
  hide: boolean = true


  constructor() { }

  ngOnInit() { }


  // HIDE PASSWORD //
  public hidePassword() {
    this.hide = !this.hide
    this.hideStatus.emit(this.hide)
  };


}
