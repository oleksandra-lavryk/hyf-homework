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
  `description` text NULL, 
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
INSERT INTO meal(id,title,when_time,max_reservations,price,created_date) 
VALUES      ('Pepperoni','2022-03-23 12:00:00',2,14.95,'2022-03-22');

INSERT INTO meal(title,description,location,when_time,max_reservations,price,created_date) 
VALUES      ('Ratatouille','Ratatouille is a really delicious and quite simple vegetable dish.','Nyvej 1','2022-03-24 10:44:00',3,16.95,'2022-03-22');

INSERT INTO  meal(title,description,location,when_time,max_reservations,price,created_date) 
VALUES       ('Tuna salad','In a medium bowl, combine tuna, celery, apple, mayonnaise, basil, and lemon juice','Nyvej 1','2022-03-28 00:00:00',4,24.00,'2022-03-26');

INSERT INTO meal(title,description,location,when_time,max_reservations,price,created_date) 
VALUES      ('Dragon Roll',NULL,'Nyvej 1','2022-03-30 10:30:00',2,30.00,'2022-03-29');

-- Get all meals
SELECT *
FROM   meal;

-- Add a new meal
INSERT INTO  meal(title, description, location, when_time, max_reservations, price, created_date) 
VALUES      ('Cheesecake', NULL, 'Storegade 11', '2022-03-30 10:30:00', 2, 30.00, '2022-03-29');

 -- Get a meal with any id, fx 1
SELECT *
FROM   meal
WHERE  id = 2; 

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET    title = "cheesecake new york"
WHERE  id = 4; 

-- Delete a meal with any id, fx 1
DELETE FROM meal
WHERE  id = 4; 