import { createContext } from "react";
import { Credentials } from "../Types/Auth";

const CredentialsContext = createContext<Credentials | null | undefined>(null)

export default CredentialsContext;