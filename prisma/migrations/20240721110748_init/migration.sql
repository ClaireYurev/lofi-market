-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "originZipcode" TEXT,
ADD COLUMN     "packageHeight" DOUBLE PRECISION,
ADD COLUMN     "packageThickness" DOUBLE PRECISION,
ADD COLUMN     "packageWeight" DOUBLE PRECISION,
ADD COLUMN     "packageWidth" DOUBLE PRECISION;
