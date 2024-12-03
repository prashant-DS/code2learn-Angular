import { NgClass } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expense-tracker',
  imports: [FormsModule, NgClass],
  templateUrl: './expense-tracker.component.html',
  styleUrl: './expense-tracker.component.scss',
})
export class ExpenseTrackerComponent {
  totalIncome = signal(0);
  totalExpense = signal(0);
  remainingBalance = computed(() => this.totalIncome() - this.totalExpense());

  tempIncomeValue = 0;
  tempExpenseValue = 0;

  constructor() {
    effect(() => {
      if (this.remainingBalance() < 0) {
        console.log('Getting low');
      }
    });
  }

  addIncome() {
    this.totalIncome.set(this.totalIncome() + this.tempIncomeValue);
    this.tempIncomeValue = 0;
  }

  addExpense() {
    this.totalExpense.set(this.totalExpense() + this.tempExpenseValue);
    this.tempExpenseValue = 0;
  }
}
