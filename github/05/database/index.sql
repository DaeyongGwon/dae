CREATE TABLE user (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F','M','') default '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
)