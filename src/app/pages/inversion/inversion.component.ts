import { Component, OnInit } from '@angular/core';
import { Moneda, Image } from '../../interfaces';

@Component({
  selector: 'app-inversion',
  templateUrl: './inversion.component.html',
  styleUrls: ['./inversion.component.css']
})
export class InversionComponent implements OnInit {

  monedas!: Moneda[];

  constructor() { }

  ngOnInit(): void {
    this.monedas = [
      {
        image: './assets/svg/shiba.svg',
        name: 'Shiba Inu',
        shortName: 'SHIB',
        porcentaje: 75
      },
      {
        image: './assets/svg/cardano.svg',
        name: 'Cardano',
        shortName:'ADA',
        porcentaje: 15
      },
      {
        image: './assets/img/saitama.png',
        name: 'Saitama',
        shortName:'SAITAMA',
        porcentaje: 10
      },
      {
        image: './assets/img/kishu.jpg',
        name: 'Kishu Inu',
        shortName:'KISHU',
        porcentaje: 10
      },
      {
        image: './assets/svg/safemoon.svg',
        name: 'SafeMoon',
        shortName:'SAFEMOON',
        porcentaje: 10
      }
    ]
  }

}
