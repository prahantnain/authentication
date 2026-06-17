import authRepository from "./auth.repository";

export const authService = {
    createUser:async (data:{
        name:string;
        mobile:string;
        email:string;
        username:string;
        password:string;

    })=>{
        const userExists  = await authRepository.findByEmail(data.email)
        if(userExists) throw new Error("User already exists")

        const user = await authRepository.createUser(data);

        return user;
    },
    login:async (email:string,password:string)=>{
        const userExists=await authRepository.findByEmail(email);
        if(!userExists) throw new Error("User not exists");
        
        if(userExists.login?.password!==password)
            throw new Error("User not exists");

        return 'LoggedIn'
    }
}