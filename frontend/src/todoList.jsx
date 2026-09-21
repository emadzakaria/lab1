// TodoList.jsx
import TodoItem from './TodoItem';

export default function TodoList({
  todos,
  loading,
  filter,
  onFilterChange,
  onToggle,
  onRename,
  onRemove
}) {
  const filters = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'done', label: 'Done' }
  ];

  return (
    <>
      <div className="todo-filters" role="group" aria-label="Filter todos">
        {filters.map(option => (
          <button
            key={option.value}
            type="button"
            className={filter === option.value ? 'active' : ''}
            onClick={() => onFilterChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="todo-loading">Loading tasks…</p>
      ) : todos.length === 0 ? (
        <p className="todo-empty">No tasks match this filter.</p>
      ) : (
        <>
          <ul className="todo-list">
            {todos.map(todo => (
              <TodoItem
                key={todo._id}
                todo={todo}
                onToggle={onToggle}
                onRename={onRename}
                onRemove={onRemove}
              />
            ))}
          </ul>
          <div className="receipt-footer">
            <span>{todos.length} item{todos.length === 1 ? '' : 's'}</span>
            <span>{todos.filter(t => t.done).length} of {todos.length} done</span>
          </div>
        </>
      )}
    </>
  );
}
