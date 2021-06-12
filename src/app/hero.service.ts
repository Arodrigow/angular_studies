import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "./mock-heros";
import { MessagesService } from "./messages.service";

import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messagesService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messagesService.add("Hero service: fetched heroes");
    return heroes;
  }

  getHero(id: Number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messagesService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
