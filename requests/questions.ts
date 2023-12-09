import { Answer } from "../Types/Answer";
import { UserSession } from "../Types/Auth";
import { Category, Question, QuestionPost } from "../Types/Question";
import { post } from "./commons"

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
    const data = await post(question, `http://10.0.2.2:8000/question/`);
    return data;
}
