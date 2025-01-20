import { User } from '../lib/definitions';

function UserProfile({ user }: { user: User }) {
  return (
    <div className= 'mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 p-4' >
    <img
      src={user.avatar_img_url}
      alt={'User avatar'}
      width={100}
      className='h-16 w-16 rounded-full object-cover justify-center'
    />
    <h1 className='text-xl font-bold text-center'>{user.name}</h1>
  </div>
  );
}

export default UserProfile;
