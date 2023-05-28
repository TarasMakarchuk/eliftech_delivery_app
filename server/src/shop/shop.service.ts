import { Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ShopService {
  constructor(private prisma: PrismaService) {}

  create(createShopDto: CreateShopDto) {
    return this.prisma.shop.create({
      data: { ...createShopDto },
    });
  }

  findAll() {
    return this.prisma.shop.findMany();
  }

  findOne(id: number) {
    return this.prisma.shop.findUnique({
      where: { id },
    });
  }

  update(id: number, updateShopDto: UpdateShopDto) {
    return this.prisma.shop.update({
      where: { id },
      data: {
        ...updateShopDto,
      },
    });
  }

  remove(id: number) {
    return this.prisma.shop.delete({
      where: { id },
    });
  }
}
