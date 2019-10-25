
-- This SQL script builds a monopoly database, deleting any pre-existing version.
--
-- @author kvlinden
-- @edit   Juli Lim
-- @version Fall, 2019
--

-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;
DROP TABLE IF EXISTS Property;

-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY, 
	time timestamp
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY, 
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE Property(
	ID integer PRIMARY KEY,
	name varchar(50) NOT NULL,
	category varchar(50) NOT NULL 
);


CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	score integer
	);

CREATE TABLE PlayerProperty (
	PRIMARY KEY (gameID, playerID, propertyID),
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	propertyID integer REFERENCES Property(ID),
	houses integer,
	hotels integer
);



-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
GRANT SELECT ON Property TO PUBLIC;
GRANT SELECT ON PlayerProperty TO PUBLIC;

-- Add sample records.
INSERT INTO Game VALUES (1, '2006-06-27 08:00:00');
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00');
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00');

INSERT INTO Player(ID, emailAddress) VALUES (1, 'me@calvin.edu');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');

INSERT INTO PlayerGame VALUES (1, 1, 0.00);
INSERT INTO PlayerGame VALUES (1, 2, 10000.00);
INSERT INTO PlayerGame VALUES (1, 3, 2350.00);
INSERT INTO PlayerGame VALUES (2, 1, 1000.00);
INSERT INTO PlayerGame VALUES (2, 2, 0.00);
INSERT INTO PlayerGame VALUES (2, 3, 500.00);
INSERT INTO PlayerGame VALUES (3, 2, 53.00);
INSERT INTO PlayerGame VALUES (3, 2, 5500.00);


INSERT INTO Property VALUES(1, 'Arizona','purple');
INSERT INTO Property VALUES(2, 'North Carolina','purple');
INSERT INTO Property VALUES(3, 'Michigan','red');
INSERT INTO Property VALUES(4, 'Califronia','green');
INSERT INTO Property VALUES(5, 'Juliana Street','brown');


INSERT INTO PlayerProperty (gameID, playerID, propertyID, houses) VALUES (1,2,1,3);
INSERT INTO PlayerProperty (gameID, playerID, propertyID, houses) VALUES (2,0,3,2);
INSERT INTO PlayerProperty (gameID, playerID, propertyID, hotels) VALUES (2,3,3,5);
INSERT INTO PlayerProperty (gameID, playerID, propertyID, houses, hotels) VALUES (3,2,1,1);

