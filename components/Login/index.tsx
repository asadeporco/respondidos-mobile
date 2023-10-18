import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import React, { Fragment, useState } from 'react';
import { Input, Icon } from '@rneui/themed';
import { Button } from "@rneui/base";

const Login = ({setIsLogged, setToken}: any) => {

    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("admin");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const login = () => {
        setLoading(true)
        fetch("http://10.0.2.2:8000/api-token-auth/", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then(response => {
            if (response.status !== 200) {
                setError("Deu ruim")
                return;
            }
            response.json().then(data => {
                setError("Deu bom")
                setToken(data.token);
                setIsLogged(true);
            })
        })
    }

    return(
        <SafeAreaView>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../../resources/logo.png")}></Image>
            </View>
            <Input placeholder='Usuario' defaultValue={'admin'} leftIcon={<Icon name="person-outline" size={20}/>}  onChangeText={text => setUsername(text)}/>
            <Input placeholder="Senha" defaultValue={'admin'} secureTextEntry={true} leftIcon={<Icon name="lock-outline" size={20}/>}  onChangeText={text => setPassword(text)}/>
            <Button
            title="Login"
            loading={false}
            loadingProps={{ size: 'small', color: 'white' }}
            buttonStyle={{
                backgroundColor: "black",
                borderRadius: 5,
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
            onPress={() => login()}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        color: "black",
        alignItems: "center",
    },
    logo: {
        width: 200,
        height: 200
    },
    inputGroup: {
    },
    inputView: {
        alignItems: "center"
    },
    input: {
        backgroundColor: "#dbd7d7",
        width: "80%",
        margin: 2,
        borderRadius: 20
    },

});

export default Login;

