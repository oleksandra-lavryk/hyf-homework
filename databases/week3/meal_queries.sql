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