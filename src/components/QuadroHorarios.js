import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Card } from 'react-native-elements'


export default class QuadroHorarios extends React.Component {
    render(){
        view = null
            if(this.props.disciplina){
                view = this.props.disciplina.map((item, index) => {
                    return (
                        <View style={styles.discplinaContainer} key={index}>

                            <Card title={item.nome} style={styles.titleDisciplina}>                                                
                            
                                <View style={styles.turmaUnidade}>   
                                    <Text style={{fontSize:15}}>Turma: {item.turma}</Text>           
                                    <Text style={{fontSize:15}}>Unidade: {item.unidade}</Text> 
                                </View>  
                
                                <View style={styles.salaDia}>   
                                    <Text style={{fontSize:15}}>Sala: {item.sala}</Text>
                                    <Text style={{fontSize:15}}>Dia: {item.dia}</Text>                               
                                </View>
                
                                <View style={styles.inicioFim}>   
                                    <Text style={{fontSize:15}}>Inicio: {item.inicio}</Text>
                                    <Text style={{fontSize:15}}>Fim: {item.fim}</Text>                               
                                </View>
                            </Card>
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
    discplinaContainer:{
        flex: 1,       
    },
    container:{
        flex: 1
    },    
    title:{
        margin: 5,
        fontSize: 20,
        color: 'black'
    },
    
    turmaUnidade:{
        flex:1,
        flexDirection: 'row-reverse',
        alignItems: 'baseline',
        justifyContent: 'space-evenly'
    },
    salaDia:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around'
    },
    inicioFim:{
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-around'
    }

})

