CREATE TABLE user (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F','M','') default '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
)

INSERT INTO user (id, pw, name, gender, birthday, age) VALUES
('hong1234', '1234', 'hong', 'M', '1990-01-01', 20),
('hong1313',  '1234', 'hong', 'M', '1990-01-01', 20),
('hong1244', '1234', 'hong', 'M', 1990-01),
('power12', '1234', 'power', 'M', '1990-01-01', 20);


-- 1번 모든 회원목록을 가져오는데, 이때 birthday 컬럼의 값을 기준으로 오름차순 정렬하여 가져오시오.
SELECT * FROM user ORDER BY birthday ASC; 
-- 2번 회원 목록 중 gender 컬럼의 값이 "M"인 회원 목록을 가져오는데, 이때 name 컬럼의 값을 기준으로 내림차순 정렬하여 가져오시오.
SELECT id, name, gender FROM user WHERE gender = 'M' ORDER BY name DESC;
-- 3번 1990년대에 태어난 회원의 id, name 컬럼을 가져와 목록으로 보여주시오.
SELECT id, name FROM user WHERE birthday BETWEEN '1990-01-01' AND '1999-12-31';
-- 4번 6월생 회원의 목록을 birthday 기준으로 오름차순 정렬하여 가져오시오.
SELECT * FROM user WHERE MONTH(birthday) = 6 ORDER BY birthday ASC;
-- 5번 gender 컬럼의 값이 "M이고", 1970년대에 태어난 회원의 목록을 가져오시오.
SELECT * FROM user WHERE gender = 'M' AND birthday BETWEEN '1970-01-01' AND '1979-12-31';
-- 6번 모든 회원목록 중 age를 기준으로 내림차순 정렬하여 가져오는데, 그 때 처음 3개의 레코드만 가져오시오.
SELECT * FROM user ORDER BY age DESC LIMIT 3;
-- 7번 모든 회원 목록 중 나인가 25이상 50이하인 회원의 목록을 출력하시오.
SELECT * FROM user WHERE age BETWEEN 25 AND 50;
-- 8번 id 컬럼의 값이 hong1234인 레코드의 pw컬럼의 값을 12345678로 변경하시오.
UPDATE user SET pw = '12345678' WHERE id = 'hong1234';
-- 9번 id 컬럼의 값이 jungkrat인 레코드를 삭제하시오.
DELETE FROM user WHERE id = 'junkrat';

CREATE TABLE customer (
    id VARCHAR(10) NOT NULL,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);
INSERT INTO customer (id, name, birthday) VALUES
('aaa', '김이현', '1990-03-17'),
('bbb', '최지율', '1992-11-01'),
('ccc', '이혜진', '1993-05-01');
-- CREATE TABLE order_list (
--     id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
--     customer_id VARCHAR(10) NOT NULL,
--     product_name VARCHAR(20) NOT NULL,
--     quantity INT,
--     FOREIGN KEY (customer_id) REFERENCES customer(id)
-- );
-- INSERT INTO order_list (customer_id, product_name, quantity) VALUES
-- ('aaa', '맥북m1', 1),
-- ('bbb', '빅파이', 30),
-- ('ccc', '키보드', 3),
-- ('aaa', '초코파이', 5),
-- ('aaa', '텀블러', 1);
-- SELECT * FROM customer;
-- SELECT * FROM order_list;
-- --INNER JOIN
-- SELECT * FROM customer INNER JOIN order_list ON customer.id = order_list.customer_id;
-- SELECT * FROM customer INNER JOIN order_list ON customer.id = order_list.customer_id WHERE customer.id = 'aaa';


CREATE TABLE Customer (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL,
    phone VARCHAR(20) NOT NULL
);

CREATE TABLE Product (
    id INT NOT NULL PRIMARY KEY,
    brandName VARCHAR(20) NOT NULL,
    company VARCHAR(5) NOT NULL,
    price VARCHAR(20) NOT NULL
);

CREATE TABLE order_list (
    order_list_number INT NOT NULL PRIMARY KEY,
    Customer_id  VARCHAR(10) AUTO_INCREMENT  NOT NULL,
    Product_id INT AUTO_INCREMENT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (Customer_id) REFERENCES Customer(id),
    FOREIGN KEY (Product_id) REFERENCES Product(id)
);
---------------------------------------------------------

CREATE TABLE new_customer (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday VARCHAR(6) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    CONSTRAINT new_customer_id PRIMARY KEY id
)

CREATE TABLE new_product (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(10) NOT NULL,
    origin VARCHAR(10) NOT NULL,
    price INT NOT NULL
)

CREATE TABLE new_order (
    order VARCHAR(10) NOT NULL PRIVATE KEY,
    new_customer_id VARCHAR(10) NOT NULL ,
    new_product_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (new_customer_id) REFERENCES new_customer(id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (new_product_id) REFERENCES new_product(id) ON UPDATE CASCADE ON DELETE CASCADE
)

INSERT INTO new_customer VALUE 
('hello','김지수','910101','010-9184-3919'),
('world','박세진*','920202','010-9184-3919'),
('banana','이민지','930303','010-9184-3919'),
('apple','정민혁','940404','010-9184-3919'),
('kiwi','박세진*','960517','010-9184-3919');

INSERT INTO new_product VALUE 
('무선마우스','삼성','20000'),
('무선마우스','920202','60000'),
('긴팔티셔츠','930303','40000'),
('키보드','940404','50000'),
('헤드폰','960517','30000'),
('마우스','960517','40000');

INSERT INTO new_order VALUE
('m101312','hello','1','2'),
('k233332','banana','4','1'),
('t220085','world','3','3'),
('h111077','hello','5','1'),
('m123567','kiwi','6','1');

-- 김지수가 구매한 상품을 조회해 보세요. name, product_name, price가 반드시 포함되어야한다.
SELECT new_customer.name, new_product.product_name, new_product.price FROM new_customer
INNER JOIN new_order ON new_customer.id = new_order.new_customer_id
INNER JOIN new_product ON new_order.new_product_id = new_product.id
WHERE new_customer.name = '김지수';

-- 2. 무선마우스를 구매한 고객을 조회해 보세요.
SELECT new_customer.name, new_product.product_name, new_product.price FROM new_customer
INNER JOIN new_order ON new_customer.id = new_order.new_customer_id
INNER JOIN new_product ON new_order.new_product_id = new_product.id
WHERE new_product.product_name = '무선마우스';

-- 3. 박세진 중 긴팔티셔츠를 구매한 사람의 아이디와 상품가격, 구매수량을 조회해 보세요
SELECT new_customer.id, new_product.price, new_order.quantity FROM new_customer
INNER JOIN new_order ON new_customer.id = new_order.new_customer_id
INNER JOIN new_product ON new_order.new_product_id = new_product.id
WHERE new_customer.name = '박세진' AND new_product.product_name = '긴팔티셔츠';
