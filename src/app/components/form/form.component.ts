import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category, Expense } from 'src/app/interfaces/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  expense: Expense = {
    description: '',
    category: Category.Empty,
    amount: 0,
  };
  totalBudget: number = 1000;

  categories: string[] = [
    Category.Empty,
    Category.Bills,
    Category.Clothing,
    Category.Entertainment,
    Category.Food,
  ];

  @ViewChild('expenseForm') expenseForm: NgForm | undefined;
  @ViewChild('budgetForm') budgetForm: NgForm | undefined;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {}

  submitForm() {
    if (this.expenseForm !== undefined) {
      this.expenseService.addExpense(this.expenseForm.value);
      this.expenseForm.reset();
    }
  }

  setBudget() {
    if (this.budgetForm !== undefined) {
      this.expenseService.setBudget(this.totalBudget);
    }
  }
}
