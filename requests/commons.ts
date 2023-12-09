import { getBase, postBase } from "./base";

export const getList = async <T>(endpoint:string):Promise<T[]> => {
    const data = await getBase(endpoint);
    return data.results;
}

export const getById = async <T>(endpont:string):Promise<T> => {
    return getBase(endpont);
}

export const post = async <T>(postData: T, endpont:string):Promise<T> => {
    return postBase(postData, endpont);
}
