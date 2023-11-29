import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';

export function ProtectedRoute({ children }) {
    const { userId } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if ((!userId || userId === 0) && !router.pathname.includes('login')) {
            router.push('/login');
        }
    }, [userId, router]);

    if (!userId || userId === 0) {
        return <div>Loading...</div>;
    }

    return children;
}