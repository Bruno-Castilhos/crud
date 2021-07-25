import { HeaderService } from './../../components/template/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable';

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

  public openPDF() {
    let doc = new jsPDF()
    let col = ["Id", "Name", "Price"];
    let rows: string[][] = []

    let itemNew = [
    {id: "1721079361", name: "0001", price: "2100074911"},
    {id: "1721079362", name: "0002", price: "2100074912"},
    {id: "1721079363", name: "0003", price: "2100074913"},
    {id: "1721079364", name: "0004", price: "2100074914"},
    ]
    itemNew.forEach(element => {      
    let temp = [element.id,element.name,element.price];
    rows.push(temp);
    })

    autoTable(doc, {
      head: [col],
      body: rows,
    })

    doc.save('Test.pdf');

  }
  
}