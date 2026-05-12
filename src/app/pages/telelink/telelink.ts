import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-telelink',
  imports: [Header, Footer, RouterModule],
  templateUrl: './telelink.html',
  styleUrl: './telelink.css',
})
export class Telelink {}
