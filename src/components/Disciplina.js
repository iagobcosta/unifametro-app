import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  Divider } from 'react-native-elements'



class Disciplina extends React.Component {
    render(){
        view = null
        if(this.props.cadeira){
            view = this.props.cadeira.map((item, index) => {
                return (
                    <View key={index} style={styles.body}>
                        <Text style={styles.disciplina}>
                            Disciplina: { item.disciplina} 
                        </Text>
                        <View style={styles.valores}>                       
                            <Text >
                                Nota: {item.nota} 
                            </Text>
                            <Text>
                                Faltas: {item.faltas} 
                            </Text>
                            <Text>
                                Situação: {item.situacao} 
                            </Text>
                        </View>
                        <Divider style={{ backgroundColor: 'green' }} />
                    </View>
                    
                )
            })
        }
        return (
            <View style={styles.container}>
                {view}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        
       
    },
    disciplina:{
        marginVertical: 15,
        fontSize: 15
    },
    valores:{
        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        fontSize: 12
    }
})

export default Disciplina