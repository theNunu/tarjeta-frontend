import { CommonModule, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tarjeta-credito',
  imports: [NgForOf, ReactiveFormsModule, CommonModule],
  templateUrl: './tarjeta-credito.component.html',
  styleUrl: './tarjeta-credito.component.css'
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[] = [
    {
      titular: 'walter',
      numeroTarjeta: '0957976462',
      fechaExpiracion: '12/25',
      cvv: '564'
    },
    {
      titular: 'jesse',
      numeroTarjeta: '09000976462',
      fechaExpiracion: '08/25',
      cvv: '094'
    },
    {
      titular: 'saul',
      numeroTarjeta: '090008372',
      fechaExpiracion: '08/25',
      cvv: '090'
    },

  ];

  form: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      titular: ['',Validators. required],
      numeroTarjeta: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    })
  }

  agregarTarjeta(){
    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,

    }

    this.listTarjetas.push(tarjeta);
    this.toastr.success('La tarjeta ha sido agregada con exito!', 'Tarjeta agregada');
    this.form.reset();

  }

  eliminarTarjeta(){

    console.log('eliminar tarjeta');
    this.toastr.error('La tarjeta ha sido eliminada con exito!', 'Tarjeta eliminada');
    // this.listTarjetas

  }

  ngOnInit(): void {

  }

}
