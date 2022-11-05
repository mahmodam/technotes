import { useParams } from "react-router-dom";
//import { useSelector } from "react-redux";
//import { selectUserById } from "./usersApiSlice";
import EditUserForm from "./EditUserForm";

import { useGetUsersQuery } from "./usersApiSlice";
//npm i react-spinners
import PulseLoader from "react-spinners/PulseLoader";

const EditUser = () => {
  const { id } = useParams();

  //const user = useSelector((state) => selectUserById(state, id));

  // במקום השורה למעלה
  const { user } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      user: data?.entities[id],
    }),
  });

  if (!user) return <PulseLoader color={"#FFF"} size={60} />;

  const content = <EditUserForm user={user} />;

  return content;
};
export default EditUser;
