import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(
    public router: Router,
    public modalService: ModalService,
    public dataService: DataService
    ){

  }
}
