USE MVP_Jokes;
-- DROP TABLE IF EXISTS products;
-- DROP TABLE IF EXISTS variants;


-- CREATE TABLE products (itemId INT AUTO_INCREMENT, brand VARCHAR(30), title VARCHAR(20), averageRating DECIMAL, reviewCount INT, freeShipping VARCHAR(30), shippingRestriction VARCHAR(30), PRIMARY KEY (itemId));
-- CREATE TABLE variants (variant_Id INT AUTO_INCREMENT, itemId INT, price VARCHAR(30), color VARCHAR(30), size VARCHAR(30), PRIMARY KEY(variant_Id));

LOAD DATA LOCAL INFILE '/Users/dawnsaquin/code/hack-reactor/MVP/mysql/jokes4.csv' INTO TABLE Jokes FIELDS TERMINATED BY '|' IGNORE 1 LINES;