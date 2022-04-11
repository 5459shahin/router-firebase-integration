import React from 'react';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const {singInWithGoogle} = useFirebase();
    return (
        <div>
            <h3>Please Log In</h3>
            <div style={{margin:'15px'}} >
            <button onClick={singInWithGoogle}>Google Sign In</button>
            </div>
           <form>
                
                <input type="email" name="email" id="email"  placeholder='Your Email'/>
                <br />
                <br />
                <input type="password" name="password" id="password" placeholder='password'/>
                <br />
                <br />
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
};

export default Login;