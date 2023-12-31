import { Fragment, useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native"
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { getAnswers } from "../../requests/questions";
import { Answer } from "../../Types/Answer";
import AnswerListContainer from "../AnswerListContainer/AnswerListContainer";
import QuestionDetailContainer from "../QuestionDetailContainer";

const QuestionDetail = ({ route, navigation }:any) =>{
    const [answers, setAnswers] = useState<Answer[]|null>(null);
    const {question} = route.params;

    useEffect(() => {
        getAnswers(question.id).then(data =>{
            setAnswers(data)
        })
    }, [])

    return (
        <FlatList
            data={answers}
            keyExtractor={(item:any) => item.id}
            ListHeaderComponent={() => <QuestionDetailContainer question={question} navigation={navigation}></QuestionDetailContainer>}
            renderItem={({item}) => <AnswerListContainer answer={item}></AnswerListContainer>}
        />
    )
}

export default QuestionDetail