import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-tarjetadetails',
  templateUrl: './tarjetadetails.component.html',
  styleUrls: ['./tarjetadetails.component.css']
})
export class TarjetadetailsComponent implements OnInit {

  characters: any = null;
  id: any = null;

  constructor(private _route: ActivatedRoute, private charactersService: CharactersService) {}

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.charactersService.getById(this.id)
      .subscribe(result => this.characters = result);
  }
}
