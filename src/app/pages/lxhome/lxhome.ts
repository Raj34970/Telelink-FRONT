import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lxhome',
  imports: [Header, Footer, RouterLink],
  templateUrl: './lxhome.html',
  styleUrl: './lxhome.css',
})
export class Lxhome {}
