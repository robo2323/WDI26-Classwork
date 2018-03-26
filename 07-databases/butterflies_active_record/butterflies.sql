CREATE TABLE butterflies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  family TEXT,
  image TEXT,
  plant_id INTEGER
);

-- seed data
INSERT INTO butterflies (name, family,plant_id) VALUES ('Monarch', 'Nymphalidae', 1);