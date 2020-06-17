DROP DATABASE IF EXISTS envKeys

CREATE DATABASE envKeys;

USE envKeys;

CREATE TABLE keysForEmail (
	id INT NOT NULL AUTO_INCREMENT,
    REACT_APP_CLIENT_ID VARCHAR(50),
    REACT_APP_CLIENT_SECRET VARCHAR(50),
    REACT_APP_ACCESSTOKEN VARCHAR(50),
    PRIMARY KEY (id)
);

INSERT INTO keysForEmail (REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_ACCESSTOKEN) VALUES ("2b0wil8pimz3r601wuvibk1hg", "ek65yrhbwk4g86byen63a5g3v", "Lf5U9FRgxiqY8OvLRarCSYYfRqU5ag");