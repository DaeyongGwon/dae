-- 1. 김지수가 구매한 상품을 조회해 보세요. name, product_name, price가 반드시 포함되어야한다.
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
