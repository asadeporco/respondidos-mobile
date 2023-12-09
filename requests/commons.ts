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

export const post = async <T>(postData: T, endpont:string):Promise<T|null> => {
    const user = await retrieveUserSession();
        if (!user) {
        return null;
    }
     const response = await fetch(`http://10.0.2.2:8000/question/`, {
                method: 'POST',
                body: JSON.stringify(postData),
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
