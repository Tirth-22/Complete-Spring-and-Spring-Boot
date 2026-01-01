import React, { useEffect } from "react";
import { useState } from "react";
import { retriveAllTodo, deleteTodoById } from "../components/api/TodoService";
import { AuthContext, useAuth } from "../components/security/AuthProvider";
import { useNavigate } from "react-router-dom";


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
    const [message, setMessage] = useState(null)

    const authContext = useAuth()
    const username = authContext.username

    const navigate = useNavigate()

    useEffect((username) => {
        refreshTodos()
    }, [username])

    function deleteTodo(id) {
        console.log('clicked ' + id)
        deleteTodoById(username, id)
            .then(
                () => {
                    setMessage(`Delete of todos with id = ${id} successful`)
                    refreshTodos()
                }
                //1: Display message
                //2: Update Todos list
            )
            .catch(error => console.log(error))
    }

    function updateTodo(id) {
        console.log('clicked ' + id)
        navigate(`/todo/${id}`)
    }

    function addNewTodo() {
        navigate('/todo/-1')
    }

    function refreshTodos() {
        retriveAllTodo(username).then(response => {
            settodos(response.data)
        })
            .catch(error => console.log(error))
    }

    return (
        <div className="p-6">
            {message && <div className="bg-amber-200 text-center py-4">{message}</div>}
            <table className="border border-collapse w-full">
                <thead>
                    <tr>
                        <th className="border p-2">Description</th>
                        <th className="border p-2">Is Done?</th>
                        <th className="border p-2">Target Date</th>
                        <th className="border p-2">Delete</th>
                        <th className="border p-2">Update</th>
                    </tr>
                </thead>

                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td className="border p-2">{todo.description}</td>
                            <td className="border p-2">
                                {todo.done ? "Yes" : "No"}
                            </td>
                            <td className="border p-2">{todo.targetDate}</td>
                            <td className="border p-2 text-center"> <button onClick={() => deleteTodo(todo.id)} className="cursor-pointer rounded-full px-4 bg-amber-300">Delete</button>{todo.delete}</td>
                            <td className="border p-2 text-center"> <button onClick={() => updateTodo(todo.id)} className="cursor-pointer rounded-full px-4 bg-green-400">Update</button>{todo.updateTodo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-center">
                <button onClick={addNewTodo} className="bg-green-400 py-3 cursor-pointer justify-center px-4  text-center my-7 rounded-full">Add new Todo</button>
            </div>
        </div>
    );
};

export default TodoApp;
