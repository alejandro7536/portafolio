import { Component, OnInit } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y , SwiperOptions, Autoplay} from 'swiper';
import { Project } from '../../interfaces';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  sideProjects!: Project[];

  constructor() {
    this.sideProjects = [
      {
        image: '/assets/img/pefis.png',
        name: 'Pefis web',
        url: 'http://pefis.elesteam.com/',
        fechaInicio: 'Marzo 2020',
        fechaFin: 'Abril 2020'
      },
      {
        image: '/assets/img/filechap.png',
        name: 'FileChap',
        url: 'https://filechap.elesteam.com/',
        fechaInicio: 'Agosto 2020',
        fechaFin: 'Octubre 2020'
      },
      {
        image: '/assets/img/vago.svg',
        name: 'Vago',
        url: 'https://vago.elesteam.com/',
        fechaInicio: 'Enero 2021',
        fechaFin: 'Febrero 2021'
      },
      {
        image: '/assets/img/avisame.png',
        name: 'Avisame Web',
        url: 'https://avisame.elesteam.com/',
        fechaInicio: 'Noviembre 2020',
        fechaFin: ''
      },
      {
        image: '/assets/img/cinema.png',
        name: 'PelisApp',
        url: 'https://alejandro7536.github.io/peliculas-app/',
        fechaInicio: 'Octubre 2020',
        fechaFin: ''
      },
      {
        image: '/assets/img/spotimusic.png',
        name: 'Spotimusic',
        url: 'https://alejandro7536.github.io/spotimusic/',
        fechaInicio: 'Septiembre 2020',
        fechaFin: ''
      }
    ]
   }


  config: SwiperOptions = {
    navigation: false,
    pagination: { clickable: true },
    autoplay: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.7,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3.3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      900: {
        slidesPerView: 4.3,
        spaceBetween: 50
      }
    }
  };

  ngOnInit(): void {

  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
