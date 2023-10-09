import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Profile = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div className="space-y-10 py-20">
            <h1 className="text-center text-3xl">Your name: {user.displayName}</h1>
            <p className="text-center text-3xl">Your Email: {user.email}</p>
            <p className="flex justify-center items-center text-center text-3xl">Profile Picture: <img alt={user.displayName} width={300} height={300} src={user.photoURL} /></p>
        </div>
    );
};

export default Profile;