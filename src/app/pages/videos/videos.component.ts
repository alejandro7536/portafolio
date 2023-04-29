import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/interfaces';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  public videos!: Video[];
  public videosMusica!: Video[];

  constructor() { }

  ngOnInit(): void {
    this.videos = [
      {
        url:'https://www.youtube.com/embed/LEdYB0R6mkw',
        name: 'Google Tag Manager y Google Analytics 4 en Angular',
        fecha: '21 ene 2023'
      },
      {
        url:'https://www.youtube.com/embed/fpNsxkRwHjw',
        name: 'ChatGPT en Angular - Parte 1',
        fecha: '25 feb 2023'
      },
      {
        url:'https://www.youtube.com/embed/FOo1gpxm8k8',
        name: 'Como subir tu Angular app a Github Pages',
        fecha: '28 nov 2020'
      },
      {
        url:'https://www.youtube.com/embed/nLa3Ei3ASkc',
        name: 'Como proteger rutas con Firebase Auth en nuestra Angular app',
        fecha: '25 nov 2020'
      },
      {
        url:'https://www.youtube.com/embed/wmgit6KhGUQ',
        name: 'Autenticación con Google en Firebase desde nuestra Angular app',
        fecha: '19 nov 2020'
      },
      {
        url:'https://www.youtube.com/embed/dALU07mnOgQ',
        name: 'Crea prototipos fácil y rápido con marvel 3',
        fecha: '18 nov 2020'
      },
      {
        url:'https://www.youtube.com/embed/Ey70743NZcE',
        name: 'Creación de slider para colecciones en angular',
        fecha: '16 nov 2020'
      },
      {
        url:'https://www.youtube.com/embed/u1S7tnrIqIM',
        name: 'Consultas en Firebase desde Angular',
        fecha: '14 nov 2020'
      },
      {
        url:'https://www.youtube.com/embed/dj5NaKEJCns',
        name: 'Cloud Firestore collections en Angular',
        fecha: '9 nov 2020'
      },
      {
        url:'https://www.youtube.com/embed/Ek3LyBWtJbY',
        name: 'Como subir tu Angular app a Firebase hosting',
        fecha: '6 nov 2020'
      },
      {
        url:'https://www.youtube.com/embed/_Mkxfz5yjdE',
        name: 'Cómo crear un Wizard (stepper) customizado',
        fecha: '9 ene 2022'
      },
      {
        url:'https://www.youtube.com/embed/LwKsb6116DE',
        name: 'Implementado Google Analytics en una Angular app',
        fecha: '15 ene 2022'
      }
    ];

    this.videosMusica = [
      {
        url:'https://www.youtube.com/embed/-uoAWauxju0',
        name: 'Vida Encontré - Cover - Tutorial - Guitarra',
        fecha: '13 feb 2023'
      },
      {
        url:'https://www.youtube.com/embed/pRbXG-dTTbk',
        name: 'Poderoso 25 conmemorativo - Cover - Tutorial - Guitarra',
        fecha: '5 feb 2023'
      },
      {
        url:'https://www.youtube.com/embed/nWUAk9Z2kGg',
        name: 'Tú Harás - Solo de Guitarra - Cover - Tutorial',
        fecha: '29 ene 2023'
      },
      {
        url:'https://www.youtube.com/embed/g3ory4zew2o',
        name: 'Modificando secuencias con Reaper',
        fecha: '22 ene 2022'
      },
      {
        url:'https://www.youtube.com/embed/zoPqAUYfHYc',
        name: 'Porque estás aquí - Cover',
        fecha: '13 dic 2020'
      }
    ]
  }

}
