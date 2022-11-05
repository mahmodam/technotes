import "./App.css";
// npm i react-router-dom
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Wellcome from "./features/auth/Wellcome";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import EditNote from "./features/notes/EditNote";
import NewNote from "./features/notes/NewNote";
import Prefetch from "./features/auth/Prefetch";
import PersistLogin from "./features/auth/PersistLogin";
import RequireAuth from "./features/auth/RequireAuth";
import { ROLES } from "./config/roles";
import useTitle from "./hooks/useTitle";

function App() {
  useTitle("React Redux Toolkit");

  return (
    <Routes>
      <Route path="/" element={<Layout />} />

      {/* public routes */}
      <Route index element={<Public />} />
      <Route path="login" element={<Login />} />

      {/* הוספה */}
      {/* <Route path="user">
        <Route path="new" element={<NewUserForm />} />
      </Route> */}

      {/* private routes */}
      <Route element={<PersistLogin />}>
        {/* allowedRoles={[...Object.values(ROLES)]} אפשר גם ROLES.ADMIN או ROLES.MANAGER או ROLES.EMPLOYEE */}
        <Route
          element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
        >
          <Route element={<Prefetch />}>
            {/* Dashboard */}
            <Route path="dash" element={<DashLayout />}>
              <Route index element={<Wellcome />} />

              {/* כדי לאפשר רק ל Manager , Admin לכנס ל route */}
              <Route
                element={
                  <RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />
                }
              >
                <Route path="users">
                  <Route index element={<UsersList />} />
                  <Route path=":id" element={<EditUser />} />
                  <Route path="new" element={<NewUserForm />} />
                </Route>
              </Route>

              <Route path="notes">
                <Route index element={<NotesList />} />
                <Route path=":id" element={<EditNote />} />
                <Route path="new" element={<NewNote />} />
              </Route>
            </Route>
            {/* end of dash */}
          </Route>
        </Route>
        {/* end private routes */}
      </Route>
    </Routes>
  );
}

export default App;
