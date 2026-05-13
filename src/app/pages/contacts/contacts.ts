import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-contacts',
  imports: [Header, Footer],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {}
