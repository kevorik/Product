import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {  
    products:any;
    
      constructor(public dataService: DataService) { }
    
      ngOnInit(): void {  
        this.getproducts()
      }
    
      getproducts(){
        this.dataService.getProducts().subscribe((res: any) => {
          this.products=res,
          console.log('response',res);
        })
      }

      deleteproducts(id: any){
        console.log('id');
        this.dataService.deleteIdProducts(id).subscribe((del: any)=>{
         this.getproducts()
         
         
        })
      }

    }
 