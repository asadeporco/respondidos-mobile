import { TextInput, View, StyleSheet } from "react-native"
import { Text } from "react-native-reanimated/lib/typescript/Animated"
import { Button, Input } from "@rneui/base"
import { useState, useEffect} from 'react'
import { SelectList } from "react-native-dropdown-select-list"
import { Category, QuestionPost } from "../../Types/Question"
import { getCategories, postQuestion } from "../../requests/questions"
import TextInputForm from "../Inputs/TextInputForm"

const CreateQuestion = ({navigation}:any) => {
    const [title, setTitle] = useState<string | null>(null);
    const [question, setQuestion] = useState<null | string>(null);

    const [category, setCategory] = useState<number | null>(null);
    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {
        getCategories().then((data) => {
            if (data) {
                setCategories(data.map(c => ({key: c.id, value: c.name})))
            }
        });
    }, [])

    const submit = () => {
        postQuestion({title, description: question, category_id:category}).then((data:QuestionPost|null) => {
            setQuestion(null);
            setCategory(null);
            setTitle(null);
            navigation.navigate('QuestionList', {reload: true})
        });
    }

    return (
        <View>
            <View>
                {/* <Text> */}
                <TextInputForm label="Titulo" value={title} setValue={setTitle}/>
                <TextInputForm label="Descricao" value={question} setValue={setQuestion} lines={4}/>
                <SelectList 
                    setSelected={setCategory} 
                    data={categories} 
                    save="key"
                    searchPlaceholder="pesquisando"
            
                />
                <View style={styles.submitContainer}>
                    <Button title="Enviar" onPress={() => submit()}/>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    submitContainer: {
       flexDirection: 'row',
       justifyContent: 'flex-end',
       padding: 10
    },

});
export default CreateQuestion