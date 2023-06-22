import { useDispatch, useSelector } from 'react-redux';
import  User  from './User'
import { fetchUsers } from '../store/users/usersSlice';
import { useEffect } from 'react';

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  
  if (error !== undefined) {
    return (
      <div>
        Something wengt wrong:
        {error}
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UsersList;
