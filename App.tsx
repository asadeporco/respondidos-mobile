/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Fragment, useState, createContext, useContext } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Login from './components/Login';
import Main from './components/Main';
import {CredentialsContext, UserContext} from './Contexts/CredentialsContext';
import EncryptedStorage from 'react-native-encrypted-storage';
import { getCurrentUser } from './requests/user';
import { User } from './Types/User';


function App(): JSX.Element {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<User|null>(null);
  const [token, setToken] = useState("");
  const setUserData = async (token: string) => {
    try {
      await EncryptedStorage.setItem(
          "user",
          JSON.stringify({
              token
          })
      );
      setToken(token)
      getCurrentUser().then(data => {
          setUser(data);
      })

      // Congrats! You've just stored your first value!
  } catch (error) {
      // There was an error on the native side
  }
  }

  return (
    <Fragment>
      <UserContext.Provider value={user}>
        {isLogged && <Main token={token} setIsLogged={setIsLogged}/>}
        {!isLogged && <Login setIsLogged={setIsLogged} setToken={setUserData}/>}
      </UserContext.Provider>
    </Fragment>
    
  );
}

const styles = StyleSheet.create({
 
});

export default App;
