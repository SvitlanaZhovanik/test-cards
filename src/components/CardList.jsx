import { Card } from './Card';
import { useState, useEffect } from 'react';


export const CardList = ({data }) => {
    const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem('users')) ?? data
  );

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const onFollow = (id, num) => {
    setUsers(
      users.map(user => {
        if (user.id === id) {
          return {
            ...user,
            followers: user.followers + num,
            follow: !user.follow,
          };
        } else {
          return user;
        }
      })
    );
  };

  return (
      <ul className='bg-violet-300 h-full flex flex-wrap  items-center justify-center gap-8 pt-20 w-full'>
      {users && users.map((user) => <Card key={user.id}  onFollow={onFollow} {...user}  />)}
    </ul>
  );
};