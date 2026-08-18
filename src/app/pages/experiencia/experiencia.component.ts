import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';

import EmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Project } from '../../interfaces';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('emblaRef') emblaRef!: ElementRef<HTMLElement>;

  sideProjects!: Project[];
  works!: any[];

  private emblaApi?: EmblaCarouselType;
  scrollSnaps: number[] = [];
  selectedIndex = 0;

  constructor(private ngZone: NgZone) {
    this.sideProjects = [
      {
        image: './assets/img/chap-coffee.png',
        name: 'Chap Coffee',
        url: 'https://alejandro7536.github.io/coffe-app/',
        fechaInicio: 'Julio 2026',
        fechaFin: 'Agosto 2026'
      },
      {
        image: './assets/img/author.png',
        name: 'Author Print',
        url: 'https://app.author-print.com/auth/login',
        fechaInicio: 'Febrero 2025',
        fechaFin: 'Julio 2025'
      },
      {
        image: './assets/img/driveNow.png',
        name: 'Drivenowsv',
        url: 'http://drivenowsv.com/',
        fechaInicio: 'Febrero 2025',
        fechaFin: 'Actualidad'
      },
      {
        image: './assets/img/pefis.png',
        name: 'Pefis web',
        url: 'http://pefis.elesteam.com/',
        fechaInicio: 'Marzo 2020',
        fechaFin: 'Abril 2020'
      },
      // {
      //   image: './assets/img/filechap.png',
      //   name: 'FileChap',
      //   url: 'https://filechap.elesteam.com/',
      //   fechaInicio: 'Agosto 2020',
      //   fechaFin: 'Octubre 2020'
      // },
      {
        image: './assets/img/vago.svg',
        name: 'Vago',
        url: 'https://vago.elesteam.com/',
        fechaInicio: 'Enero 2021',
        fechaFin: 'Febrero 2021'
      },
      {
        image: './assets/img/avisame.png',
        name: 'Avisame Web',
        url: 'https://avisame.elesteam.com/',
        fechaInicio: 'Noviembre 2020',
        fechaFin: ''
      },
      {
        image: './assets/img/cinema.png',
        name: 'PelisApp',
        url: 'https://alejandro7536.github.io/peliculas-app/',
        fechaInicio: 'Octubre 2020',
        fechaFin: ''
      },
      {
        image: './assets/img/spotimusic.png',
        name: 'Spotimusic',
        url: 'https://alejandro7536.github.io/spotimusic/',
        fechaInicio: 'Septiembre 2020',
        fechaFin: ''
      }
    ];
    this.works = [
      {
        image: './assets/img/promerica.jpg',
        url: 'https://www.promerica.com.sv/',
        position: 'Analista Programador',
        fechaInicio: 'Junio 2022',
        fechaFin: 'Enero 2026',
        empresa: 'Banco Promerica El Salvador'
      },
      {
        image: './assets/img/promerica.jpg',
        url: 'https://www.promerica.com.sv/',
        position: 'Desarrollador Angular',
        fechaInicio: 'Enero 2021',
        fechaFin: 'Mayo 2022',
        empresa: 'Banco Promerica El Salvador'
      },
      {
        image: './assets/img/creativa.png',
        url: 'https://creativaconsultores.com/',
        position: 'Java Junior developer',
        fechaInicio: 'Diciembre 2020',
        fechaFin: null,
        empresa: 'Creativa Consultores'
      }
    ]
  }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const options: EmblaOptionsType = {
      loop: false,
      align: 'start',
      containScroll: 'trimSnaps'
    };

    // Embla's internal scroll/resize listeners run on every frame while
    // dragging; keeping them outside Angular's zone avoids a change
    // detection cycle per pointer move.
    this.ngZone.runOutsideAngular(() => {
      this.emblaApi = EmblaCarousel(this.emblaRef.nativeElement, options, [
        Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
      ]);
      this.emblaApi.on('init', () => this.syncState());
      this.emblaApi.on('reInit', () => this.syncState());
      this.emblaApi.on('select', () => this.syncState());
    });
  }

  ngOnDestroy(): void {
    this.emblaApi?.destroy();
  }

  scrollTo(index: number): void {
    this.emblaApi?.scrollTo(index);
  }

  private syncState(): void {
    if (!this.emblaApi) {
      return;
    }
    const scrollSnaps = this.emblaApi.scrollSnapList();
    const selectedIndex = this.emblaApi.selectedScrollSnap();
    this.ngZone.run(() => {
      this.scrollSnaps = scrollSnaps;
      this.selectedIndex = selectedIndex;
    });
  }

}
