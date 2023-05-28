import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  create(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({
      data: { ...createOrderDto },
    });
  }

  findAll() {
    return this.prisma.order.findMany();
  }

  findOne(id: number) {
    return this.prisma.order.findUnique({
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.order.delete({
      where: { id },
    });
  }
}
