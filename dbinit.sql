CREATE TABLE `blackswan`.`users` (
  `username` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT NOW(),
  `updated_at` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`username`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC));

CREATE TABLE `blackswan`.`tasks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(155) NOT NULL,
  `description` VARCHAR(500) NULL,
  `status` VARCHAR(50) NOT NULL,
  `date_time` DATETIME NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`username`) REFERENCES users(`username`));

INSERT INTO `users` (`username`, `first_name`, `last_name`) VALUES
  ('admin', 'Ahad', 'Minh'),
  ('jmb007', 'James', 'Barnes');

INSERT INTO `tasks` (`name`, `description`, `status`, `date_time`, `username`) VALUES
  ('Test Task', 'Description', 'pending', '2018-05-25 14:25:00', 'admin'),
  ('Do Bonus', 'Do not forget', 'pending', '2017-09-11 12:00:00', 'admin');
