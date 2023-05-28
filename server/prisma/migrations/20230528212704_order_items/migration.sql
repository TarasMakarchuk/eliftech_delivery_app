/*
  Warnings:

  - Added the required column `items` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Goods" DROP CONSTRAINT "Goods_order_id_fkey";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "items" TEXT NOT NULL;
