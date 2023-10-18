import { useState,useEffect } from "react";
import { Question } from "../../Types/Question";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import QuestionListContainer from "../QuestionListContainer";

const HomeList = ({navigation}:any) => {
    const [questions, setQuestions] = useState<Question[] | []>([])

    const getQuestions = () => {
        fetch("http://10.0.2.2:8000/question", {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(response => {
            if (response.status !== 200) {
                return;
            }
            response.json().then(data => {
                setQuestions(data.results)
            })
        })
    }

    useEffect(() => {
        getQuestions();
    },[])


    return (
        <SafeAreaView>
                <FlatList
                    data={questions}
                    renderItem={({item}) => <QuestionListContainer question={item} navigation={navigation}/>}
                    keyExtractor={item => item.id}
                />
        </SafeAreaView>
    )

}

export default HomeList;