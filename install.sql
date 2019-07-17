USE wildcircus;

CREATE TABLE event (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(128),
  image VARCHAR(256),
  price INT, 
  date DATETIME
);

ALTER TABLE event
ADD location_id INT;

INSERT INTO location (city, country)
VALUES
('Alburquerque','United States'),
('Madani','Kazakhstan'),
('Victoria West','South Africa'),
('Jayapura','Indonesia'),
('Encarnación','Paraguay'),
('Chaguanas','Trinidad and Tobago'),
('Nago','Japan');

ALTER TABLE event
ADD CONSTRAINT fk_event_location
FOREIGN KEY (location_id) 
REFERENCES location(id);

INSERT INTO event (name, image, price, date)
VALUES
('Totum','https://cdn.dribbble.com/users/120724/screenshots/6679723/cosmic-faces-1.gif', 140, '2019-12-30 20:00:00'),
('Corteï','https://cdn.dribbble.com/users/1090020/screenshots/6575551/1-01.png', 80, '2019-11-17 19:00:00'),
('Kuryos','https://cdn.dribbble.com/users/1629266/screenshots/6453357/dribbble_3-03_2x.jpg', 150, '2019-10-08 19:00:00'),
('Keezo','https://cdn.dribbble.com/users/1749151/screenshots/6348096/low_2x.jpg', 120, '2019-09-25 19:30:00'),
('Amoluna','https://cdn.dribbble.com/users/1749151/screenshots/6391087/cartoline_fb_clementina.jpg', 90, '2019-10-01 21:00:00'),
('Mysterus','https://cdn.dribbble.com/users/2773747/screenshots/6574752/cartel-dantza_2x.jpg', 80, '2019-11-22 19:30:00'),
('Vaïtoru','https://cdn.dribbble.com/users/1178585/screenshots/6788672/__1__2x.png', 120, '2019-10-03 21:30:00');