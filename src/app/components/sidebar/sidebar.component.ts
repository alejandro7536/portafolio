import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('spotlightCard') spotlightCard!: ElementRef<HTMLElement>;
  @ViewChild('spotlightGlow') spotlightGlow!: ElementRef<HTMLElement>;

  private onPointerMove = (event: PointerEvent) => {
    const card = this.spotlightCard.nativeElement;
    const rect = card.getBoundingClientRect();
    const glow = this.spotlightGlow.nativeElement.style;
    glow.setProperty('--spotlight-x', `${event.clientX - rect.left}px`);
    glow.setProperty('--spotlight-y', `${event.clientY - rect.top}px`);
  };

  private onPointerEnter = () => {
    this.spotlightGlow.nativeElement.style.setProperty('--spotlight-opacity', '0.35');
  };

  private onPointerLeave = () => {
    this.spotlightGlow.nativeElement.style.setProperty('--spotlight-opacity', '0');
  };

  constructor(
    public sidebarService: SidebarService,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Runs outside Angular's zone: mousemove fires on every pixel, and only
    // the glow's own CSS variables need to change, so a change detection
    // cycle per event would be pure waste.
    this.ngZone.runOutsideAngular(() => {
      const card = this.spotlightCard.nativeElement;
      card.addEventListener('pointermove', this.onPointerMove);
      card.addEventListener('pointerenter', this.onPointerEnter);
      card.addEventListener('pointerleave', this.onPointerLeave);
    });
  }

  ngOnDestroy(): void {
    const card = this.spotlightCard?.nativeElement;
    card?.removeEventListener('pointermove', this.onPointerMove);
    card?.removeEventListener('pointerenter', this.onPointerEnter);
    card?.removeEventListener('pointerleave', this.onPointerLeave);
  }

}
