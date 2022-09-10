export enum Category {
  Food = 'Food',
  Clothing = 'Clothing',
  Bills = 'Bills',
  Entertainment = 'Entertainment',
  Empty = '',
}
export interface Expense {
  description: string;
  category: string;
  amount: number;
}
