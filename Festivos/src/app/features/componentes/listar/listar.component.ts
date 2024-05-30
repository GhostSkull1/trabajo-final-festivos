import { Component } from '@angular/core';
import { FestivoService } from '../../servicios/festivo.service';
import { FestivoDTO } from '../../../core/entidades/FestivoDTO';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule
  ],
  providers: [ DatePipe ],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {

  public year: number;
  public msgResponse: string = "";
  public year2: number = 0;
  public month: number = 0;
  public day: number = 0;
  festivos: FestivoDTO[] = [];


  columnas = [
    { prop: "nombre", name: "Festivo" },
    { prop: "fecha", name: "Fecha", pipe: this.datePipe() }
  ];

  datePipe() {
    return { transform: (value: any) => this.servicioDatePipe.transform(value, 'MM/dd/yyyy') };
  }

  constructor(private servicio: FestivoService,
    private servicioDatePipe: DatePipe
  ) {
    this.year = new Date().getFullYear();
  }

  public listar() {
    this.servicio.listar(this.year).subscribe({
      next: response => {
        this.festivos = response;
      },
      error: error => {
        window.alert(error.message);
      }
    });
  }

  public get() { this.getFestivo(this.year2, this.month, this.day); }

  private getFestivo(year: number, month: number, day: number) {
    this.servicio.getFestitivo(year, month, day).subscribe({
      next: response => {
        this.msgResponse = response.mensaje;
      },
      error: error => {
        window.alert(error.message)
      }
    })
  }

}
