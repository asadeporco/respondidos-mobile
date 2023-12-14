import { useCallback, useContext, useEffect, useState } from "react"
import { FlatList, SafeAreaView, Text, View, RefreshControl } from "react-native"
import { Question } from "../../Types/Question"
import QuestionListContainer from "../QuestionListContainer"
import { getQuestions, getQuestionsByUser } from "../../requests/questions"
import { getCurrentUser } from "../../requests/user"
import { User } from "../../Types/User"
import { UserContext } from "../../Contexts/CredentialsContext"

const Profile = ({navigation}:any) => {
    const [userQuestions, setUserQuestions] = useState<Question[]|null>(null);
    const user = useContext(UserContext);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        setUpData();
    }, [])


    const setUpData = async() => {
        if (user) {
            const userQuestions = await getQuestionsByUser(user.id.toString());
            setUserQuestions(userQuestions);
        }
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
            <Text style={{fontSize: 30}}>{user?.username}</Text>
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