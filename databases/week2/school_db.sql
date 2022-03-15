-- creating database
CREATE DATABASE 
  school_db
DEFAULT CHARACTER SET = "utf8mb4";

-- switch to new database
USE school_db;

-- creating class table
CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `name` varchar(255) NOT NULL,
  `begins` date NULL, 
  `ends` date NULL
  );
  -- creating student table
CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `name` varchar(255) NOT NULL,
   `email` varchar(255) NULL,
   `phone` varchar(255) NULL,
  `class_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
  );

-- Create an index on the name column of the student table.
CREATE INDEX 
  idx_studname
ON 
  student (name);

-- Add a new column to the class table named status which can only have the following values: 
-- not-started, ongoing, finished (hint: enumerations)
ALTER TABLE class
ADD status ENUM("not started", "ongoing", "finished");
