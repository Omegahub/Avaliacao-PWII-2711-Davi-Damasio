import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Potencia } from '../model/potencia';
import { OperacaoAPIServiceService } from '../service/operacao-apiservice.service';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'has-operacao',
  templateUrl: './operacao.component.html',
  styleUrls: ['./operacao.component.css']
})
export class OperacaoComponent implements OnInit {

  operacaoForm: FormGroup;
  potencia: Potencia;
  operacaoService: OperacaoAPIServiceService;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.operacaoForm = this.formBuilder.group({
      num1: this.formBuilder.control(''),
      num2: this.formBuilder.control('')
    })
  }

  onProcessar(){
    let numero1 : string = this.operacaoForm.value.num1;
    let numero2 : string = this.operacaoForm.value.num2;
    this.operacaoService.postPotencia(this.potencia);
                    

  }


}
