/*
  Warnings:

  - You are about to drop the column `packageThickness` on the `Products` table. All the data in the column will be lost.
  - Made the column `originZipcode` on table `Products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `packageHeight` on table `Products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `packageWeight` on table `Products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `packageWidth` on table `Products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "packageThickness",
ADD COLUMN     "packageLength" DOUBLE PRECISION NOT NULL DEFAULT 12,
ALTER COLUMN "originZipcode" SET NOT NULL,
ALTER COLUMN "originZipcode" SET DEFAULT '92705',
ALTER COLUMN "packageHeight" SET NOT NULL,
ALTER COLUMN "packageHeight" SET DEFAULT 4,
ALTER COLUMN "packageWeight" SET NOT NULL,
ALTER COLUMN "packageWeight" SET DEFAULT 3.2,
ALTER COLUMN "packageWidth" SET NOT NULL,
ALTER COLUMN "packageWidth" SET DEFAULT 8;
