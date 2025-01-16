"use server"
import React from 'react';
import { auth } from '@/auth';

export default async function Page() {
  const session = await auth();
  console.log(session)
  return (
    <div>
      <p>User <span className={"border-b font-bold"}>{session?.user.username}</span> logged in</p>
    </div>
  );
};
