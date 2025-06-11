import { useAuth } from "./AuthContext";

export default function  UserPRofile() 
{
const  {user } = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name}</h2>
          {/* Add more profile content here */}
        </div>
      ) : (
        <div>Please log in to view your profile</div>
      )}
    </div>
  );
} 