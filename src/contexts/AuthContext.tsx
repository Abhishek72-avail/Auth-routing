import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AuthContextType, User } from '../types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // This is a mock implementation. In a real app, you would:
    // 1. Make an API call to your backend
    // 2. Validate credentials
    // 3. Get a token and user data
    // 4. Store the token securely
    const mockUser = {
      id: '1',
      email,
      name: 'John Doe',
    };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}