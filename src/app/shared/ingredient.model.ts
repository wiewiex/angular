export class Ingredient {
  public name: string;
  public amount: number;

  constructor({ name, amount }: { name: string; amount: number }) {
    this.name = name;
    this.amount = amount;
  }
}
