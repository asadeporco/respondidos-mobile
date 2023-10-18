import { TextInput, View, StyleSheet } from "react-native"
import { Text } from "react-native-reanimated/lib/typescript/Animated"
import { Button, Input } from "@rneui/base"
import { useState, useEffect} from 'react'
import { SelectList } from "react-native-dropdown-select-list"
import { Category } from "../../Types/Question"
import { getCategories } from "../../requests/questions"

const CreateQuestion = () => {
    const [title, setTitle] = useState<null | string>(null);
    const [question, setQuestion] = useState<null | string>(null);

    const [category, setCategory] = useState<Category | null>(null);
    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {
        getCategories().then((data) => {
            setCategories(data.map(c => ({id: c.id, value: c.name})))
            // setCategories(data)
        });
    }, [])

    const submit = () => {

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
                    inputStyle={{backgroundColor: "#dbd7d7"}}>
                </Input>
                <SelectList 
                    setSelected={(val:Category) => setCategory(val)} 
                    data={categories} 
                    save="value"
                />

                <View style={styles.submitContainer}>
                    <Button title="Enviar" />
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