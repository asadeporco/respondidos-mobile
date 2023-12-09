import { ListItem } from '@rneui/base'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'


const QuestionListContainer = ({question, navigation}:any) => {
    const goToDetails = () => {
        navigation.navigate('QuestionDetail', {question})
    }
    return (
        <TouchableOpacity onPress={() => goToDetails()}>

            <ListItem>
                <ListItem.Content>
                    <ListItem.Title>{question.title}</ListItem.Title>
                    <ListItem.Subtitle right={false}>{question.category?.name}</ListItem.Subtitle>
                    <ListItem.Subtitle>{new Date(question.created_at).toLocaleDateString()}</ListItem.Subtitle>
                    <ListItem.Subtitle numberOfLines={2}>{question.description}</ListItem.Subtitle>


                </ListItem.Content>
            </ListItem>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end'
    },
    subtitle: {
        
    }
})

export default QuestionListContainer; 