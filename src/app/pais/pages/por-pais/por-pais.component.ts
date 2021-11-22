import { Component, OnInit } from '@angular/core';
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

  constructor(private paisService: PaisService) { }

  buscar() {
    this.hayError = false;
    console.log(this.termino)

    this.paisService.buscarPais(this.termino)
      .subscribe(resp => {
        console.log(resp)
      }, (err) => {
        this.hayError = true;
      })
  }

  ngOnInit(): void {
  }

}
