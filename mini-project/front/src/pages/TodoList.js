import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { SERVER } from "../lib/config";

function Todos() {
    const [todos, setTodos] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const [editTodoId, setEditTodoId] = useState(null);
    const [editing, setEditing] = useState(false);

    const onValid = async (data) => {
        try {
            const response = await axios.post(`${SERVER}/todo`, data);

            setTodos((prevTodos) => [...prevTodos, response.data]);
            reset(); // 입력 필드 리셋
        } catch (error) {
            console.log(error);
        }
    };
    const handleTodoEdit = async (todoId, newTitle) => {
        try {
            await axios.patch(`${SERVER}/todo/${todoId}`, { title: newTitle });
            setTodos((prevTodos) =>
                prevTodos.map((todo) => {
                    if (todo.id === todoId) {
                        return { ...todo, title: newTitle };
                    }
                    return todo;
                })
            );
        } catch (error) {
            console.log(error);
        }
    };

    const onInvalid = (error) => {
        console.log(error);
    };

    const handleCheckboxChange = async (todoId, checked) => {
        try {
            await axios.patch(`${SERVER}/todo/${todoId}`, { done: checked ? 1 : 0 });
            setTodos((prevTodos) =>
                prevTodos.map((todo) => {
                    if (todo.id === todoId) {
                        return { ...todo, done: checked ? 1 : 0 };
                    }
                    return todo;
                })
            );
        } catch (error) {
            console.log(error);
        }
    };

    const handleTodoDoubleClick = (todoId) => {
        setEditTodoId(todoId); // 선택된 투두 아이템의 ID 저장
        setEditing(true); // 편집 모드로 변경
    };

    const handleTodoBlur = (todoId, newTitle) => {
        setEditing(false); // 편집 모드 종료
        handleTodoEdit(todoId, newTitle); // 수정된 내용을 서버에 저장
    };
    const handleTodoDelete = async (todoId) => {
        try {
            await axios.delete(`${SERVER}/todo/${todoId}`);
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("/todo");
                setTodos(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="Todo">
            <h1>TodoList</h1>

            <ul className="TodoUl">
                {todos.map((todo) => (
                    <li key={todo.id} className="TodoList">
                        <input
                            type="checkbox"
                            defaultChecked={todo.done === 1}
                            onChange={(e) => handleCheckboxChange(todo.id, e.target.checked)}
                        />
                        {editing && editTodoId === todo.id ? (
                            <input
                                className="TodoEdit"
                                type="text"
                                defaultValue={todo.title}
                                onBlur={(e) => handleTodoBlur(todo.id, e.target.value)} // 입력 필드에서 포커스를 잃을 때 편집 모드 종료
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                        handleTodoBlur(todo.id, e.target.value); // Enter 키를 누를 때 편집 모드 종료하고 수정된 내용을 서버에 저장
                                    }
                                }}
                            />
                        ) : (
                            <span className="TodoTitle" onDoubleClick={() => handleTodoDoubleClick(todo.id)}>
                                {todo.title}
                            </span>
                        )}
                        <button onClick={() => handleTodoDelete(todo.id)} className="deleteBtn">
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
            <div className="layout">
                <div className="submitBox">
                    <h3 className="TodoBoxText">＂오늘의 할 일을 기록해보세요＂</h3>
                    <form className="TodoForm" onSubmit={handleSubmit(onValid, onInvalid)}>
                        <input
                            {...register("title", { required: "Add your new Todo" })}
                            type="text"
                            placeholder="Add your new Todo"
                            className="todo-input"
                        />
                        <button type="submit" className="TodoCreate">
                            등록
                        </button>
                    </form>
                </div>
            </div>
            <div className="background"></div>
        </div>
    );
}

export default Todos;
