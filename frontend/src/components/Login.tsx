const Login = ()=>{

    async function handleSubmit(e){
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries());
        try{
            const response = await fetch('http://localhost:4000/api/auth/login',{
                method:"POST",
                headers:{'Content-Type':"application/json"},
                body:JSON.stringify(data)
            });
            const result = await response.json();

            alert(result.message || "suc")
        }catch(e){console.error(e)}
    }
    return <form onSubmit={handleSubmit}>
    <label htmlFor="username">Username: </label>
    <input name="username" type="text"/>
    <label htmlFor="password">Password: </label>
    <input name="password" type="password"/>
    <button type="submit">Login</button>
    </form>
}

export default Login;

