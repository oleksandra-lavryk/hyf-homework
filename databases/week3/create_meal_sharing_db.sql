CREATE DATABASE meal_sharing
DEFAULT CHARACTER SET = "utf8mb4";

USE meal_sharing;

CREATE TABLE `meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `title` varchar(255) NOT NULL,
  `description` text NULL, 
  `location` varchar(255) NULL,
  `when_time` datetime NOT NULL,
  `max_reservations` int(10) unsigned  NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `created_date` date NOT NULL
);

CREATE TABLE `review` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL, 
  `created_date` date NOT NULL,
  `stars` int(10) unsigned NOT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `reservation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `number_of_guests` int(10) unsigned NOT NULL,
  `created_date` date NOT NULL,
  `contact_phonenumber` varchar(255) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_meal_reservation` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Insert data into meal table
INSERT INTO meal(title,when_time,max_reservations,price,created_date) 
VALUES      ('Pepperoni','2022-03-23 12:00:00',2,14.95,'2022-03-22');

INSERT INTO meal(title,description,location,when_time,max_reservations,price,created_date) 
VALUES      ('Ratatouille','Ratatouille is a really delicious and quite simple vegetable dish.','Nyvej 1','2022-03-24 10:44:00',3,16.95,'2022-03-22');

INSERT INTO  meal(title,description,location,when_time,max_reservations,price,created_date) 
VALUES       ('Tuna salad','In a medium bowl, combine tuna, celery, apple, mayonnaise, basil, and lemon juice','Nyvej 1','2022-03-28 00:00:00',4,24.00,'2022-03-26');

INSERT INTO meal(title,description,location,when_time,max_reservations,price,created_date) 
VALUES      ('Dragon Roll',NULL,'Nyvej 1','2022-03-30 10:30:00',2,30.00,'2022-03-29');

-- Insert data into review  table
INSERT INTO review(title, description, created_date, stars, meal_id) 
VALUES      ('Good food', 'Delicious', '2022-03-26 14:30:00', 4, 2);

INSERT INTO review(title, description, created_date, stars, meal_id) 
VALUES      ('Not bad', 'I thought it would taste better', '2022-03-24 21:30:00', 3, 3);

INSERT INTO review(title, description, created_date, stars, meal_id) 
VALUES      ('The best', 'Awsome', '2022-03-23 21:50:00', 5, 1);

-- Insert data into reservation table
INSERT INTO reservation(number_of_guests, created_date, contact_phonenumber, contact_name, contact_email, meal_id) 
VALUES      (3, '2022-03-23 19:30:00', '50280081', 'Line', 'line@test.dk', 1);

INSERT INTO reservation(number_of_guests, created_date, contact_phonenumber, contact_name, contact_email, meal_id) 
VALUES      (3, '2022-03-22 16:12:00', '50480090', 'Torben', 'torben@test.dk', 2);

INSERT INTO reservation(number_of_guests, created_date, contact_phonenumber, contact_name, contact_email, meal_id) 
VALUES      (5, '2022-03-21 12:30:00', '10280081', 'Ben', 'ben@test.dk', 3);
