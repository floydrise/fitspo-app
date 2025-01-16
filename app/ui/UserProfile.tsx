import { User } from "../lib/definitions";

function UserProfile ( { user } : { user: User }) {
    return (
      <div className="p-6 container mx-auto">

        {/* <Image
          src={user.avatar_img_url}
          alt={`${user.name}'s avatar`}
          width={ 150 }
          height={ 150 }
        /> */}
        <div>
          <h1>{user.name}</h1>
        </div>
      </div>
    )
  }
  
  export default UserProfile