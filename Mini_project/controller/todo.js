const models = require("../models");
//모델에 todo 사용
const { todo } = require("../models");

//전체 투두 조회
exports.getTodo = async (req, res) => {
    try {
        const todos = await models.todo.findAll({});
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: "데이터를 가져올 수 없습니다" });
    }
};

// 새로운 todo 생성
exports.createTodo = async (req, res) => {
    const { id, title, done } = req.body;
    try {
        const newTodo = await models.todo.create({
            id,
            title,
            done,
        });
        res.json(newTodo);
    } catch (error) {
        res.status(500).json({ error: "데이터 생성 실패" });
    }
};

// 특정 todo 수정
exports.updateTodo = async (req, res) => {
    const { todoId } = req.params;
    const { id, title, done } = req.body;
    try {
        await models.todo.update(
            {
                id,
                title,
                done,
            },
            {
                where: { id: todoId },
            }
        );
        res.json({ message: "데이터 수정 성공" });
    } catch (error) {
        res.status(500).json({ error: "데이터 수정 실패" });
    }
};

// 특정 todo 삭제
exports.deleteTodo = async (req, res) => {
    const { todoId } = req.params;
    try {
        await models.todo.destroy({
            where: { id: todoId },
        });
        res.json({ message: "데이터 삭제 성공" });
    } catch (error) {
        res.status(500).json({ error: "데이터 삭제 실패" });
    }
};
