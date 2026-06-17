import { prisma } from "../config/prisma"

interface CreateUserInput 
{
    name:string;
    mobile:string;
    email:string;
    username:string;
    password:string;
}

const authRepository = {
    findByEmail : (email:string) =>{
        return prisma.user.findUnique({
            where :{email},
            include:{login:true}
        })
    },
    createUser:async (data:CreateUserInput)=>{
        return prisma.user.create({
            data:{
                name:data.name,
                mobile:data.mobile,
                email:data.email,

                login:{
                    create:{
                        username:data.email,
                        password:data.password
                    }
                }
            }
        })
    },
    
}

export default authRepository;