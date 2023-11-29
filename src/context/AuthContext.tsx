import React, { createContext, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios'; // Make sure axios is imported

interface AuthContextProps {
    userId: number;
    setUserId: React.Dispatch<React.SetStateAction<number>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [userId, setUserId] = useState(0);
    const router = useRouter();

    const logout = async () => { // Changed to an async function
        setUserId(0);
        try {
            const response = await axios.post("http://localhost:8000/user/logout/", null, { // Changed to axios.post
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            console.log(response.data);
            router.push("/login");
            localStorage.removeItem('token');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <AuthContext.Provider value={{ userId, setUserId }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}