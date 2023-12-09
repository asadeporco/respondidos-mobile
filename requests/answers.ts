import { Answer } from "../Types/Answer";
import { post } from "./commons"

export const postAnswer = async (answer:Answer, questionId: Number):Promise<Answer|null> => {
    const data = await post(answer, `http://10.0.2.2:8000/answer/question/${questionId}/`);
    return data;
}