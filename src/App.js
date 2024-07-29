import React, { useState } from 'react';
import './App.css';
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoContent, setEditTodoContent] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: Date.now(),
        content: newTodo.trim(),
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const handleEdit = (id, content) => {
    setEditTodoId(id);
    setEditTodoContent(content);
  };

  const handleCancelEdit = () => {
    setEditTodoId(null);
    setEditTodoContent('');
  };

  const handleUpdateTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, content: editTodoContent };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditTodoId(null);
    setEditTodoContent('');
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editTodoId === todo.id ? (
              <div>
                <input
                  type="text"
                  value={editTodoContent}
                  onChange={(e) => setEditTodoContent(e.target.value)}
                />
                <button onClick={() => handleUpdateTodo(todo.id)}>Update</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              <div>
                {todo.content}
                <button onClick={() => handleEdit(todo.id, todo.content)}>Edit</button>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;