import { Component, OnInit } from '@angular/core';
import { InformationRow } from 'src/app/interfaces';
import { Certificacion } from '../../interfaces';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  edad!:number;
  informacion!: InformationRow[];
  certificaciones!: Certificacion[];
  tecImages!: any[];

  constructor() {
    this.informacion = [
      {
        title: 'Edad',
        description: `${new Date().getFullYear() - 1995} años`
      },
      {
        title: 'Dirección',
        description: 'Colonia La Rábida, San Salvador'
      },
      {
        title: 'Correo',
        description: 'alejandroalas7536@gmail.com'
      },
      {
        title: 'Fecha de nacimiento',
        description: '28 de febrero de 1995'
      },
      {
        title: 'Teléfono',
        description: '75345969'
      },
      {
        title: 'Idiomas',
        description: 'Español, inglés básico'
      }
    ]

    this.certificaciones = [
      {
        image: './assets/svg/udemy.svg',
        name: 'Angular: De cero a experto (Angular 10+)',
        url: 'https://www.udemy.com/certificate/UC-0a8ad4b8-9805-4314-9007-df2d3bb6d6c0/'
      },
      {
        image: './assets/svg/udemy.svg',
        name: 'Angular Avanzado: Lleva tus bases al siguiente nivel - MEAN',
        url: 'http://ude.my/UC-0a8ad4b8-9805-4314-9007-df2d3bb6d6c0'
      },
      {
        image: './assets/svg/udemy.svg',
        name: 'TypeScript: Tu completa guía y manual de mano (Edición 2021)',
        url: 'https://www.udemy.com/certificate/UC-a332a10d-8c17-466c-8767-503d10033f8d/'
      },
      {
        image: './assets/svg/udemy.svg',
        name: 'ReactiveX - RxJs: De cero hasta los detalles',
        url: 'http://ude.my/UC-754df247-c0a8-45b9-8edf-ecb45cb8ef6f'
      },
      {
        image: './assets/svg/udemy.svg',
        name: 'Angular: Convierte cualquier template HTML en una WebAPP',
        url: 'http://ude.my/UC-15653e7a-23cb-462e-800b-24c4e3cc4c38'
      },
      {
        image: './assets/svg/udemy.svg',
        name: 'Visual Studio Code: Mejora tu velocidad para codificar',
        url: 'http://ude.my/UC-18f2fcf9-a7dc-4b2f-a4b0-8a3f30e08e49'
      },
      {
        image: './assets/img/certiprof.png',
        name: 'Scrum Foundations Professional Certificate (SFPC) - (Spanish)',
        url: '/'
      },
      {
        image: './assets/svg/udemy.svg',
        name: 'Curso de Trading - Gana Dinero desde Casa',
        url: 'https://www.udemy.com/certificate/UC-80349f4f-1fe3-4feb-b777-56c0b928ab28/'
      }
    ]

    this.tecImages = [
      {
        value: './assets/tec/angular.svg'
      },
      {
        value: './assets/tec/html.svg'
      },
      {
        value: './assets/tec/css.svg'
      },
      {
        value: './assets/tec/bootstrap.svg'
      },
      {
        value: './assets/tec/tailwind.svg'
      },
      {
        value: './assets/tec/materialize.svg'
      },
      {
        value: './assets/tec/javascript.svg'
      },
      {
        value: './assets/tec/typescript.svg'
      },
      {
        value: './assets/tec/springboot.png'
      },
      {
        value: './assets/tec/postman.svg'
      },
      {
        value: './assets/tec/git.svg'
      },
      {
        value: './assets/tec/github.svg'
      },
      {
        value: './assets/tec/redux.svg'
      },
      {
        value: './assets/tec/vscode.svg'
      },
      {
        value: './assets/tec/npm.svg'
      },
      {
        value: './assets/tec/nodejs.svg'
      },
      {
        value: './assets/tec/google-tag-manager.svg'
      },
      {
        value: './assets/tec/google-analytics-3.svg'
      },
    ]
  }

  ngOnInit(): void {
  }

}
