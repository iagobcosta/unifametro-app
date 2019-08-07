import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import Header from '../components/Header'


class Menu extends Component{
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <Header />,
      };

    onHistorico = () => {
        this.props.navigation.navigate('Historico')
    }
    render(){
        return (
            <View style={styles.container}>               
                <Text style={styles.title}>MENU</Text>
                <TouchableOpacity style={styles.card}
                    onPress={this.onHistorico}>
                        <Text style={styles.texto}>Histórico acadêmico</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}
                    onPress={() => {}}>
                        <Text style={styles.texto}>Notas e faltas </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}
                    onPress={() => {}}>
                        <Text style={styles.texto}>Quadro de horas</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    title:{
        margin: 10,
        color: '#808080'
    },
    card:{
        alignItems: 'flex-start',
        backgroundColor: '#2E8B57',
        padding: 10,
        marginHorizontal: 10,
        borderRadius:10,
        marginBottom: 10
        
        
    },
    texto:{
        color: 'white', 
        fontSize: 16       
    }
})

export default Menu