import { useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native"
import { Question } from "../../Types/Question"
import QuestionListContainer from "../QuestionListContainer"
import { RefreshControl } from "react-native-gesture-handler"
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry"
import { getQuestions } from "../../requests/questions"
import { getCurrentUser } from "../../requests/user"
import { User } from "../../Types/User"

const Profile = ({navigation}:any) => {
    const [userQuestions, setUserQuestions] = useState<Question[]|null>(null);
    const [user, setUser] = useState<User|null>(null);

    useEffect(() => {
        getCurrentUser().then(data => {
            setUser(data)
        })
    }, [])

    
    return (
        <View>
            <Text>{user?.username}</Text>
            {/* <FlatList
                    data={userQuestions}
                    renderItem={({item}) => <QuestionListContainer question={item} navigation={navigation}/>}
                    keyExtractor={item => item.id}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                      }
                /> */}
        </View>
    )
}

export default Profile