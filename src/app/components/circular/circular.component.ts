import { Component } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.sass']
})
export class CircularComponent {

  // Grafico Circular
  public doughnutChartLabels: string[] = ['Chile', 'Brasil', 'España'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: String = 'doughnut';

  // Grafico Pie
    public pieChartLabels: string[] = ['Automovil', 'Moto', 'Tren'];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: String = 'pie';

  // Evento
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
