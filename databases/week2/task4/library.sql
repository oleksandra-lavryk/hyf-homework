CREATE DATABASE 
  library_db
DEFAULT CHARACTER SET = "utf8mb4";

USE library_db;

CREATE TABLE `book` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `title` varchar(255) NOT NULL,
  `description` text NULL, 
  `ISBN` int(10) NOT NULL,
  `year` int(4) NOT NULL
);

  
CREATE TABLE `genre` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `name` varchar(255) NOT NULL
);

CREATE TABLE `book_genre` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `book_id` int(10) unsigned NOT NULL, 
  `genre_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_book-genre-book` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_book-genre-genre` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `author` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `name` varchar(255) NOT NULL
);

CREATE TABLE `book_author` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `book_id` int(10) unsigned NOT NULL, 
  `author_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_book-author-book` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_book-author-author` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NULL,
  `phone` varchar(255) NULL
);

CREATE TABLE `loan_book` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `loan_date` date NOT NULL,
  `due_date` date NOT NULL,
  `book_id` int(10) unsigned NOT NULL, 
  `student_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_book-student-book` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_book-student-student` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);