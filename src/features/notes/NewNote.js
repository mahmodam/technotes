import React from "react";
//import { useSelector } from "react-redux";
//import { selectAllUsers } from "../users/usersApiSlice";
import NewNoteForm from "./NewNoteForm";

import { useGetUsersQuery } from "../users/usersApiSlice";
import PulseLoader from "react-spinners/PulseLoader";

function NewNote() {
  //const users = useSelector(selectAllUsers);

  // במקום השורה למעלה
  const { users } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      users: data?.ids.map((id) => data?.entities[id]),
    }),
  });

  if (!users.length) return <PulseLoader color={"#FFF"} size={60} />;

  const content = <NewNoteForm users={users} />;

  return content;
}

export default NewNote;
