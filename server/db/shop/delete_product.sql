/* Delete product from the table by id */
DELETE FROM sideboardproducts
WHERE id = $1
RETURNING *;
