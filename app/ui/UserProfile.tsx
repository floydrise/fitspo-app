import { User } from '../lib/definitions';

function UserProfile({ user }: { user: User }) {
  return (
    <div>
    <img
      src={user.avatar_img_url}
      alt={'User avatar'}
      width={100}
      className='h-16 w-16 rounded-full object-cover'
    />
    <h1 className='text-xl font-bold text-center'>{user.name}</h1>
  </div>
  );
}

export default UserProfile;
