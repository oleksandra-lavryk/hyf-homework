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
