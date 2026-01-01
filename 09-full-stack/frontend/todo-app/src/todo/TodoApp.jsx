import React, { useEffect } from "react";
import { useState } from "react";
import { retriveAllTodo } from "../components/api/TodoService";


// const todos = [
//     {
//         id: 1,
//         description: "Learn React",
//         isDone: false,
//         targetDate: "2025-01-10"
//     },
//     {
//         id: 2,
//         description: "Learn DevOps",
//         isDone: false,
//         targetDate: "2025-03-12"
//     }
// ];

const TodoApp = () => {

    const [todos, settodos] = useState([])

    useEffect(
        () => refreshTodos()
    )
    function refreshTodos() {
        retriveAllTodo('tirth').then(response => {
            settodos(response.data)
        })
        .catch(error => console.log(error))
    }

return (
    <div className="p-6">
        <table className="border border-collapse w-full">
            <thead>
                <tr>
                    <th className="border p-2">Description</th>
                    <th className="border p-2">Is Done?</th>
                    <th className="border p-2">Target Date</th>
                    <th className="border p-2">Delete</th>
                </tr>
            </thead>

            <tbody>
                {todos.map((todo) => (
                    <tr key={todo.id}>
                        <td className="border p-2">{todo.description}</td>
                        <td className="border p-2">
                            {todo.isDone ? "Yes" : "No"}
                        </td>
                        <td className="border p-2">{todo.targetDate}</td>
                        <td className="border p-2 text-center"> <button className=" rounded-full px-4 bg-amber-300">Delete</button>{todo.delete}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
};

export default TodoApp;
