import React from "react";

const todos = [
    {
        id: 1,
        description: "Learn React",
        isDone: false,
        targetDate: "2025-01-10"
    },
    {
        id: 2,
        description: "Build Todo App",
        isDone: true,
        targetDate: "2025-01-12"
    },
    {
        id: 3,
        description: "Learn DevOps",
        isDone: false,
        targetDate: "2025-03-12"
    }
];

const TodoApp = () => {
    return (
        <div className="p-6">
            <table className="border border-collapse w-full">
                <thead>
                    <tr>
                        <th className="border p-2">Id</th>
                        <th className="border p-2">Description</th>
                        <th className="border p-2">Is Done?</th>
                        <th className="border p-2">Target Date</th>
                    </tr>
                </thead>

                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td className="border p-2">{todo.id}</td>
                            <td className="border p-2">{todo.description}</td>
                            <td className="border p-2">
                                {todo.isDone ? "Yes" : "No"}
                            </td>
                            <td className="border p-2">{todo.targetDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodoApp;
