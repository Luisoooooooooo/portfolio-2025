import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText)

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private split?: SplitText;

  ngOnInit() {
    requestAnimationFrame(() => {
      // selector correcto
      this.split = new SplitText('.hero-text', { type: 'lines', linesClass: 'line' });

      ScrollTrigger.refresh();

      gsap.from(this.split.lines, {
        yPercent: 120,
        autoAlpha: 0,
        stagger: 0.02,
        duration: 1,
        ease: 'power2.out'
      });
    });
  }

  ngOnDestroy() {
    this.split?.revert();
  }
}