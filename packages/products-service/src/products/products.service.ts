import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private items = [
    {
      id: 'adafag_1',
      name: 'laptop',
      price: 45000,
      quantity: 10,
      createdAt: '2025-10-15 14:00:00',
      updatedAt: '2025-10-15 14:00:00',
    },
    {
      id: 'adafag_2',
      name: 'television',
      price: 5000,
      quantity: 5,
      createdAt: '2025-10-15 14:00:00',
      updatedAt: '2025-10-15 14:00:00',
    },
  ];
  private product: Product[] = Array.from(
    this.items,
    (item) =>
      new Product(
        item.id,
        item.name,
        item.price,
        item.quantity,
        new Date(item.createdAt),
        new Date(item.updatedAt),
      ),
  );

  create(createProductDto: CreateProductDto) {
    return `This action adds a new product ${JSON.stringify(createProductDto)}`;
  }

  findAll() {
    return this.product;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product ${JSON.stringify(updateProductDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
