--Up
CREATE TABLE Comment (id INTEGER PRIMARY KEY, name TEXT);
INSERT INTO Comment (id, name)
VALUES (1, 'Comentario 1 de sql');
INSERT INTO Comment (id, name)
VALUES (2, 'Comentario 1 de sql');
INSERT INTO Comment (id, name)
VALUES (3, 'Comentario 1 de sql');
--Down
DROP TABLE Comment;