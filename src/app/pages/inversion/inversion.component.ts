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
        image: './assets/svg/polkadot.svg',
        name: 'Polkadot',
        shortName:'DOT',
        porcentaje: 10
      }
    ]
  }

}
