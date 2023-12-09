import { User } from "../Types/User";
import { getById } from "./commons";

export const getCurrentUser = async():Promise<User> =>  {
    const data = await getById<User>(`http://10.0.2.2:8000/user/current-user/`);
    return data;
}