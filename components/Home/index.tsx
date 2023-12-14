import {Text, SafeAreaView, ScrollView} from 'react-native'
import {useContext, useState, useEffect, Fragment} from 'react'
import QuestionListContainer from '../QuestionListContainer'
import { createStackNavigator } from '@react-navigation/stack';
import QuestionDetail from '../QuestionDetail';
import { FlatList } from 'react-native-gesture-handler';
import HomeList from '../HomeList';

const Stack = createStackNavigator();

const Home = () => {
    return (
        <Fragment>
            <Stack.Navigator>
                <Stack.Screen name='QuestionList' component={HomeList}/>
                <Stack.Screen name='QuestionDetail' component={QuestionDetail}/>
            </Stack.Navigator>
        </Fragment>
    )
}

export default Home