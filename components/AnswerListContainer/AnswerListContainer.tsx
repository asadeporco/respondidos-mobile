import { ListItem, Text } from "@rneui/base"
import { Answer } from "../../Types/Answer"
import { StyleSheet } from "react-native"

const AnswerListContainer = ({answer}:{answer:Answer}) => {
    return (
        <ListItem>
            <ListItem.Content>
                
                <ListItem.Content>
                    <ListItem.Title>{answer.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Content style={styles.container}>
                    <ListItem.Subtitle style={styles.subtitle}>{new Date(answer.created_at).toLocaleDateString()}</ListItem.Subtitle>
                </ListItem.Content>



                <ListItem.Content>
                    <ListItem.Subtitle>{answer.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem.Content>
        </ListItem>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        alignSelf: 'flex-start'
    },
    subtitle: {
        fontSize: 12
    }
})

export default AnswerListContainer