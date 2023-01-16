import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {
  @Input() titulo = '';
  @Input() iconClass = 'fa fa-user';
  @Input() subtitulo = 'Since 2011';
  @Input() botaoListar = false;
  constructor(private router: Router) { }

  ngOnInit(): void { }

  listar(): void {
    this.router.navigate([`/${this.titulo.toLocaleLowerCase()}/lista`])
  }
}
