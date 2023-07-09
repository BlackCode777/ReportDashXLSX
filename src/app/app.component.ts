import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  /* variável ngModel para salvar os itens escolhidos no dropbox */
  public selectedReport: any;

  /* um array de itens de nomes de relatórios */
  public reportsGroups: Array<any> = [
    
      { id: 1, name: 'Relatório de Vendas por Período' },
      { id: 2, name: 'Relatório de Vendas por Produto' },
      { id: 3, name: 'Relatório de Vendas por Cliente' },
      { id: 4, name: 'Relatório de Vendas por Vendedor' }
    
  ];

}
