import { useCallback, useEffect, useState } from "react"
import { FlatList, SafeAreaView, Text, View, RefreshControl } from "react-native"
import { Question } from "../../Types/Question"
import QuestionListContainer from "../QuestionListContainer"
import { getQuestions, getQuestionsByUser } from "../../requests/questions"
import { getCurrentUser } from "../../requests/user"
import { User } from "../../Types/User"

const Profile = ({navigation}:any) => {
    const [userQuestions, setUserQuestions] = useState<Question[]|null>(null);
    const [user, setUser] = useState<User|null>(null);
    const [refreshing, setRefreshing] = useState(false);


    useEffect(() => {
        setUpData();
    }, [])


    const setUpData = async() => {
        const user = await getCurrentUser();
        setUser(user);
        const userQuestions = await getQuestionsByUser(user.id.toString());
        setUserQuestions(userQuestions);
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setUpData();
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      }, []);

    
    return (
        <View>
            <SafeAreaView>
            <Text>{user?.username}</Text>
            <FlatList
                    data={userQuestions}
                    renderItem={({item}) => <QuestionListContainer question={item} navigation={navigation}/>}
                    keyExtractor={item => item.id}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                      }
                />
                </SafeAreaView>
        </View>
        
    )
}

export default Profile