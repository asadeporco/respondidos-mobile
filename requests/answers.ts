// export const postQuestion = async (question:QuestionPost):Promise<QuestionPost|null> => {
//     const user = await retrieveUserSession();
//     if (!user) {
//         return null;
//     }
//     const response = await fetch(`http://10.0.2.2:8000/question/`, {
//                 method: 'POST',
//                 body: JSON.stringify(question),
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                     'Authorization':`Token ${user.token}`
//                 },
//             });
//     if (response.status !== 200) {
//         throw new Error(response.statusText);
//     }
//     const data = await response.json();
//     return data.results;

        
// }
    