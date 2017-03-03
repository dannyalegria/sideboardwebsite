SELECT * FROM sideboardproducts
JOIN products_in_order
ON sideboardproducts.id = products_in_order.product_id
WHERE products_in_order.order_id = $1
