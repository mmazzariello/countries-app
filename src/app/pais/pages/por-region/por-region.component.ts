import { Component, OnInit } from '@angular/core';
import { Country } from '../../intefaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  getClaseCss(region: string) {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }

    this.regionActiva = region;
    this.paises = [];

    //TODO: hacer el llamado al servicio para traer los paises por esa region

    this.paisService.getRegionPorId(region).subscribe((paises) => {
      console.log('region', paises);
      this.paises = paises;
    });
  }
}
