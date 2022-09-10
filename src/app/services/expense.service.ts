import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Expense } from '../interfaces/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private _totalExpenses = new BehaviorSubject<number>(0);
  private _totalExpenses$ = this._totalExpenses.asObservable();
  private expenses: Expense[] = [];
  private _totalBudget = new BehaviorSubject<number>(1000);
  private _totalBudget$ = this._totalBudget.asObservable();

  constructor() {}

  getTotalExpenses() {
    return this._totalExpenses$;
  }

  getTotalBudget() {
    return this._totalBudget$;
  }

  getListExpenses() {
    return this.expenses;
  }

  addExpense(item: Expense) {
    this.expenses.push(item);
    this._totalExpenses.next(this._totalExpenses.getValue() + item.amount);
  }

  setBudget(newBudget: number) {
    this._totalBudget.next(newBudget);
  }
}
