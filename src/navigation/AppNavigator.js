import React from 'react'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import LoginScreen from '../screens/Login'
import HomeScreen from '../screens/Home'
import CadastroScreen from '../screens/Cadastro'
import PerfilScreen from '../screens/Perfil'
import InfoScreen from '../screens/Info'

const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: { 
            title: 'Home',
            headerStyle: {
                paddingVertical: '6%',
                backgroundColor: '#fff'
            },
            headerTintColor: '#ab0993',
        }
    },
    Cadastro: {
        screen: CadastroScreen,
        navigationOptions: {
            header: null
        }
    },
    Perfil: {
        screen: PerfilScreen,
        navigationOptions: {
            header: null
        }
    },
    Info: {
        screen: InfoScreen
    }
},
{
  initialRouteName: 'Login'
}
    
)

export default createAppContainer(AppNavigator)