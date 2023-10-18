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
import CredentialsContext from './Contexts/CredentialsContext';


function App(): JSX.Element {
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState("");

  // const credentials = useContext(CredentialsContext);
  
  return (
    <Fragment>
      <CredentialsContext.Provider value={{token, isLogged}}>
        {isLogged && <Main token={token} setIsLogged={setIsLogged}/>}
        {!isLogged && <Login setIsLogged={setIsLogged} setToken={setToken}/>}
      </CredentialsContext.Provider>
    </Fragment>
    
  );
}

const styles = StyleSheet.create({
 
});

export default App;
