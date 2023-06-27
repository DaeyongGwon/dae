import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { SERVER } from "../lib/config";

function Todos() {
    const [todos, setTodos] = useState([]);
    const { register, handleSubmit, reset } = useForm();

    const onValid = async (data) => {
        try {
            const response = await axios.post(`${SERVER}/todo`, data);

            setTodos((prevTodos) => [...prevTodos, response.data]);
            reset(); // 입력 필드 리셋
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

    const handleTodoDoubleClick = async (todoId) => {
        const newTitle = prompt("수정할 내용을 입력하세요");
        if (newTitle) {
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
        }
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
            <form onSubmit={handleSubmit(onValid, onInvalid)}>
                <input
                    {...register("title", { required: "Add your new Todo" })}
                    type="text"
                    placeholder="Add your new Todo"
                    className="todo-input"
                />
                <button type="submit">등록</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="TodoList">
                        <input
                            type="checkbox"
                            defaultChecked={todo.done === 1}
                            onChange={(e) => handleCheckboxChange(todo.id, e.target.checked)}
                        />
                        <span onDoubleClick={() => handleTodoDoubleClick(todo.id)}>{todo.title}</span>
                        <button onClick={() => handleTodoDelete(todo.id)} className="deleteBtn">
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
