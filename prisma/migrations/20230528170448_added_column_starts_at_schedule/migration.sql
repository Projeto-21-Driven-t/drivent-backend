/*
  Warnings:

  - Added the required column `startsAt` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Schedule" ADD COLUMN     "startsAt" VARCHAR(30) NOT NULL;
