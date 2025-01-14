import { fetchUsers } from '@/app/lib/endpoints';
import React from 'react';

async function page() {
  const users = await fetchUsers();
  return (
    <div
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ margin: '10px' }}>
        <b>Users</b>
      </h1>
      {users.map((user) => (
        <div
          key={user.user_id}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h2>{user.name}</h2>
          <img
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              display: 'flex',
            }}
            src={user.avatar_img_url}
            alt={user.name}
          />
        </div>
      ))}
    </div>
  );
}

export default page;
