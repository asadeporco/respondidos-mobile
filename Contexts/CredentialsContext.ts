import { createContext } from "react";
import { Credentials } from "../Types/Auth";
import { User } from "../Types/User";

export const CredentialsContext = createContext<Credentials | null | undefined>(null)
export const UserContext = createContext<User|null>(null)
