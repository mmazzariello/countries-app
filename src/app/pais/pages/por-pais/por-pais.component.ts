import { Component, OnInit } from '@angular/core';
import { Country } from '../../intefaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string= '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar( termino: string ) {
    this.hayError = false;

    //Aca esroy diciendo que el this.termino es igual al termino que recibo como argumento
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        console.log(paises)
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      })
  }

  sugerencias(termino: string) {
    this.hayError = false;
    //TODO: crear sugerencias
  }

  ngOnInit(): void {
  }

}
