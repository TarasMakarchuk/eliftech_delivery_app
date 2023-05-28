import { Injectable } from '@nestjs/common';
import { CreateGoodDto } from './dto/create-good.dto';
import { UpdateGoodDto } from './dto/update-good.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class GoodsService {
  constructor(private prisma: PrismaService) {}

  create(createGoodDto: CreateGoodDto) {
    return 'This action adds a new good';
  }

  findAll() {
    return this.prisma.goods.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} good`;
  }

  update(id: number, updateGoodDto: UpdateGoodDto) {
    return `This action updates a #${id} good`;
  }

  remove(id: number) {
    return `This action removes a #${id} good`;
  }
}
