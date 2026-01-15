import { CommonModule, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


import { ToastrService } from 'ngx-toastr';
import { TarjetaService } from '../Services/tarjeta.service';

@Component({
  selector: 'app-tarjeta-credito',
  imports: [NgForOf, ReactiveFormsModule, CommonModule],
  templateUrl: './tarjeta-credito.component.html',
  styleUrl: './tarjeta-credito.component.css'
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[] = [

  ];

  form: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private _tarjetaService: TarjetaService) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    })
  }


  ngOnInit(): void {
    this.obtenerTarjetas();

  }

  obtenerTarjetas() {
    this._tarjetaService.getListTarjetas().subscribe(data => {
      console.log(data);
      this.listTarjetas = data;
    }, error => {
      console.log(error);
    })

  }

  agregarTarjeta() {
    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,

    }

    this._tarjetaService.saveTarjeta(tarjeta).subscribe(data => {
      this.toastr.success('La tarjeta ha sido agregada con exito!', 'Tarjeta agregada');
      this.obtenerTarjetas();
      this.form.reset();

    }, error => {
      this.toastr.error('Algo fallo al momentyo de guardar', 'Error');
      console.log(error);

    })
    // this.listTarjetas.push(tarjeta);
    // this.toastr.success('La tarjeta ha sido agregada con exito!', 'Tarjeta agregada');
    // this.form.reset();

  }

  eliminarTarjeta(id: number) {
    this._tarjetaService.deleteTarjeta(id).subscribe(data => {
      this.toastr.error('La tarjeta ha sido eliminada con exito!', 'Tarjeta eliminada');
      this.obtenerTarjetas();
    }, error => {
      console.log(error);
    });

  }

  //  eliminarTarjeta() {

  //   console.log('eliminar tarjeta');
  //   this.toastr.error('La tarjeta ha sido eliminada con exito!', 'Tarjeta eliminada');
  //   // this.listTarjetas

  // }


}
