import EncryptedStorage from 'react-native-encrypted-storage';
import { UserSession } from '../Types/Auth';


export const retrieveUserSession = async ():Promise<UserSession|null>  => {
    try {   
        const session = await EncryptedStorage.getItem("user");
        if(session){
            return JSON.parse(session);
        }
        return null;
    } catch (error) {
        return null
    }
}

export const getBase = async (endpoint:string) => {
    const user = await retrieveUserSession();
    if (!user) {
        throw new Error("usuario n autenticado");
    }
     const response = await fetch(endpoint, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization':`Token ${user.token}`
                },
            });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data.results;
}