import { User } from '../lib/definitions';

function UserProfile({ user }: { user: User }) {
  return (
    <div className='mb-4 flex items-center gap-4 rounded-md border p-3'>
      <img
        src={user.avatar_img_url}
        alt={'User avatar'}
        width={100}
        className='h-16 w-16 rounded-full object-cover'
      />
      <h1 className='text-xl font-bold '>{user.name}</h1>
    </div>
  );
}

export default UserProfile;
