/*
  Warnings:

  - You are about to drop the `appointment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `client_doctor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `debt` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `doctor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `inventory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `local` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_data` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `appointment` DROP FOREIGN KEY `client`;

-- DropForeignKey
ALTER TABLE `appointment` DROP FOREIGN KEY `doctor`;

-- DropForeignKey
ALTER TABLE `appointment` DROP FOREIGN KEY `local`;

-- DropForeignKey
ALTER TABLE `client` DROP FOREIGN KEY `fk_id_user`;

-- DropForeignKey
ALTER TABLE `client_doctor` DROP FOREIGN KEY `idclient`;

-- DropForeignKey
ALTER TABLE `client_doctor` DROP FOREIGN KEY `iddoctor`;

-- DropForeignKey
ALTER TABLE `debt` DROP FOREIGN KEY `ID_DOCTOR_FK`;

-- DropForeignKey
ALTER TABLE `debt` DROP FOREIGN KEY `id_CLIENT_FK`;

-- DropForeignKey
ALTER TABLE `doctor` DROP FOREIGN KEY `fk_user`;

-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `id_employee_FK`;

-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `id_user_FK`;

-- DropForeignKey
ALTER TABLE `inventory` DROP FOREIGN KEY `id_inventory_FK`;

-- DropForeignKey
ALTER TABLE `payment` DROP FOREIGN KEY `id_payment`;

-- DropTable
DROP TABLE `appointment`;

-- DropTable
DROP TABLE `client`;

-- DropTable
DROP TABLE `client_doctor`;

-- DropTable
DROP TABLE `debt`;

-- DropTable
DROP TABLE `doctor`;

-- DropTable
DROP TABLE `employee`;

-- DropTable
DROP TABLE `inventory`;

-- DropTable
DROP TABLE `local`;

-- DropTable
DROP TABLE `payment`;

-- DropTable
DROP TABLE `user_data`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `birthday` DATETIME(3) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `sex` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,
    `curp` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_curp_key`(`curp`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Doctor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `study_degree` VARCHAR(191) NOT NULL,
    `license` VARCHAR(191) NOT NULL,
    `schedule_start` DATETIME(3) NULL,
    `schedule_end` DATETIME(3) NULL,
    `user_fk` INTEGER NOT NULL,

    UNIQUE INDEX `Doctor_user_fk_key`(`user_fk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `study_degree` VARCHAR(191) NOT NULL,
    `schedule_start` DATETIME(3) NULL,
    `schedule_end` DATETIME(3) NULL,
    `role` VARCHAR(191) NOT NULL,
    `user_fk` INTEGER NOT NULL,

    UNIQUE INDEX `Employee_user_fk_key`(`user_fk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmployeeService` (
    `employee_fk` INTEGER NOT NULL,
    `service_fk` INTEGER NOT NULL,

    PRIMARY KEY (`employee_fk`, `service_fk`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DoctorService` (
    `doctor_fk` INTEGER NOT NULL,
    `service_fk` INTEGER NOT NULL,

    PRIMARY KEY (`doctor_fk`, `service_fk`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Service_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Client` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `allergies` VARCHAR(191) NULL,
    `emergency_number` VARCHAR(191) NULL,
    `health_problems` VARCHAR(191) NULL,
    `user_fk` INTEGER NOT NULL,

    UNIQUE INDEX `Client_user_fk_key`(`user_fk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `ammount` DOUBLE NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `client_fk` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Document` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `file` VARCHAR(191) NOT NULL,
    `user_fk` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Photo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `user_fk` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Debt` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `ammount` DOUBLE NOT NULL,
    `paid` BOOLEAN NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `client_fk` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clinic` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `opening_times` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `building_number` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DoctorClinic` (
    `doctor_fk` INTEGER NOT NULL,
    `clinic_fk` INTEGER NOT NULL,

    PRIMARY KEY (`doctor_fk`, `clinic_fk`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmployeeClinic` (
    `employee_fk` INTEGER NOT NULL,
    `clinic_fk` INTEGER NOT NULL,

    PRIMARY KEY (`employee_fk`, `clinic_fk`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Administrator` (
    `user_fk` INTEGER NOT NULL,
    `clinic_fk` INTEGER NOT NULL,

    PRIMARY KEY (`user_fk`, `clinic_fk`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Appointment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `client_fk` INTEGER NOT NULL,
    `in_charge_fk` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `hour` DATETIME(3) NOT NULL,
    `subject` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'CONFIRMATION PENDING',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clinic_fk` INTEGER NOT NULL,
    `appointment_fk` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Doctor` ADD CONSTRAINT `Doctor_user_fk_fkey` FOREIGN KEY (`user_fk`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_user_fk_fkey` FOREIGN KEY (`user_fk`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmployeeService` ADD CONSTRAINT `EmployeeService_employee_fk_fkey` FOREIGN KEY (`employee_fk`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmployeeService` ADD CONSTRAINT `EmployeeService_service_fk_fkey` FOREIGN KEY (`service_fk`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorService` ADD CONSTRAINT `DoctorService_doctor_fk_fkey` FOREIGN KEY (`doctor_fk`) REFERENCES `Doctor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorService` ADD CONSTRAINT `DoctorService_service_fk_fkey` FOREIGN KEY (`service_fk`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_user_fk_fkey` FOREIGN KEY (`user_fk`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_client_fk_fkey` FOREIGN KEY (`client_fk`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_user_fk_fkey` FOREIGN KEY (`user_fk`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Photo` ADD CONSTRAINT `Photo_user_fk_fkey` FOREIGN KEY (`user_fk`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Debt` ADD CONSTRAINT `Debt_client_fk_fkey` FOREIGN KEY (`client_fk`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorClinic` ADD CONSTRAINT `DoctorClinic_doctor_fk_fkey` FOREIGN KEY (`doctor_fk`) REFERENCES `Doctor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorClinic` ADD CONSTRAINT `DoctorClinic_clinic_fk_fkey` FOREIGN KEY (`clinic_fk`) REFERENCES `Clinic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmployeeClinic` ADD CONSTRAINT `EmployeeClinic_employee_fk_fkey` FOREIGN KEY (`employee_fk`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmployeeClinic` ADD CONSTRAINT `EmployeeClinic_clinic_fk_fkey` FOREIGN KEY (`clinic_fk`) REFERENCES `Clinic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Administrator` ADD CONSTRAINT `Administrator_user_fk_fkey` FOREIGN KEY (`user_fk`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Administrator` ADD CONSTRAINT `Administrator_clinic_fk_fkey` FOREIGN KEY (`clinic_fk`) REFERENCES `Clinic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Appointment` ADD CONSTRAINT `Appointment_client_fk_fkey` FOREIGN KEY (`client_fk`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Appointment` ADD CONSTRAINT `Appointment_in_charge_fk_fkey` FOREIGN KEY (`in_charge_fk`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_clinic_fk_fkey` FOREIGN KEY (`clinic_fk`) REFERENCES `Clinic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_appointment_fk_fkey` FOREIGN KEY (`appointment_fk`) REFERENCES `Appointment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
