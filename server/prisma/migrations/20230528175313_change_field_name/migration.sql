/*
  Warnings:

  - You are about to drop the column `otder_id` on the `Goods` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Goods" DROP CONSTRAINT "Goods_otder_id_fkey";

-- AlterTable
ALTER TABLE "Goods" DROP COLUMN "otder_id",
ADD COLUMN     "order_id" INTEGER;

-- AddForeignKey
ALTER TABLE "Goods" ADD CONSTRAINT "Goods_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
