import { fetchUserByUserId } from '@/app/lib/endpoints';
import Image from 'next/image';
import React from 'react';

async function page() {
  const user = await fetchUserByUserId(1);
  return (
    <div>
      <h1>User</h1>
      <div key={user.user_id}>
        <h2>{user.name}</h2>
        <Image
          src={user.avatar_img_url}
          alt={`${user.name}'s avatar`}
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}

export default page;
