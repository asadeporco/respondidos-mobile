import { View, Button } from "react-native"
import TextInputForm from "../Inputs/TextInputForm"
import { useState } from "react"
import { postAnswer } from "../../requests/answers";
import { Answer } from "../../Types/Answer";

const AnswerCreateContainer = ({navigation, question_id}:any) => {
    const [title, setTitle] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);


    const submit = () => {
        postAnswer({title, description: description}, question_id).then((data:Answer|null) => {
            setDescription(null);
            setTitle(null);
            navigation.navigate('QuestionList', {reload: true})
        });
    }

    return (
        <View>
            <TextInputForm label="Resposta" value={title} setValue={setTitle}/>
            <TextInputForm label="Descricao" value={description} setValue={setDescription} lines={4}/>
            <Button title="Enviar" onPress={() => submit()}/>
        </View>
    )
}

export default AnswerCreateContainer;