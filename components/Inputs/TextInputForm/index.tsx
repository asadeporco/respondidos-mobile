import { TextInput, View, Text, StyleSheet } from "react-native"

const TextInputForm = ({label, value, setValue, lines=1}:any) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                style={styles.inputArea}
                onChangeText={setValue}
                value={value}
                numberOfLines={lines}
                multiline={lines > 1}
                placeholder="..."
            >
                </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    inputArea: {
       backgroundColor: "#EFEFEF"
    },

});

export default TextInputForm;