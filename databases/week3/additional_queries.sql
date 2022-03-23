-- Get meals that has a price smaller than a specific price fx 90
SELECT title,
       price
FROM   meal
WHERE  price < 30; 

-- Get meals that still has available reservations
SELECT meal.title,
       meal.max_reservations,
       Count(reservation.meal_id) AS meal_reservation_available
FROM   meal
       JOIN reservation
         ON meal.id = reservation.meal_id
GROUP  BY meal.title,
          meal.max_reservations
HAVING meal_reservation_available < meal.max_reservations; 

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT *
FROM   meal
WHERE  meal.title LIKE '%salad%';

-- Get meals that has been created between two dates
SELECT title,
       created_date,
       price
FROM   meal
WHERE  created_date BETWEEN '2022-03-21' AND '2022-03-26'; 

-- Get only specific number of meals fx return only 5 meals
SELECT *
FROM   meal
LIMIT  3; 

-- Get the meals that have good reviews
SELECT meal.title,
       review.title,
       review.stars
FROM   meal
       JOIN review
         ON meal.id = review.meal_id
WHERE review.stars > 3;

-- Get reservations for a specific meal sorted by created_date
SELECT meal.title,
       reservation.created_date
FROM   meal
       JOIN reservation
         ON meal.id = reservation.meal_id
WHERE  reservation.meal_id = 2
ORDER  BY reservation.created_date DESC; 

-- Sort all meals by average number of stars in the reviews
SELECT meal.title,
       AVG(review.stars) AS review_average
FROM   meal
       JOIN review
         ON meal.id = review.meal_id
GROUP  BY meal.title
ORDER  BY review_average DESC; 
