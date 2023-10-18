import { StyleSheet, Text, View } from "react-native"

const QuestionDetailContainer = ({ question }:any) =>{

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{question.title}</Text>
            <Text>{question.description}</Text>
            <Text style={styles.subtitle}>{new Date(question.created_at).toLocaleDateString()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 12
    }
})

export default QuestionDetailContainer