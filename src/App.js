import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from 'react';

function App() {

  const [users, setusers] = useState(
    [
      {
        username: "Prads",
        password: "123"
      },
      {
        username: "John",
        password: "123"
      }
    ]
  );

  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route
            path='/'
            element={<Login users={users} />}
          />

          <Route
            path='/signup'
            element={<Signup users={users} setusers={setusers} />}
          />

          <Route
            path='/landing'
            element={<Landing />}
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;