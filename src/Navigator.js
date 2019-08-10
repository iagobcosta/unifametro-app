import React from 'react'
import { 
    createBottomTabNavigator, 
    createAppContainer, 
    createSwitchNavigator,
    createStackNavigator } 
from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Menu from './screens/Menu'
import Historico from './screens/Historico'
import NotasEFaltas from './screens/NotasEFaltas'
import QuadroDHorarios from './screens/QuadroDHorarios'

const MenuStackRoutes = createStackNavigator({
    Menu: Menu,    
    Historico:{
        screen: Historico,
        navigationOptions:{
            title: 'Histórico Acadêmico'
        }
    },
    NotasEFaltas:{
        screen: NotasEFaltas,
        navigationOptions:{
            title: 'Notas e Faltas'
        }
    },
    QuadroDHorarios:{
        screen: QuadroDHorarios,
        navigationOptions:{
            title: 'Quadro de Horários'
        }
    }
},{
    initialRouteName: 'Menu'
})

const MenuTabRoutes = {
    

    Menu:{
        name: 'Menu',
        screen: MenuStackRoutes,
        navigationOptions:{
            title: 'Menu',            
            tabBarIcon: ({ tintColor }) =>
                <Icon name='bars' size={25} color={tintColor} />
            
        }
       
    },

    Feed:{
        name: 'Feed',
        screen: Feed,
        navigationOptions:{
            title: 'Feed',            
            tabBarIcon: ({ tintColor }) =>
                <Icon name='home' size={25} color={tintColor} />
            
        }
       
    },

    // Add:{
    //     name: 'AddPhoto',
    //     screen: AddPhoto,
    //     navigationOptions:{
    //         title: 'Add Picture',
    //         tabBarIcon: ({ tintColor }) =>
    //             <Icon name='camera' size={25} color={tintColor} />
    //     }
    // },
    Profile:{
        name: 'Profile',
        screen: Profile,
        navigationOptions:{
            title: 'Profile',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='user' size={25} color={tintColor} />
        }
    }
}

const MenuTabConfig ={
    initialRouteName: 'Menu',
    tabBarOptions: {
        showLabel: false,
        activeTintColor: 'green',
    }
}

const BottomTab = createBottomTabNavigator(MenuTabRoutes, MenuTabConfig)

const MenuNavigator =  createAppContainer(createSwitchNavigator(
                {
                    BottomTab: BottomTab,                   
                    Auth: Login
                },{
                    initialRouteName: 'Auth'
                }))


export default MenuNavigator