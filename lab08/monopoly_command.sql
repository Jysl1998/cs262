
-- This SQL script builds SQL queries returning the following information from your Monopoly database
--
-- @author kvlinden
-- @edit   Juli Lim
-- @version Fall, 2019
--


--Retrieve a list of all the games, ordered by date with the most recent game coming first
SELECT *
FROM Game 
ORDER BY time DESC;

--Retrieve all the games that occurred in the past week.
SELECT *
FROM Game
WHERE time >= '2019-10-18';

--Retrieve a list of players who have (non-NULL) names.
SELECT * 
FROM player
WHERE name IS NOT NULL ;

--Retrieve a list of IDs for players who have some game score larger than 2000.
SELECT playerID, score
FROM PlayerGame
WHERE score > 2000;

--Retrieve a list of players who have GMail accounts.
SELECT * 
FROM Player
WHERE emailAddress LIKE '%gmail%';


-- PostgreSQL returning following information from Monopoly database

-- Retrieve all “The King”’s game scores in decreasing order.
SELECT PlayerGame.score
FROM PlayerGame, Player
WHERE PlayerGame.playerID = player.ID
AND Player.name = 'The King'
ORDER BY PlayerGame.score DESC;

-- Retrieve the name of the winner of the game played on 2006-06-28 13:20:00.
SELECT Player.name 
FROM Player, Game, PlayerGame
WHERE Player.ID = PlayerGame.playerID
AND Game.ID = PlayerGame.gameID
AND Game.time  = '2006-06-28 13:20:00';

-- So what does that P1.ID < P2.ID clause do in the last example query?
-- ANSWER: compares the first player's ID and the second players ID making sure they don't return names 
-- that are equal to themselves

-- The query that joined the Player table to itself seems rather contrived. 
--Can you think of a realistic situation in which you’d want to join a table to itself?
-- ANSWER: You use it when an employee reports to another employee. Keeps track of making sure that the person 
-- does not report themselves, but always to each other. 