import React, {useEffect} from 'react';

export const requireAuth = (allowedRoles) => (ComposedComponent) => {

    function Authentication(props){
        useEffect(()=>{
            const user = JSON.parse(localStorage.getItem('user'));
            const userRole = user?user['profile_type']:null;
            if (!userRole) {
                props.history.push('/auth/signin');
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        });
        const user = JSON.parse(localStorage.getItem('user'));
        const userRole = user?user['profile_type']:null;
        if (allowedRoles.includes(userRole)) {
            return <ComposedComponent {...props} userRole />;
        }
        else {
            return <ComposedComponent {...props} userRole />;
        }
    }
    return (Authentication);
};
