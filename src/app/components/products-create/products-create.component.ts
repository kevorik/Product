import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  constructor(
    private dataService:DataService,
    private modalService: ModalService
    ){}

  form = new FormGroup({
    title: new FormControl(''),
    inStok: new FormControl(false),
    price: new FormControl(null),
    raiting: new FormControl(null),
    image: new FormControl('')
  })


  ngOnInit(): void {
  }

  submit(){
    this.dataService.postProducts({
      title: this.form.value.title,
      inStok: this.form.value.inStok,
      price: this.form.value.price,
      raiting: this.form.value.raiting,
      image: this.form.value.image
    }).subscribe(() => {
      this.modalService.close(),
      this.dataService.getProducts()
    })
    
  }

}
