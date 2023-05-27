CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userId VARCHAR(20) NOT NULL,
    name VARCHAR(10) NOT NULL,
    pw VARCHAR(10) NOT NULL
)

INSERT INTO user (userId, name, pw) VALUES
('abc', '대용', '1234'),
('def', '하이', '1234'),
('ghi', '안녕', '1234')
