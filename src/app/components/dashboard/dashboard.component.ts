import { Component, OnInit } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  _totalExpenses$: Observable<number> | undefined;
  _totalBudget$: Observable<number> | undefined;
  percentage: number = 0;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this._totalExpenses$ = this.expenseService.getTotalExpenses();
    this._totalBudget$ = this.expenseService.getTotalBudget();
  }

  updateProgress(): any {
    let totalBudget = 0;
    this.expenseService
      .getTotalBudget()
      .subscribe((value) => (totalBudget = value));
    this.expenseService.getTotalExpenses().subscribe((total) => {
      this.percentage = ((total ? total : 0) / totalBudget) * 100;
    });

    return { width: `${this.percentage}%` };
  }
}
