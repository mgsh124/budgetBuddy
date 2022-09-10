import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/interfaces/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenses = this.expenseService.getListExpenses();
  }
}
