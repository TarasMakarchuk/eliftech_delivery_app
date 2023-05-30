import { Injectable } from '@nestjs/common';
import { CreateGoodsDto } from './dto/create-goods.dto';
import { UpdateGoodsDto } from './dto/update-goods.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class GoodsService {
  constructor(private prisma: PrismaService) {}

  create(createGoodsDto: CreateGoodsDto) {
    return this.prisma.goods.create({
      data: { ...createGoodsDto },
    });
  }

  findAll() {
    return this.prisma.goods.findMany();
  }

  findAllWithShopRelation() {
    return this.prisma.shop.findMany({
      include: {
        goods: true,
      },
    });
  }

  update(id: number, updateGoodsDto: UpdateGoodsDto) {
    return this.prisma.goods.update({
      where: { id },
      data: {
        ...updateGoodsDto,
      },
    });
  }

  remove(id: number) {
    return this.prisma.goods.delete({
      where: { id },
    });
  }
}
