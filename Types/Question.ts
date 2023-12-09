export type Question = {
    id:any,
    title:string
}

export type Category =  {
    id: number,
    name: string
}

export type QuestionPost = {
    title?: string|null,
    description?: string|null,
    category_id?: number|null
}