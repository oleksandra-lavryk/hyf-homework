-- Get all reviews
SELECT *
FROM   review;

-- Add a new review
INSERT INTO  review(title, description, created_date, stars, meal_id) 
VALUES      ('Very good', 'I like it.', '2022-03-25 11:54:00', 4, 1);

-- Get a review with any id, fx 1
SELECT *
FROM   review
WHERE  id = 3;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET    created_date = '2022-03-24 18:34:10'
WHERE  id = 3; 

-- Delete a review with any id, fx 1
DELETE FROM review
WHERE  id = 3; 

