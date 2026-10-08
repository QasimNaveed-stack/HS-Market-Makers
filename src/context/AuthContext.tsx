import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase/config';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  authError: string | null;
  clearAuthError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    setAuthError(null);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err: unknown) {
      const rawMessage = err instanceof Error ? err.message : String(err);
      if (rawMessage.includes('popup-closed-by-user')) {
        // User voluntarily dismissed popup, no error to show
        return;
      }
      if (rawMessage.includes('network-request-failed')) {
        setAuthError('Network error encountered. Please check your internet connection.');
      } else if (rawMessage.includes('popup-blocked')) {
        setAuthError('Sign-in popup was blocked by your browser. Please allow popups for this site.');
      } else {
        setAuthError('Sign-in could not be completed. Please try again.');
      }
      throw err;
    }
  };

  const logout = async () => {
    setAuthError(null);
    try {
      await signOut(auth);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Sign-out failed';
      setAuthError(message);
      throw err;
    }
  };

  const clearAuthError = () => setAuthError(null);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        signInWithGoogle,
        logout,
        authError,
        clearAuthError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
