-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO
  task(title, description, created, updated, due_date, status_id, user_id)
VALUES
  ("Do homework", "must be done before friday night", "2022-03-15 10:01:16", "2022-03-15 10:01:16", "2022-03-18 10:01:16", 1, 6);


-- Change the title of a task
UPDATE
  task
SET
  title = "Do homework database week2"
WHERE
  id = 36;

-- Change a task due date
UPDATE
  task
SET
  due_date = "2022-03-18 23:59:59"
WHERE
  id = 36;

-- Change a task status
UPDATE
  task
SET
  status_id = "2"
WHERE
  id = 36;

-- Mark a task as complete
UPDATE
  task
SET
  status_id = "3"
WHERE
  id = 36;

-- Delete a task

DELETE
FROM
  task
WHERE
  id = 36;

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT
  *
FROM
  task
JOIN
  user
ON
  task.user_id = user.id
WHERE
  user.email LIKE "%@spotify.com";

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT
 *
FROM
  task
JOIN
  user
ON
  task.user_id = user.id
JOIN
  status
ON
  task.status_id = status.id
WHERE
  user.name LIKE "Donald Duck"
AND
  status.name LIKE "Not started";

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT
 *
FROM
  task
JOIN
  user
ON
  task.user_id = user.id
WHERE
  user.name LIKE "Maryrose Meadows"
AND
  month(task.created) = 9;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october,
--  how many tasks were created in november, etc. (hint: use group by)
SELECT
  month(task.created) creating_month, COUNT(task.id) as task_amount
FROM
  task
GROUP BY  creating_month;  