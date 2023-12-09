import { View, Button } from "react-native"
import TextInputForm from "../Inputs/TextInputForm"
import { useState } from "react"

const AnswerCreateContainer = () => {
    const [title, setTitle] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);


    return (
        <View>
            <TextInputForm label="Resposta" value={title} setValue={setTitle}/>
            <TextInputForm label="Descricao" value={description} setValue={setDescription} lines={4}/>
            <Button title="Enviar" onPress={() => {}}/>
        </View>
    )
}

export default AnswerCreateContainer;