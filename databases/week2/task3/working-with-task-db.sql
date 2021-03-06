-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT
  task.title, user.name, user.email 
FROM
  task
JOIN
  user_task
ON
  task.id = user_task.task_id
JOIN
  user
ON
  user_task.user_id  = user.id
WHERE
  user.email LIKE "%@spotify.com";

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT
 user.name, task.title, status.name
FROM
  task
JOIN 
  user_task
ON
  task.id = user_task.task_id
JOIN
  user
ON
  user_task.user_id  = user.id
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
 user.name, task.title, task.created
FROM
  task
JOIN
  user_task
ON
  task.id = user_task.task_id
JOIN
  user
ON
  user_task.user_id  = user.id
WHERE
  user.name LIKE "Maryrose Meadows"
AND
  month(task.created) = 9;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october,
--  how many tasks were created in november, etc. (hint: use group by)
SELECT
  month(task.created) as creating_month, COUNT(task.id) as task_amount
FROM
  task
GROUP BY  creating_month;  