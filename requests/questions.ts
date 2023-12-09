import { Answer } from "../Types/Answer";
import { Category, Question, QuestionPost } from "../Types/Question";
import { getList, post } from "./commons"



export const getAnswers = async(id:string):Promise<Answer[]> =>  {
    const data = await getList<Answer>(`http://10.0.2.2:8000/answer/question/${id}/`);
    return data;
}

export const getCategories = async():Promise<Category[]> => {
    const data= await getList<Category>(`http://10.0.2.2:8000/category/`);
    return data;
}

export const postQuestion = async (question:QuestionPost):Promise<QuestionPost> => {
    const data = await post<QuestionPost>(question, `http://10.0.2.2:8000/question/`);
    return data;
}

export const getQuestions = async ():Promise<Question[]> => {
    const data = getList<Question>('http://10.0.2.2:8000/question');
    return data;
}
