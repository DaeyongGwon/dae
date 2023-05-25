CREATE TABLE visitor (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    comment VARCHAR(20),
)

INSERT INTO visitor (name, comment) VALUES
('홍길동', '내가 왔다.'),
('이찬혁', '으라차차')


-- 사용자 생성
CREATE USER 'user'@'%' IDENTIFIED BY 'pw';
-- 사용자 권한 부여(모든 DB에 접근 가능)
GRANT ALL PRIVILEGES ON *.* TO 'daeyong'@'%' WITH GRANT OPTION;
-- 현재 사용중인 MYSQL 캐쉬를 지우고 설정 적용
FLUSH PRIVILEGES;