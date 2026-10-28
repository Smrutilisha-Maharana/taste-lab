import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const SESSION_STORAGE_KEY = "taste-lab-auth-user";
const USERS_STORAGE_KEY = "taste-lab-auth-users";
const AuthContext = createContext(null);

function readStoredUser() {
  try {
    const storedUser = window.localStorage.getItem(SESSION_STORAGE_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Unable to read the stored session.", error);
    return null;
  }
}

function readStoredUsers() {
  try {
    const storedUsers = window.localStorage.getItem(USERS_STORAGE_KEY);
    return storedUsers ? JSON.parse(storedUsers) : [];
  } catch (error) {
    console.error("Unable to read stored accounts.", error);
    return [];
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser);

  useEffect(() => {
    if (user) {
      window.localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user));
    } else {
      window.localStorage.removeItem(SESSION_STORAGE_KEY);
    }
  }, [user]);

  function login(credentials) {
    const email = credentials?.email?.trim().toLowerCase();
    const password = credentials?.password;

    if (!email || !password) {
      throw new Error("Email and password are required to sign in.");
    }

    const storedUser = readStoredUsers().find((account) => {
      return account.email === email && account.password === password;
    });

    if (!storedUser) {
      throw new Error("The email or password is incorrect.");
    }

    setUser({
      id: storedUser.id,
      name: storedUser.name,
      email: storedUser.email,
    });
  }

  function register(userDetails) {
    const name = userDetails?.name?.trim();
    const email = userDetails?.email?.trim().toLowerCase();
    const password = userDetails?.password;

    if (!name || !email || !password) {
      throw new Error("Name, email, and password are required.");
    }

    const users = readStoredUsers();

    if (users.some((account) => account.email === email)) {
      throw new Error("An account with this email already exists.");
    }

    const newUser = {
      id: email,
      name,
      email,
      password,
    };

    try {
      window.localStorage.setItem(
        USERS_STORAGE_KEY,
        JSON.stringify([...users, newUser]),
      );
    } catch (error) {
      throw new Error("Unable to save the account on this device.", {
        cause: error,
      });
    }

    setUser({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    });
  }

  function logout() {
    setUser(null);
  }

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      register,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}