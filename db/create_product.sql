/*Insert a new product into the products table*/
INSERT INTO sideboardproducts
(name, description, price, imageurl)
VALUES
($1, $2, $3, $4)
RETURNING * ;
