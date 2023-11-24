-- CreateTable
CREATE TABLE `company_dentist` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_company_dentist` INTEGER NOT NULL,
    `owner_name` VARCHAR(45) NULL,
    `rfc` VARCHAR(14) NULL,
    `regimen` MEDIUMTEXT NULL,

    UNIQUE INDEX `id_company_dentist_UNIQUE`(`id_company_dentist`),
    UNIQUE INDEX `rfc_UNIQUE`(`rfc`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dates` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_dates` INTEGER NOT NULL,
    `id_doctor_FK` INTEGER NOT NULL,
    `id_patient_FK` INTEGER NOT NULL,
    `patient_name` VARCHAR(45) NULL,
    `clinic_name` VARCHAR(45) NULL,
    `type` VARCHAR(45) NULL,
    `doctor_name` VARCHAR(45) NULL,
    `date_of_date` DATE NULL,
    `appointment_time` TIME(0) NULL,
    `subject` MEDIUMTEXT NULL,

    UNIQUE INDEX `id_dates_UNIQUE`(`id_dates`),
    INDEX `id_doctor_FK_idx`(`id_doctor_FK`),
    INDEX `id_patient_FK_idx`(`id_patient_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `doctor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_doctor` INTEGER NOT NULL,
    `id_user_FK` INTEGER NOT NULL,
    `license` VARCHAR(75) NULL,
    `specialty` VARCHAR(75) NULL,
    `faculty` VARCHAR(50) NULL,
    `school` VARCHAR(50) NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `id_doctor_UNIQUE`(`id_doctor`),
    UNIQUE INDEX `id_user_FK_UNIQUE`(`id_user_FK`),
    INDEX `user_data_fk_idx`(`id_user_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employees` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_employees` INTEGER NOT NULL,
    `id_user_FK` INTEGER NOT NULL,
    `id_local_FK` INTEGER NOT NULL,
    `employee_number` INTEGER NULL,
    `charge` VARCHAR(45) NULL,
    `employee_type` VARCHAR(45) NULL,
    `curp` VARCHAR(19) NULL,
    `study_level` MEDIUMTEXT NULL,
    `document` MEDIUMBLOB NULL,

    UNIQUE INDEX `id_employees_UNIQUE`(`id_employees`),
    UNIQUE INDEX `id_local_FK_UNIQUE`(`id_local_FK`),
    INDEX `id_user_FK_idx`(`id_user_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_inventory` INTEGER NOT NULL,
    `id_local_FK` INTEGER NOT NULL,
    `product_name` VARCHAR(45) NOT NULL,
    `qr` MEDIUMBLOB NULL,
    `category` MEDIUMTEXT NOT NULL,
    `provider` MEDIUMTEXT NULL,
    `acquisition_date` DATETIME(0) NULL,
    `expiration_date` DATETIME(0) NULL,
    `cost` FLOAT NOT NULL,
    `price` FLOAT NOT NULL,
    `stock_quantity` INTEGER NULL,
    `minimum_stock` INTEGER NULL,
    `maximum_stock` INTEGER NULL,
    `observations` LONGTEXT NULL,

    UNIQUE INDEX `id_inventory_UNIQUE`(`id_inventory`),
    INDEX `id_inventory_FK_idx`(`id_local_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventory_movements` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_inventory_movements` INTEGER NOT NULL,
    `id_inventory_FK` INTEGER NOT NULL,
    `sold` VARCHAR(10) NULL,
    `returned` VARCHAR(10) NULL,
    `comment` LONGTEXT NULL,
    `date` DATETIME(0) NULL,

    UNIQUE INDEX `id_inventory_movements_UNIQUE`(`id_inventory_movements`),
    INDEX `id_inventory_movements_FK_idx`(`id_inventory_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `local` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_local` INTEGER NOT NULL,
    `id_company_dentist_FK` INTEGER NOT NULL,
    `name` VARCHAR(75) NOT NULL,
    `address` LONGTEXT NULL,
    `map` MEDIUMTEXT NULL,
    `building_number` INTEGER NULL,
    `phone_number` VARCHAR(20) NULL,
    `photos` MEDIUMBLOB NULL,
    `status` VARCHAR(45) NULL,

    UNIQUE INDEX `id_local_UNIQUE`(`id_local`),
    INDEX `id_local_FK_idx`(`id_company_dentist_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `login` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `id_user_FK` INTEGER NOT NULL,
    `google_email` VARCHAR(45) NULL,
    `facebook_email` VARCHAR(45) NULL,

    UNIQUE INDEX `id_UNIQUE`(`user_id`),
    UNIQUE INDEX `Google Correo_UNIQUE`(`google_email`),
    UNIQUE INDEX `facebook_email_UNIQUE`(`facebook_email`),
    INDEX `user_FK_idx`(`id_user_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `new_password` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_new_password` INTEGER NOT NULL,
    `id_password_forgotten_FK` INTEGER NOT NULL,
    `newpassword` VARCHAR(45) NULL,
    `confirmpassword` VARCHAR(45) NULL,

    UNIQUE INDEX `id_new_password_UNIQUE`(`id_new_password`),
    INDEX `id_new_password_fk_idx`(`id_password_forgotten_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `password_forgotten` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_password_forgotten` INTEGER NOT NULL,
    `id_login_Fk` INTEGER NOT NULL,
    `email` VARCHAR(45) NULL,

    UNIQUE INDEX `id_password_forgotten_UNIQUE`(`id_password_forgotten`),
    UNIQUE INDEX `id_login_Fk_UNIQUE`(`id_login_Fk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `patient` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_patient` INTEGER NOT NULL,
    `id_user_FK` INTEGER NOT NULL,
    `allergies` VARCHAR(45) NULL,
    `emergency_name` MEDIUMTEXT NULL,
    `cardiac` MEDIUMBLOB NULL,
    `health_insurance_number` VARCHAR(50) NULL,
    `medical_history` LONGBLOB NULL,
    `radiographs` MEDIUMBLOB NULL,
    `photo_history` MEDIUMBLOB NULL,
    `medical_conditions` LONGBLOB NULL,
    `emergency_number` VARCHAR(45) NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `id_patient_UNIQUE`(`id_patient`),
    INDEX `fk_id_user_idx`(`id_user_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `patient_debt` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_patient_debt` INTEGER NOT NULL,
    `id_patient_FK` INTEGER NOT NULL,
    `total_debt` FLOAT NULL,
    `total` INTEGER NULL,
    `date_paid` DATETIME(0) NULL,
    `doctor_name` VARCHAR(45) NULL,
    `debt` INTEGER NULL,

    UNIQUE INDEX `id_patient_payments_UNIQUE`(`id_patient_debt`),
    INDEX `id_payments_FK_idx`(`id_patient_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `patient_services` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_patient_services` INTEGER NOT NULL,
    `id_patient_FK` INTEGER NOT NULL,
    `services` VARCHAR(75) NULL,
    `packages` VARCHAR(45) NULL,
    `insurance` VARCHAR(45) NULL,
    `debt_amount` FLOAT NULL,

    UNIQUE INDEX `id_patient_services_UNIQUE`(`id_patient_services`),
    INDEX `id_services_FK_idx`(`id_patient_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `signup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_signup` INTEGER NOT NULL,
    `id_login_FK` INTEGER NOT NULL,
    `fullname` VARCHAR(45) NULL,
    `email` MEDIUMTEXT NULL,
    `phone_number` VARCHAR(20) NULL,
    `confirmpassword` VARCHAR(45) NULL,

    UNIQUE INDEX `id_signup_UNIQUE`(`id_signup`),
    INDEX `id_login_FK_idx`(`id_login_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` VARCHAR(192) NOT NULL,
    `fullname` VARCHAR(100) NOT NULL,
    `email` VARCHAR(60) NOT NULL,
    `password` MEDIUMTEXT NOT NULL,
    `phone_number` VARCHAR(20) NULL,
    `home_address` MEDIUMTEXT NULL,
    `birthday` DATE NULL,
    `gender` VARCHAR(45) NULL,
    `type_user` VARCHAR(45) NULL,

    UNIQUE INDEX `id_user_UNIQUE`(`id_user`),
    UNIQUE INDEX `email_UNIQUE`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user_type` INTEGER NOT NULL,
    `user_data_FK` VARCHAR(45) NOT NULL,
    `admin` VARCHAR(45) NULL,
    `doctor` VARCHAR(45) NULL,
    `employees` VARCHAR(45) NULL,
    `patient` VARCHAR(45) NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `id_user_type_UNIQUE`(`id_user_type`),
    INDEX `user_type_fk`(`user_data_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `dates` ADD CONSTRAINT `id_doctor_FK` FOREIGN KEY (`id_doctor_FK`) REFERENCES `doctor`(`id_user_FK`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `dates` ADD CONSTRAINT `id_patient_FK` FOREIGN KEY (`id_patient_FK`) REFERENCES `patient`(`id_patient`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `doctor` ADD CONSTRAINT `fk_user` FOREIGN KEY (`id_user_FK`) REFERENCES `user_data`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `employees` ADD CONSTRAINT `id_employees_FK` FOREIGN KEY (`id_local_FK`) REFERENCES `local`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `employees` ADD CONSTRAINT `id_user_FK` FOREIGN KEY (`id_user_FK`) REFERENCES `user_data`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `inventory` ADD CONSTRAINT `id_inventory_FK` FOREIGN KEY (`id_local_FK`) REFERENCES `local`(`id_local`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `inventory_movements` ADD CONSTRAINT `id_inventory_movements_FK` FOREIGN KEY (`id_inventory_FK`) REFERENCES `inventory`(`id_inventory`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `local` ADD CONSTRAINT `id_local_FK` FOREIGN KEY (`id_company_dentist_FK`) REFERENCES `company_dentist`(`id_company_dentist`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `login` ADD CONSTRAINT `user_FK` FOREIGN KEY (`id_user_FK`) REFERENCES `user_data`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `new_password` ADD CONSTRAINT `id_new_password_fk` FOREIGN KEY (`id_password_forgotten_FK`) REFERENCES `password_forgotten`(`id_password_forgotten`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `password_forgotten` ADD CONSTRAINT `id_password_forgotten_fk` FOREIGN KEY (`id_login_Fk`) REFERENCES `login`(`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `patient` ADD CONSTRAINT `fk_id_user` FOREIGN KEY (`id_user_FK`) REFERENCES `user_data`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `patient_debt` ADD CONSTRAINT `id_payments_FK` FOREIGN KEY (`id_patient_FK`) REFERENCES `patient`(`id_patient`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `patient_services` ADD CONSTRAINT `id_services_FK` FOREIGN KEY (`id_patient_FK`) REFERENCES `patient`(`id_patient`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `signup` ADD CONSTRAINT `id_login_FK` FOREIGN KEY (`id_login_FK`) REFERENCES `login`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_type` ADD CONSTRAINT `user_type_fk` FOREIGN KEY (`user_data_FK`) REFERENCES `user_data`(`id_user`) ON DELETE RESTRICT ON UPDATE RESTRICT;
