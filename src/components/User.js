const User = ({ user }) => {
  <li>
    <h1>
      {user.name.first} {user.name.last}
    </h1>
  </li>;
};

export default User;
