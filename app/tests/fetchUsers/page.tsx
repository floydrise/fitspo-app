import { fetchUsers } from '@/app/lib/endpoints';
import React from 'react';

async function page() {
  const users = await fetchUsers();
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.user_id}>
          <h2>{user.name}</h2>
          <img src={user.avatar_img_url} alt={user.name} />
        </div>
      ))}
    </div>
  );
}

export default page;
