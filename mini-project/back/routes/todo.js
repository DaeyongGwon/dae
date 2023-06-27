//model과 연결
const express = require("express");
const controller = require("../controller/todo");
const router = express.Router();

// 전체 todo 조회
router.get("/todo", controller.getTodo);

// 새로운 todo 생성
router.post("/todo", controller.createTodo);

// 특정 todo 수정
router.patch("/todo/:todoId", controller.updateTodo);

// 특정 todo 삭제
router.delete("/todo/:todoId", controller.deleteTodo);

module.exports = router;
