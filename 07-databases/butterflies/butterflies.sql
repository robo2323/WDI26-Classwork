CREATE TABLE butterflies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  family TEXT,
  image TEXT -- URL for butterfly pic
);

-- seed data
INSERT INTO butterflies (name, family) VALUES ('Monarch', 'Nymphalidae');