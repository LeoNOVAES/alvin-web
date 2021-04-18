import React, { useState } from 'react';
import { login } from './AuthController';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';

export default function Auth() {

    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();

    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <>
            <form onSubmit={(e) => login(email, password, e, history, dispatch)}>
                <label>email</label>
                <input 
                    type='text'
                    onChange = { (e) => setEmail(e.target.value) }  
                />
                <label>password</label>
                <input 
                    type='password'
                    onChange = { (e) => setPassword(e.target.value) }  
                />
                <button type="submit" >login</button>
            </form>
        </>
    );
}
