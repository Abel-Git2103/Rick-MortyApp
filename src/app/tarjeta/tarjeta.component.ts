import { Component, Input, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  characters: any = null;

  constructor(private charactersService: CharactersService) {}

  ngOnInit() {
    this.charactersService.retornar()
      .subscribe(result => this.characters = result);
  }
}
