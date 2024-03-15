
import { useState } from 'react';
const TodoItem = ({ todo, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedContent, setUpdatedContent] = useState(todo.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedContent(todo.content);
  };

  const handleUpdate = () => {
    onEdit(todo.id, updatedContent);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setUpdatedContent(e.target.value);
  };

  const handleEditTodo = (id, updatedContent) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, content: updatedContent};
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={updatedContent} onChange={handleChange} />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>{todo.content}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;