import { createContext, useState, useContext, ReactNode } from 'react';

// 1. Define what a user object looks like (Change this to match your real data)
interface UserType {
    id: string;
    name: string;
    email: string;
}

// 2. Define the shape of the data that the context will hold
interface AuthContextType {
    user: UserType | null;
    login: (userData: UserType) => void;
    logout: () => void;
}

// 3. Create the context with an initial value of undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 4. Define props for the provider component to type the 'children' prop
interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    // Tell useState that user can be a UserType or null
    const [user, setUser] = useState<UserType | null>(null);

    const login = (userData: UserType) => setUser(userData);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// 5. Create a safe custom hook to use the context
export const useAuth = () => {
    const context = useContext(AuthContext);
    
    // Throw an error if the hook is used outside of the provider
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    
    return context;
};
