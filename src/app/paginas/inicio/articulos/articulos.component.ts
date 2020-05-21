import { Component, OnInit } from '@angular/core';

//Importamos el servicio
import { ArticulosService } from '../../../services/articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  //Variables publicas o privadas
  public articulosJson:any;

  constructor(private articulosService : ArticulosService) {

    /*==========Recibiendo datos dinamicos============*/
    this.articulosService.getArticulos().subscribe( respuesta => {
      //console.log('respuesta:', respuesta)
      this.articulosJson = respuesta;

    });

  }

  ngOnInit(): void {
  }

}