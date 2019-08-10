import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Header from '../components/Header'


class Menu extends Component{
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <Header />,
      };

    onHistorico = () => {
        this.props.navigation.navigate('Historico')
    }

    onNotasEFaltas = () => {
        this.props.navigation.navigate('NotasEFaltas')
    }

    onQuadroDHorarios = () => {
        this.props.navigation.navigate('QuadroDHorarios')
    }
    render(){
        return (
            <View style={styles.container}>               
                <Text style={styles.title}>MENU</Text>
                <TouchableOpacity style={styles.card}
                    onPress={this.onHistorico}>
                        <Icon name='file-o' size={25} color={'green'} style={styles.icon} />
                        <Text style={styles.texto}>Histórico acadêmico</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}
                    onPress={this.onNotasEFaltas}>
                        <Icon name='file-text-o' size={25} color={'green'} style={styles.icon} />
                        <Text style={styles.texto}>Notas e faltas </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}
                    onPress={this.onQuadroDHorarios}>
                        <Icon name='history' size={25} color={'green'} style={styles.icon} />
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
    icon:{
        marginHorizontal: 15
    },
    card:{
        flexDirection: 'row',        
        alignItems: 'flex-start',        
        padding: 10,        
        marginHorizontal: 10,
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderLeftWidth: 3,
        borderTopWidth: 3,
        borderRadius:10,
        marginBottom: 10,       
        borderColor: 'green'
        
    },
    texto:{
        color: 'black', 
        fontSize: 20,
        fontWeight: 'bold'       
    }
})

export default Menu