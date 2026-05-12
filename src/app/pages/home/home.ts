import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

 onMouseMove(event: MouseEvent, card: HTMLElement) {
    const rect = card.getBoundingClientRect();
    
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
  
    card.style.transform = `perspective(1000px) rotateX(${y * -20}deg) rotateY(${x * 20}deg) scale(1.05)`;
    card.style.transition = 'transform 0.05s ease-out';
  }

  onMouseLeave(card: HTMLElement) {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    card.style.transition = 'transform 0.5s ease-in-out';
  }

}
