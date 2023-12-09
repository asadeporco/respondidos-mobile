import { useState, useEffect, useCallback } from "react";
import { Question } from "../../Types/Question";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from '@react-navigation/native';
import QuestionListContainer from "../QuestionListContainer";
import {RefreshControl, FlatList} from "react-native"

const HomeList = ({navigation, route}:any) => {
    const [questions, setQuestions] = useState<Question[] | []>([])
    const [refreshing, setRefreshing] = useState(false);

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
    useFocusEffect(() => {
        getQuestions();
    })

    useEffect(() => {
        getQuestions();
    },[])

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getQuestions();
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      }, []);


    return (
        <SafeAreaView>
                <FlatList
                    data={questions}
                    renderItem={({item}) => <QuestionListContainer question={item} navigation={navigation}/>}
                    keyExtractor={item => item.id}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                      }
                />
        </SafeAreaView>
    )

}

export default HomeList;