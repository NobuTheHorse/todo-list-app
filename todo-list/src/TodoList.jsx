import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
        type="text"
        className="todo-input"
        value={newTodo}
        placeholder="Add a todo"
        onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
        <ul>
        {todos.map((todo, index) => (
            <li key={index} className="todo-item">
            <label className="custom-checkbox">
                <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(index)}
                />
                <span className="checkmark"></span>
                <span
                className="todo-text"
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                }}
                >
                {todo.text}
                </span>
            </label>
            <button className="delete-btn" onClick={() => deleteTodo(index)}>❌</button>
            </li>
        ))}
        </ul>
    </div>
  );
}

export default TodoList;
