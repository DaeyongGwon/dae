/*
1. 함수형 컴포넌트를 만드세요.
2. title, author, price, type이란 props를 생성하세요.
3. App.css에서 다음 사진과 비슷하게 출력되도록 클래스를 만들어주세요.
*/
import React from "react";
import PropTypes from "prop-types";

const Book = ({ title, author, price, type }) => {
    return (
        <>
            <hr />
            <div className="book">
                <h2 className="book__title">{title}</h2>
                <div className="book__author">저자: {author}</div>
                <div className="book__price">판매가: {price}</div>
                <div className="book__type">구분: {type}</div>
            </div>
        </>
    );
};

Book.defaultProps = {
    title: "제목이 없습니다.",
};

Book.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Book;
