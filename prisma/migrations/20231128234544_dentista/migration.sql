-- CreateTable
CREATE TABLE `doctor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_doctor` VARCHAR(191) NOT NULL,
    `id_user_FK` VARCHAR(191) NOT NULL,
    `license` VARCHAR(75) NULL,
    `specialty` VARCHAR(75) NULL,
    `school` VARCHAR(50) NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `id_doctor_UNIQUE`(`id_doctor`),
    UNIQUE INDEX `id_user_FK_UNIQUE`(`id_user_FK`),
    INDEX `user_data_fk_idx`(`id_user_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_employee` VARCHAR(191) NOT NULL,
    `id_user_FK` VARCHAR(191) NOT NULL,
    `id_local_FK` VARCHAR(191) NOT NULL,
    `charge` VARCHAR(45) NULL,
    `study_level` MEDIUMTEXT NULL,
    `document` MEDIUMBLOB NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `id_employee_UNIQUE`(`id_employee`),
    UNIQUE INDEX `id_user_FK_UNIQUE`(`id_user_FK`),
    UNIQUE INDEX `id_local_FK_UNIQUE`(`id_local_FK`),
    INDEX `id_user_FK_idx`(`id_user_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_inventory` VARCHAR(191) NOT NULL,
    `id_local_FK` VARCHAR(191) NOT NULL,
    `product_name` VARCHAR(45) NOT NULL,
    `qr` MEDIUMBLOB NULL,
    `category` MEDIUMTEXT NOT NULL,
    `provider` MEDIUMTEXT NULL,
    `acquisition_date` DATETIME(0) NULL,
    `expiration_date` DATETIME(0) NULL,
    `cost` FLOAT NOT NULL,
    `stock_quantity` INTEGER NULL,
    `minimum_stock` INTEGER NULL,
    `maximum_stock` INTEGER NULL,
    `observation` LONGTEXT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `id_inventory_UNIQUE`(`id_inventory`),
    UNIQUE INDEX `id_local_FK_UNIQUE`(`id_local_FK`),
    INDEX `id_inventory_FK_idx`(`id_local_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `local` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_local` VARCHAR(191) NOT NULL,
    `name` VARCHAR(75) NOT NULL,
    `address` LONGTEXT NULL,
    `map` MEDIUMTEXT NULL,
    `building_number` INTEGER NULL,
    `phone_number` VARCHAR(20) NULL,
    `photos` MEDIUMBLOB NULL,
    `status` VARCHAR(45) NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `id_local_UNIQUE`(`id_local`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` VARCHAR(191) NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `last_name` VARCHAR(45) NOT NULL,
    `email` VARCHAR(60) NOT NULL,
    `password` MEDIUMTEXT NOT NULL,
    `curp` VARCHAR(19) NULL,
    `phone_number` VARCHAR(20) NULL,
    `home_address` MEDIUMTEXT NULL,
    `birthday` DATE NULL,
    `gender` VARCHAR(45) NULL,
    `profile_image` TINYTEXT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `id_user_UNIQUE`(`id_user`),
    UNIQUE INDEX `email_UNIQUE`(`email`),
    UNIQUE INDEX `curp_UNIQUE`(`curp`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `appointment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_appointment` VARCHAR(191) NOT NULL,
    `id_doctor_FK` VARCHAR(191) NOT NULL,
    `id_user_FK` VARCHAR(191) NOT NULL,
    `id_local_FK` VARCHAR(191) NOT NULL,
    `type` VARCHAR(45) NULL,
    `doctor_name` VARCHAR(45) NULL,
    `client_name` VARCHAR(45) NULL,
    `local_name` VARCHAR(45) NULL,
    `date` DATE NULL,
    `hour` TIME(0) NULL,
    `subject` MEDIUMTEXT NULL,
    `status` VARCHAR(45) NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `id_appointment_UNIQUE`(`id_appointment`),
    INDEX `doctor_idx`(`id_doctor_FK`),
    INDEX `local_idx`(`id_local_FK`),
    INDEX `client_idx`(`id_user_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `client` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user_FK` VARCHAR(191) NOT NULL,
    `allergies` VARCHAR(45) NULL,
    `emergency_name` MEDIUMTEXT NULL,
    `emergency_number` VARCHAR(45) NULL,
    `health_problems` MEDIUMBLOB NULL,
    `health_insurance_number` VARCHAR(50) NULL,
    `medical_history` LONGBLOB NULL,
    `radiographs` MEDIUMBLOB NULL,
    `photo_history` MEDIUMBLOB NULL,
    `medical_conditions` LONGBLOB NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `id_user_FK_UNIQUE`(`id_user_FK`),
    INDEX `fk_id_user_idx`(`id_user_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `client_doctor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_client_FK` VARCHAR(191) NOT NULL,
    `id_doctor_FK` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    INDEX `id_doctor_FK_idx`(`id_doctor_FK`),
    INDEX `idclient_idx`(`id_client_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `debt` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_debt` VARCHAR(191) NOT NULL,
    `id_client_FK` VARCHAR(191) NOT NULL,
    `amount_debt` FLOAT NOT NULL,
    `id_doctor_FK` VARCHAR(191) NOT NULL,
    `completed` TINYTEXT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `id_patient_payments_UNIQUE`(`id_debt`),
    INDEX `ID_DOCTOR_FK_idx`(`id_doctor_FK`),
    INDEX `id_CLIENT_FK_idx`(`id_client_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_payment` VARCHAR(191) NOT NULL,
    `id_debt_fk` VARCHAR(191) NOT NULL,
    `amount` FLOAT NOT NULL,
    `date` DATE NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `idpayment_UNIQUE`(`id_payment`),
    INDEX `id_payment_idx`(`id_debt_fk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `doctor` ADD CONSTRAINT `fk_user` FOREIGN KEY (`id_user_FK`) REFERENCES `user_data`(`id_user`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `employee` ADD CONSTRAINT `id_employee_FK` FOREIGN KEY (`id_local_FK`) REFERENCES `local`(`id_local`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `employee` ADD CONSTRAINT `id_user_FK` FOREIGN KEY (`id_user_FK`) REFERENCES `user_data`(`id_user`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `inventory` ADD CONSTRAINT `id_inventory_FK` FOREIGN KEY (`id_local_FK`) REFERENCES `local`(`id_local`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `appointment` ADD CONSTRAINT `client` FOREIGN KEY (`id_user_FK`) REFERENCES `user_data`(`id_user`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `appointment` ADD CONSTRAINT `doctor` FOREIGN KEY (`id_doctor_FK`) REFERENCES `doctor`(`id_doctor`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `appointment` ADD CONSTRAINT `local` FOREIGN KEY (`id_local_FK`) REFERENCES `local`(`id_local`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `client` ADD CONSTRAINT `fk_id_user` FOREIGN KEY (`id_user_FK`) REFERENCES `user_data`(`id_user`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `client_doctor` ADD CONSTRAINT `idclient` FOREIGN KEY (`id_client_FK`) REFERENCES `user_data`(`id_user`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `client_doctor` ADD CONSTRAINT `iddoctor` FOREIGN KEY (`id_doctor_FK`) REFERENCES `doctor`(`id_doctor`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `debt` ADD CONSTRAINT `ID_DOCTOR_FK` FOREIGN KEY (`id_doctor_FK`) REFERENCES `doctor`(`id_doctor`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `debt` ADD CONSTRAINT `id_CLIENT_FK` FOREIGN KEY (`id_client_FK`) REFERENCES `user_data`(`id_user`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `id_payment` FOREIGN KEY (`id_debt_fk`) REFERENCES `debt`(`id_debt`) ON DELETE NO ACTION ON UPDATE NO ACTION;
