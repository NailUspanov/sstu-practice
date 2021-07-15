import React from 'react';

const Auth = (props) => {
    debugger
    if(props.isAuth){
        return (
            <div className="">
                <span>{props.login}</span>
            </div>
        );
    }
    else {
        return (
            <div className="">
                <span>Login</span>
            </div>
        )
    }

}

export default Auth;
