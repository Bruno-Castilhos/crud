import { HeaderService } from './../../components/template/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import  html2canvas  from 'html2canvas';
import { style } from '@angular/animations';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  navProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

  public openPDF():void {
    let DATA = document.getElementById('htmlData');
        
    html2canvas(DATA!).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('l', 'mm', 'a4');
        let position = 10;
        PDF.addImage(FILEURI, 'PNG', 45, position, fileWidth, fileHeight)
        
        PDF.save('angular-demo.pdf');
    });     
    }

}
