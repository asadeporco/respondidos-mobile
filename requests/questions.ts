import { Answer } from "../Types/Answer";
import { UserSession } from "../Types/Auth";
import { Category, Question, QuestionPost } from "../Types/Question";
import EncryptedStorage from 'react-native-encrypted-storage';


const retrieveUserSession = async ():Promise<UserSession|null>  => {
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

export const getAnswers = (id:string):Promise<Answer[] | any> =>  {
    return fetch(`http://10.0.2.2:8000/answer/question/${id}/`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (response.status !== 200) {
                throw new Error(response.statusText)
            }
            return response.json().then(data => {
                return data
            })
        }).catch(() => {
            return []
        })
}

export const getCategories = ():Promise<Category[]> => {
    return fetch(`http://10.0.2.2:8000/category/`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (response.status !== 200) {
                throw new Error(response.statusText)
            }
            return response.json().then(data => {
                return data.results
            })
        }).catch(() => {
            return []
        })
}

export const postQuestion = async (question:QuestionPost):Promise<QuestionPost|null> => {
    const user = await retrieveUserSession();
    if (!user) {
        return null;
    }
    const response = await fetch(`http://10.0.2.2:8000/question/`, {
                method: 'POST',
                body: JSON.stringify(question),
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
    // retrieveUserSession().then(async user => {
    //     try {
    //         if (!user) {
    //             return {}
    //         }
    //         const response = await fetch(`http://10.0.2.2:8000/question/`, {
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //                 'Token': user.token
    //             },
    //         });
    //         if (response.status !== 200) {
    //             throw new Error(response.statusText);
    //         }
    //         const data = await response.json();
    //         return data.results;
    //     } catch {
    //         return {};
    //     }
    // });

    
  
