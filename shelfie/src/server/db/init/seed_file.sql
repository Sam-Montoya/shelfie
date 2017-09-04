DROP TABLE IF EXISTS shelf;
DROP TABLE IF EXISTS bin;

CREATE TABLE shelf (shelf_id serial primary key, shelf_name varchar(30));

CREATE TABLE bin (bin_id serial primary key, bin_name varchar(30),
item_name VARCHAR(30), price numeric(10,2), fk_shelf_id integer );

INSERT INTO shelf (shelf_name) 
VALUES 
('Shelf A'),
('Shelf B'),
('Shelf C'),
('Shelf D');

INSERT INTO bin (bin_name, fk_shelf_id)
VALUES
('Bin 1', 1),
('Bin 2', 1),
('Bin 3', 1),
('Bin 4', 1),
('Bin 5', 1),
('Bin 1', 2),
('Bin 2', 2),
('Bin 3', 2),
('Bin 4', 2),
('Bin 5', 2),
('Bin 1', 3),
('Bin 2', 3),
('Bin 3', 3),
('Bin 4', 3),
('Bin 5', 3),
('Bin 1', 4),
('Bin 2', 4),
('Bin 3', 4),
('Bin 4', 4),
('Bin 5', 4);
