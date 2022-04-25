import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class TestData implements InMemoryDbService {
  createDb() {
    let articleDetails = [
      {id: '1', title: 'Core Java Tutorial', category: 'Java'},
      {id: '2', title: 'Angular Tutorial', category: 'Angular'},
      {id: '3', title: 'Hibernate Tutorial', category: 'Hibernate'}
    ];
    return { articles: articleDetails };
  }
} 