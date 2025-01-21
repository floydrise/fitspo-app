import { fetchUsers } from '@/app/lib/endpoints';
import Image from 'next/image';
import React from 'react';

async function page() {
  const users = await fetchUsers();
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='m-[10px]'>
        <b>Users</b>
      </h1>
      {users.map((user) => (
        <div
          key={user.user_id}
          className='flex flex-col items-center justify-center'
        >
          <h2>{user.name}</h2>
          <Image
            src={user.avatar_img_url}
            alt={`${user.name}'s avatar`}
            width={150}
            height={150}
          />
        </div>
      ))}
    </div>
  );
}

export default page;
