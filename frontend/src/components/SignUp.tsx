const SignUp = ()=>{

    async function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
         const data=Object.fromEntries(formData.entries())
        // new FormData();
        console.log("Form Data:", data); 

        try{
            const response = await fetch('http://localhost:4000/api/auth/signup',{
                method:"POST",
                headers:{'Content-Type':"application/json"},
                body:JSON.stringify(data)
            });
            const result = await response.json();

            alert(result.message || "suc")
        }catch(e){console.error(e)}
    }
    return <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name: </label>
    <input name="name" type="text"/>
    <label htmlFor="mobile">Mobile: </label>
    <input name="mobile" type="text"/>
    <label htmlFor="email">Email: </label>
    <input name="email" type="email"/>
    <label htmlFor="password">Password: </label>
    <input name="password" type="password"/>
    <button type="submit">SignUp</button>
    </form>
}

export default SignUp;

