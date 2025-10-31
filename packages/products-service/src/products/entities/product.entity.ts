export class Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: string,
    name: string,
    price: number,
    quantity: number,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || new Date();
  }
}
