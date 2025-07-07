# TODO App – Completed Tech Task (C113766)

## Summary of Changes

### Backend (`/backend`)
- Implemented `POST /api/todo` to allow adding new TODO items.
- Implemented `DELETE /api/todo` to allow removing existing TODO items.
- Updated existing code to store and delete tasks.
- Added logic in:
  - `repository/todo.js` → stores and removes tasks.
  - `service/todo.js` → validates and forwards add/remove requests to repository.
  - `server.js` → routes the POST and DELETE requests.
- Added basic validation (no empty tasks).

### Frontend (`/src`)
- Added a **text input** and **"Add" button** to submit new TODO items.
- Added a **"Remove" button** beside each TODO item to delete it.
- Used `fetch` to send POST and DELETE requests to backend.
- On success, the UI updates immediately to show added or removed items.
- Included basic input validation (ignores empty tasks).
- Styled input, add, and remove buttons for clarity and responsiveness.

## Screenshots

Performed the provided tests for service and repository, both passed successfully.

### Test 1
![test 1](https://github.com/user-attachments/assets/5aa178d5-106e-40fc-b67e-8925ea05dae7)

### Test 2
![test 2](https://github.com/user-attachments/assets/924d6d72-d0eb-4035-9133-848a3c6ae84d)


> All screenshots are included in the `/backend tests` folder.

---
