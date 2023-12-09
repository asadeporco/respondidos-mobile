import { retrieveUserSession, getBase } from "./base";


export const post = async <T>(postData: T, endpont:string):Promise<T> => {
    const user = await retrieveUserSession();
        if (!user) {
        throw new Error("usuario n autenticado");
    }
     const response = await fetch(endpont, {
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


export const getList = async <T>(endpont:string):Promise<T[]> => {
    return getBase(endpont);
}

export const getById = async <T>(endpont:string):Promise<T> => {
    return getBase(endpont);
}
