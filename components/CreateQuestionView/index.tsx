import { TextInput, View, StyleSheet } from "react-native"
import { Text } from "react-native-reanimated/lib/typescript/Animated"
import { Button, Input } from "@rneui/base"
import { useState, useEffect} from 'react'
import { SelectList } from "react-native-dropdown-select-list"
import { Category, QuestionPost } from "../../Types/Question"
import { getCategories, postQuestion } from "../../requests/questions"

const CreateQuestion = ({navigation}:any) => {
    const [title, setTitle] = useState<null | string>(null);
    const [question, setQuestion] = useState<null | string>(null);

    const [category, setCategory] = useState<number | null>(null);
    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {
        getCategories().then((data) => {
            setCategories(data.map(c => ({key: c.id, value: c.name})))
        });
    }, [])

    const submit = () => {
        const response = postQuestion({title, description: question, category_id:category}).then((data:QuestionPost|null) => {
            navigation.navigate('QuestionList', {reload: true})
        });
        const a = 1;
    }
    return (
        <View>
            <View>
                {/* <Text> */}
                <Input
                    label="Titulo"
                    multiline = {true}
                    numberOfLines = {1}
                    inputStyle={{backgroundColor: "#dbd7d7"}}
                    onChangeText={text => setTitle(text)}>
                </Input>
                <Input
                    label="Pergunta"
                    multiline = {true}
                    numberOfLines = {4}
                    inputStyle={{backgroundColor: "#dbd7d7"}}
                    onChangeText={text => setQuestion(text)}>
                </Input>
                <SelectList 
                    setSelected={(val:number) => setCategory(val)} 
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