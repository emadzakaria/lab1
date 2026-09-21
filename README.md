# Lab 1 - Filter & Search Todos

## Completed Task

This project implements Practice Assignment 1 for Software Project I.

The todo application now supports server-side filtering using the `done` query parameter:

- `GET /api/todos` returns all todos.
- `GET /api/todos?done=true` returns completed todos.
- `GET /api/todos?done=false` returns active/pending todos.

## Changes Made

### Backend
- Updated `backend/controllers/todoController.js`.
- Read the optional `done` query parameter from `req.query`.
- Build a conditional MongoDB filter.
- Pass the filter to `Todo.find(filter)`.
- Existing behavior is preserved when no filter is provided.

### Frontend
- Updated `frontend/src/api/todos.js` so `fetchTodos` accepts an optional filter and sends the `done` query parameter.
- Updated `frontend/src/App.jsx` with filter state: `all`, `active`, and `done`.
- The todo list is re-fetched whenever the selected filter changes.
- Added **All**, **Active**, and **Done** buttons in `todoList.jsx`.
- Added styling for the filter controls in `todo.css`.

## Filtering Approach

Filtering is performed on the server by sending the selected filter to the backend as a query parameter. This allows MongoDB to return only the requested todos instead of filtering the already-loaded array in React.
