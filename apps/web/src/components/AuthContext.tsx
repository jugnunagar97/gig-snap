"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type User = { name?: string; email?: string } | null;

type AuthContextValue = {
  isAuthenticated: boolean;
  isReady: boolean;
  user: User;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try { return window.localStorage.getItem("tp_auth") === "1"; } catch { return false; }
  });
  const [isReady, setIsReady] = useState<boolean>(false);
  const [user, setUser] = useState<User>(() => {
    if (typeof window === "undefined") return null;
    try {
      const raw = window.localStorage.getItem("tp_user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    // Ensure hydration consistency
    try {
      const flag = window.localStorage.getItem("tp_auth");
      setIsAuthenticated(flag === "1");
      const raw = window.localStorage.getItem("tp_user");
      setUser(raw ? JSON.parse(raw) : null);
    } catch {}
    setIsReady(true);
  }, []);

  const value = useMemo<AuthContextValue>(() => ({
    isAuthenticated,
    isReady,
    user,
    login: () => {
      try { window.localStorage.setItem("tp_auth", "1"); } catch {}
      setIsAuthenticated(true);
    },
    logout: () => {
      try { window.localStorage.removeItem("tp_auth"); } catch {}
      try { window.localStorage.removeItem("tp_user"); } catch {}
      setIsAuthenticated(false);
      setUser(null);
    },
  }), [isAuthenticated, isReady, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}


