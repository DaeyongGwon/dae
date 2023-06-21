//새로운 파일을 하나 만들어주세요. 그리고 본인이 좋아하는 음식을 소개하는 문구를 작성해주세요.
// 1. food라는 props를 생성하세요.
// 2. props 기본값을 설정하여 food에 값이 없을 때도 기본값이 출력되도록 해주세요.
// 3. food props만 빨간색 출력되도록 설정해주세요.

import React from "react";
import PropTypes from "prop-types";

const Food = ({ food }) => {
    return (
        <>
            <div>
                <hr />
                내가 좋아하는 과일은 <span style={{ color: "red" }}>{food}</span>
            </div>
        </>
    );
};

Food.defaultProps = {
    food: "먹을 것이 없습니다.",
};

Food.propTypes = {
    food: PropTypes.string.isRequired,
};

export default Food;
