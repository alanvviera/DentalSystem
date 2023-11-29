/*
  Warnings:

  - Added the required column `type_user` to the `user_data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user_data` ADD COLUMN `type_user` ENUM('CLIENT', 'EMPLOYEE', 'DOCTOR', 'ADMIN') NOT NULL;
