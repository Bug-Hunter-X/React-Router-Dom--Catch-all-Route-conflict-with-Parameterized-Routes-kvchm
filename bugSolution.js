```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* More specific routes first */}
        <Route path="/users/:id" element={<User />} />
        {/* ... other specific routes */}
        {/* Catch-all route last */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
By placing the `/users/:id` route before the `/*` route, we ensure that the correct component is rendered when accessing paths like `/users/123`.  React Router will match `/users/:id` first and only fall back to the catch-all route if no other route matches.