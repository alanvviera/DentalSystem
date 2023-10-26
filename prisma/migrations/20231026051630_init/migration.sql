-- CreateTable
CREATE TABLE `agreement_company` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_empresa` INTEGER NOT NULL,
    `agreement_company_fk` INTEGER NOT NULL,
    `rfc` VARCHAR(14) NULL,

    UNIQUE INDEX `id_empresa_UNIQUE`(`id_empresa`),
    UNIQUE INDEX `agreement_company_fk_UNIQUE`(`agreement_company_fk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `appointment_register` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_appointment_register` INTEGER NOT NULL,
    `id_company_account_FK` INTEGER NOT NULL,
    `employee_name` VARCHAR(75) NOT NULL,
    `appointment_time` TIME(0) NULL,
    `assistance` VARCHAR(45) NULL,

    UNIQUE INDEX `id_appointment_register_UNIQUE`(`id_appointment_register`),
    INDEX `id_appointment_register_FK_idx`(`id_company_account_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company_account` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_company_account` INTEGER NOT NULL,
    `employee_name` VARCHAR(75) NOT NULL,
    `rfc` VARCHAR(14) NULL,

    UNIQUE INDEX `id_company_account_UNIQUE`(`id_company_account`),
    UNIQUE INDEX `rfc_UNIQUE`(`rfc`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
CREATE TABLE `contact_company` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_contact_company` INTEGER NOT NULL,
    `id_Agreement_Company_fk` INTEGER NOT NULL,
    `name_in_charge` VARCHAR(45) NULL,
    `position_in_charge` VARCHAR(45) NULL,
    `contact_phone` VARCHAR(45) NULL,
    `contact_mail` VARCHAR(45) NULL,

    UNIQUE INDEX `id_contact_company_UNIQUE`(`id_contact_company`),
    UNIQUE INDEX `id_Agreement_Company_fk_UNIQUE`(`id_Agreement_Company_fk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dates` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_dates` INTEGER NOT NULL,
    `id_doctor_FK` INTEGER NOT NULL,
    `id_patient_FK` INTEGER NOT NULL,
    `type` VARCHAR(45) NULL,
    `date_of_date` DATE NULL,
    `appointment_time` TIME(0) NULL,
    `subject` MEDIUMTEXT NULL,
    `appointment_duration` LONGTEXT NULL,
    `patient_name` VARCHAR(45) NULL,
    `dentist_name` VARCHAR(45) NULL,

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
    `specialty` VARCHAR(75) NULL,
    `study` VARCHAR(45) NULL,
    `email` MEDIUMTEXT NOT NULL,
    `phone_number` VARCHAR(20) NULL,
    `license` INTEGER NULL,
    `faculty` VARCHAR(45) NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `id_doctor_UNIQUE`(`id_doctor`),
    INDEX `fk_user_idx`(`id_user_FK`),
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
    `fecha_vencimiento` DATETIME(0) NULL,
    `cost` FLOAT NOT NULL,
    `price` FLOAT NOT NULL,
    `stock_quantity` INTEGER NULL,
    `minimum_stock` INTEGER NULL,
    `maximum_stock` INTEGER NULL,
    `observaciones` LONGTEXT NULL,

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
    `date` DATETIME(0) NULL,
    `status` VARCHAR(45) NULL,
    `device` MEDIUMTEXT NULL,
    `google_email` VARCHAR(45) NULL,
    `facebook_email` VARCHAR(45) NULL,

    UNIQUE INDEX `id_UNIQUE`(`user_id`),
    UNIQUE INDEX `Google Correo_UNIQUE`(`google_email`),
    UNIQUE INDEX `facebook_email_UNIQUE`(`facebook_email`),
    INDEX `user_FK_idx`(`id_user_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `package_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_package_type` INTEGER NOT NULL,
    `id_package_type_fk` INTEGER NOT NULL,
    `package_name` VARCHAR(45) NULL,
    `package_price` FLOAT NULL,
    `package_discount` INTEGER NULL,
    `package_typecol` VARCHAR(45) NULL,

    UNIQUE INDEX `id_package_type_UNIQUE`(`id_package_type`),
    UNIQUE INDEX `id_package_type_fk_UNIQUE`(`id_package_type_fk`),
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
CREATE TABLE `patient_payments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_patient_payments` INTEGER NOT NULL,
    `id_patient_FK` INTEGER NOT NULL,
    `date_paid` DATETIME(0) NULL,
    `note` LONGTEXT NULL,
    `amount` INTEGER NULL,

    UNIQUE INDEX `id_patient_payments_UNIQUE`(`id_patient_payments`),
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
    `patient_servicescol` VARCHAR(45) NULL,

    UNIQUE INDEX `id_patient_services_UNIQUE`(`id_patient_services`),
    INDEX `id_services_FK_idx`(`id_patient_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `signup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_signup` INTEGER NOT NULL,
    `id_login_FK` INTEGER NOT NULL,
    `name` VARCHAR(45) NULL,
    `email` MEDIUMTEXT NULL,
    `password` VARCHAR(45) NULL,

    UNIQUE INDEX `id_signup_UNIQUE`(`id_signup`),
    INDEX `id_login_FK_idx`(`id_login_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `specialties` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_specialties` INTEGER NOT NULL,
    `id_doctor_FK` INTEGER NOT NULL,
    `license` INTEGER NULL,
    `faculty` VARCHAR(50) NULL,
    `school` VARCHAR(50) NULL,
    `year` YEAR NULL,

    UNIQUE INDEX `id_specialties_UNIQUE`(`id_specialties`),
    INDEX `id_specialties_FK_idx`(`id_doctor_FK`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `type_insurance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_insurance` INTEGER NOT NULL,
    `id_company_account_fk` INTEGER NOT NULL,
    `name_insurance` VARCHAR(45) NULL,
    `precio_seguro` FLOAT NULL,

    UNIQUE INDEX `id_insurance_UNIQUE`(`id_insurance`),
    INDEX `id_type_insurance_fk_idx`(`id_company_account_fk`),
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
    `phone_number` VARCHAR(20) NULL,
    `home_address` MEDIUMTEXT NULL,
    `birthday` DATE NULL,
    `gender` VARCHAR(45) NULL,
    `type_user` VARCHAR(45) NULL,

    UNIQUE INDEX `id_user_UNIQUE`(`id_user`),
    UNIQUE INDEX `email_UNIQUE`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `agreement_company` ADD CONSTRAINT `company_account_fk` FOREIGN KEY (`agreement_company_fk`) REFERENCES `company_account`(`id_company_account`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `appointment_register` ADD CONSTRAINT `id_appointment_register_FK` FOREIGN KEY (`id_company_account_FK`) REFERENCES `company_account`(`id_company_account`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `contact_company` ADD CONSTRAINT `id_contact_company_fk` FOREIGN KEY (`id_Agreement_Company_fk`) REFERENCES `agreement_company`(`id_empresa`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `dates` ADD CONSTRAINT `id_doctor_FK` FOREIGN KEY (`id_doctor_FK`) REFERENCES `doctor`(`id_doctor`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `dates` ADD CONSTRAINT `id_patient_FK` FOREIGN KEY (`id_patient_FK`) REFERENCES `patient`(`id_patient`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `doctor` ADD CONSTRAINT `fk_user` FOREIGN KEY (`id_user_FK`) REFERENCES `user_data`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

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
ALTER TABLE `package_type` ADD CONSTRAINT `fk_package_type` FOREIGN KEY (`id_package_type_fk`) REFERENCES `patient`(`id_patient`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `package_type` ADD CONSTRAINT `package_type_fk` FOREIGN KEY (`id_package_type_fk`) REFERENCES `company_account`(`id_company_account`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `patient` ADD CONSTRAINT `fk_id_user` FOREIGN KEY (`id_user_FK`) REFERENCES `user_data`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `patient_payments` ADD CONSTRAINT `id_payments_FK` FOREIGN KEY (`id_patient_FK`) REFERENCES `patient`(`id_patient`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `patient_services` ADD CONSTRAINT `id_services_FK` FOREIGN KEY (`id_patient_FK`) REFERENCES `patient`(`id_patient`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `signup` ADD CONSTRAINT `id_login_FK` FOREIGN KEY (`id_login_FK`) REFERENCES `login`(`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `specialties` ADD CONSTRAINT `id_specialties_FK` FOREIGN KEY (`id_doctor_FK`) REFERENCES `doctor`(`id_doctor`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `type_insurance` ADD CONSTRAINT `id_type_insurance_fk` FOREIGN KEY (`id_company_account_fk`) REFERENCES `company_account`(`id_company_account`) ON DELETE RESTRICT ON UPDATE RESTRICT;
