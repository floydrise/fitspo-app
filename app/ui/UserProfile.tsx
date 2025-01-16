import { User } from "../lib/definitions";

function UserProfile ( { user } : { user: User }) {
    return (
      <div className="p-6 container mx-auto">

        <img src={user.avatar_img_url} alt={'User avatar'} width={100}/>
        <div>
          <h1>{user.name}</h1>
        </div>
      </div>
    )
  }
  
  export default UserProfile