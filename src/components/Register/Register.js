import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register Now</h3>
            <form>
                <input type="text" name="name" id="name" placeholder='Your Name' />
                <br />
                <br />
                <input type="email" name="email" id="email"  placeholder='Your Email'/>
                <br />
                <br />
                <input type="password" name="password" id="password" placeholder='password'/>
                <br />
                <br />
                <input type="submit" value="Register"/>
            </form>
        </div>
    );
};

export default Register;