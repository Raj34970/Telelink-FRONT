import { Component } from '@angular/core';
import { Header } from '../../../components/header/header';
import { Footer } from '../../../components/footer/footer';

@Component({
  selector: 'app-automation',
  imports: [Header, Footer],
  templateUrl: './automation.html',
  styleUrl: './automation.css',
})
export class Automation {}
