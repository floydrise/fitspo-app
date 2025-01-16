import { fetchUserByUserId } from '@/app/lib/endpoints';
import React from 'react';

async function page() {
  const user = await fetchUserByUserId(1);
  return (
    <div>
      <h1>User</h1>
      <div key={user.user_id}>
        <h2>{user.name}</h2>
        <img src={user.avatar_img_url} alt={user.name} />
      </div>
    </div>
  );
}

export default page;
