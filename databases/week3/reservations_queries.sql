-- Get all reservations
SELECT *
FROM   reservation;

-- Add a new reservation
INSERT INTO reservation(number_of_guests, created_date, contact_phonenumber, contact_name, contact_email, meal_id) 
VALUES      (1, '2022-03-21 22:30:00', '10380781', 'Pole', 'pol@test.dk', 2);

-- Get a reservation with any id, fx 1
SELECT *
FROM   reservation
WHERE  id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET    contact_phonenumber = '10380781', contact_email = 'line99@test.dk'
WHERE  id = 1; 

-- Delete a reservation with any id, fx 1
DELETE FROM reservation
WHERE  id = 3; 

