import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

import { InformationRow } from 'src/app/interfaces';
import { Certificacion } from '../../interfaces';
import { HttpClient } from '@angular/common/http';
import { ajax } from 'rxjs/ajax'
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  edad!: number;
  informacion!: InformationRow[];
  certificaciones!: Certificacion[];
  tecImages!: any[];
  mailForm!: FormGroup;
  enviando: boolean = false;
  copiedField: string | null = null;
  showContactForm: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private gtm: GoogleTagManagerService
  ) {
    this.informacion = [
      {
        title: 'Edad',
        description: `${new Date().getFullYear() - 1995} años`,
        icon: 'age'
      },
      {
        title: 'Dirección',
        description: 'Santa Rita, Chalatenango',
        icon: 'location'
      },
      {
        title: 'Fecha de nacimiento',
        description: '28 de febrero de 1995',
        icon: 'calendar'
      },
      {
        title: 'Teléfono',
        description: '75345969',
        icon: 'phone'
      },
      {
        title: 'Idiomas',
        description: 'Español, inglés básico',
        icon: 'language'
      },
      {
        title: 'Correo',
        description: 'alejandroalas7536@gmail.com',
        icon: 'mail'
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
      }
    ]

    this.tecImages = [
      {
        value: './assets/tec/angular.svg'
      },
      {
        value: './assets/tec/react.svg'
      },
      {
        value: './assets/tec/Next.js.svg'
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
      {
        value: './assets/tec/ic_looker_studio.svg'
      },
      {
        value: './assets/tec/claude-color.svg'
      },
    ]
  }

  ngOnInit(): void {
    this.createForm();
  }

  copyToClipboard(value: string, field: string): void {
    navigator.clipboard.writeText(value).then(() => {
      this.copiedField = field;
      setTimeout(() => {
        if (this.copiedField === field) {
          this.copiedField = null;
        }
      }, 1500);
    });
  }

  createForm() {
    this.mailForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.mailForm.valid) {
      this.mailForm.disable();
      this.enviando = true;
      let form = new FormData();
      form.append("name", this.mailForm.get('name')?.value);
      form.append("email", this.mailForm.get('email')?.value);
      form.append("message", this.mailForm.get('message')?.value);
      form.append("_subject", "Portafolio");
      form.append("_honey", "");
      form.append("_captcha", "false");

      ajax.post('https://formsubmit.co/b631ee1fb3c5e766db3239fba462a194', form).subscribe(
        res => {
          if (res.status == 200) {
            Swal.fire({
              title: `Hola ${this.mailForm.get('name')?.value} 👋`,
              text: 'Tu mensaje ha sido enviado',
              width: 600,
              icon: 'success',
              padding: '3em',
              confirmButtonColor: 'green',
              backdrop: `
            rgba(0,0,0,0.3)
          `
            })
            this.enviando = false;
            this.mailForm.reset();
            this.mailForm.enable();
          }
        }, error => {
          Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'Algo salió mal!'
          })
        }
      )

      this.gtm.pushTag({
        event: 'sendMail',
        content: {
          description: 'Contacto por correo electronico',
          name: this.mailForm.get('name')?.value,
          email: this.mailForm.get('email')?.value,
          message: this.mailForm.get('message')?.value
        }
      });
    }
  }

  get nameValid() {
    return this.mailForm.get('name')?.invalid && this.mailForm.get('name')?.touched;
  }
  get emailValid() {
    return this.mailForm.get('email')?.invalid && this.mailForm.get('email')?.touched;
  }
  get messageValid() {
    return this.mailForm.get('message')?.invalid && this.mailForm.get('message')?.touched;
  }

  senTagCV() {
    this.gtm.pushTag({
      event: 'donwloadCV',
      content: {
        description: 'Descarga de CV'
      }
    });
  }

}
