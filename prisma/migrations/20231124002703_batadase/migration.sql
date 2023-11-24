-- CreateTable
CREATE TABLE `Employee` (
    `patientNumber` INTEGER NOT NULL AUTO_INCREMENT,
    `patientName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `patientPassword` VARCHAR(191) NOT NULL,
    `birthday` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `license` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`patientNumber`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
