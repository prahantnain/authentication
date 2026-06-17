import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from '../api/axios';

const Login = () =>{
    const [loading,setLoading] = useState<boolean>(false);
    const {login} = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try{
            const response = await api.post('/auth/login',data);
            login(response.data.user);
            alert("Login Successful");
            navigate('/')
        }catch(e){console.error(e)}
        finally{setLoading(false)}
    }

    return (
        <div className="auth-card">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input name="username" placeholder="Username" required/>
                <input name="password" placeholder="Password" required type="password"/>
                <button type="submit" disabled={loading}>{loading?"Logging in...":"Login"}</button>
            </form>
        </div>
    )
}

export default Login;