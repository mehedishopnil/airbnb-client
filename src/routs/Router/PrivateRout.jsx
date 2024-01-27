import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRout = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <div className="w-auto h-[300px] flex justify-center items-center"><progress className="  progress  w-[300px]"></progress></div>
    }

    if(user){
        return children;
    }

    return (
        <Navigate to={'/login'} state={{from:location}} replace></Navigate>
    );
};

export default PrivateRout;