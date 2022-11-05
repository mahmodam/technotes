import React from "react";
import { useGetUsersQuery } from "./usersApiSlice";
import User from "./User";
import PulseLoader from "react-spinners/PulseLoader";

function UsersList() {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery("usersList", {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  // const content = (
  //   <div className="users-list">
  //     <h2>Users List</h2>
  //     {isLoading && <p>Loading...</p>}
  //     {isSuccess && (
  //       <ul>
  //         {users.map(user => (
  //           <li key={user.id}>{user.name}</li>
  //         ))}
  //       </ul>
  //     )}
  //     {isError && <p>{error.message}</p>}
  //   </div>
  // )

  let content;

  if (isLoading) content = <PulseLoader color={"#FFF"} size={60} />;

  if (isError) {
    content = (
      <p className={isError ? "errmsg" : "offscreen"}>{error?.data?.message}</p>
    );
  }

  if (isSuccess) {
    const { ids } = users;

    const tableContent =
      ids?.length && ids.map((userId) => <User key={userId} userId={userId} />);

    content = (
      <table className="table table--users">
        <thead className="table__thead">
          <tr>
            <th scope="col" className="table__th user__username">
              Username
            </th>
            <th scope="col" className="table__th user__roles">
              Roles
            </th>
            <th scope="col" className="table__th user__edit">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    );
  }

  return content;
}

export default UsersList;
