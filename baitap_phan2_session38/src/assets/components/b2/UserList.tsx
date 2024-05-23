import React, { useMemo } from 'react';

export default function UserList() {
  const users = [
    { id: 1, name: 'Mai', age: 25 },
    { id: 2, name: 'Lan', age: 19 },
    { id: 3, name: 'Hưởng', age: 30 },
    { id: 4, name: 'Đức', age: 16 },
    { id: 5, name: 'Trinh', age: 22 }
  ];

  const usersOver18 = useMemo(() => {
    return users.filter(user => user.age > 18);
  }, [users]);

  return (
    <div>
      <h1>Bài 2</h1>
      <ul>
        {usersOver18.map(user => (
          <li key={user.id}>
            {user.name} (Age: {user.age})
          </li>
        ))}
      </ul>
    </div>
  );
}
