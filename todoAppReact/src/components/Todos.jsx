import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addTodo, removeTodo, toggleComplete } from "../features/todoSlice/todoSlice";
import { useState } from "react";




function Todos() {

    const Quotes = ["Finish Reading That Book 📚","Call Mom ❤️","Workout & Get Fit 💪","Learn a New Recipe 🍳","Organize Desk & Workspace 🗂️"
,"Write in Journal ✍️","Plan Weekend Getaway 🏞️","Complete Online Course 🎓","Buy Grocery ! 🍴","Clean & Tidy Up 🧹"]
    let index = Math.floor(Math.random()*10)
    const [todotext, setTodoText] = useState('')
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos)



    return (
        <>
            <h1 className="text-2xl text-blue-500 font-bold text-blue-500 justify-center items-center flex mt-5 p-4 uppercase text-nowrap sm:text-4xl">Todo-App (Redux)</h1>

            <div className="todo-box flex justify-center items-center p-6 gap-8 " >
                <input type="text" placeholder={`${Quotes[index]}`} className="border shadow-md font-mono border-gray-500 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" value={todotext} onChange={(e) => { setTodoText(e.target.value) }} />
                <button className="text-white shadow-md font-mono bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-nowrap p-4 rounded-full uppercase shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => {
                        if (todotext.trim()) {
                            dispatch(addTodo({ text: todotext }));
                            setTodoText("");
                        }
                    }}
                >
                    Add Todo
                </button>


            </div>

            {
                todos.map((todo) => {
                    return <div key={todo.id} className={`todo-cont w-full flex justify-between ${todo.completed ? 'bg-gray-400' : ""} p-4 bg-blue-100 rounded-lg mt-2`}>

                        <input onChange={() => {
                            dispatch(toggleComplete({ id: todo.id }))
                        }} type="checkbox" name="Completed" checked={todo.completed} id="isCompleted" />
                        <h2 className={`font-mono text-gray-800 font-semibold ${todo.completed ? 'line-through text-white' : ''}`}>{todo.text}</h2>
                        <button className="hover:scale-105 transition duration-100 ease-in" onClick={() => {
                            dispatch(removeTodo({ id: todo.id }))
                        }}><img height={50} width={20} src="../icons8-delete.svg" alt="delete-icon" /></button>
                    </div>
                })
            }
        </>
    )
}

export default Todos
