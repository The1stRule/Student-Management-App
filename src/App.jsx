import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Students from './components/Students.jsx';
import Register from './components/Register.jsx';
import Authorization from './components/Authorization.jsx';
import ProtectedRote from './components/ProtectedRote.jsx';

const App = () => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
  const [curUser, setCurUser] = useState(JSON.parse(localStorage.getItem("curUser")) || {});

  useEffect(() => {
    setUsers(prev => {
      const newUsersList = prev.filter(curValue => curValue.email !== curUser.email);
      localStorage.setItem("users", JSON.stringify([...newUsersList, curUser]));
      localStorage.setItem("curUser", JSON.stringify(curUser));
      return [...newUsersList, curUser];
    })
  }, [curUser])

  return (
    <>
      <Routes>
          <Route path="/" element={
            <ProtectedRote curUser={curUser}>
              <Students curUserList={[curUser, setCurUser]} />
            </ProtectedRote>}
            />
        <Route path="/register" element={<Register usersList={[users, setUsers]} />} />
        <Route path="/authorization" element={<Authorization users={users} setCurUser={setCurUser} />} />
        <Route path="*" element={<div id="not-found"><h1>Page Not Found</h1></div>} />
      </Routes>
    </>
  );
}

export default App;