import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import Home from "../Home";
import CreateQuestion from "../CreateQuestionView";
import React, { Fragment, useState, useContext, createContext } from 'react';
import CredentialsContext from "../../Contexts/CredentialsContext";
import Profile from '../Profile'


const Tab = createBottomTabNavigator();

const Main = ({token, setIsLogged}:any) => {
    return(
        <Fragment>
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{headerShown:false}} name="Home" component={Home}/>
                <Tab.Screen options={{headerShown:false}} name="Pegunte" component={CreateQuestion}/>
                <Tab.Screen options={{headerShown:false}} name="Profile" component={Profile}/>
            </Tab.Navigator>
        </NavigationContainer>
        <Button title="Logout"onPress={() => setIsLogged(false)}></Button>
        </Fragment>

    )
}

const styles = StyleSheet.create({
 
});


export default Main;