import { useState, useEffect, useCallback } from "react";
import { Question } from "../../Types/Question";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from '@react-navigation/native';
import QuestionListContainer from "../QuestionListContainer";
import {RefreshControl, FlatList} from "react-native"
import { getQuestions } from "../../requests/questions";

const HomeList = ({navigation, route}:any) => {
    const [questions, setQuestions] = useState<Question[] | []>([])
    const [refreshing, setRefreshing] = useState(false);
    let update = true;

    const getList = () => {
        getQuestions().then(data => {
            setQuestions(data);
        })
    }

    // useFocusEffect(
    //     useCallback(() => {    
    //       return () => getQuestions().then(data => setQuestions(data));
    //     }, [questions])
    //   );
    

    useEffect(() => {
        getList();
    },[])

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getList();
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