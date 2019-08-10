import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownItem from 'react-native-drop-down-item';


class QuadroDHorariosCompo extends React.Component{
    render(){
        view = null
        if(this.props.disciplina){
            view = this.props.disciplina.map((item, index) => {
                return (
                    <DropDownItem
                            key={index}
                            style={styles.dropDownItem}
                            contentVisible={false}
                            visibleImage={<View></View>}
                            invisibleImage={<View></View>}                
                            header={
                            <View style={styles.titleDisciplina}>
                                <Text style={styles.title}>Disciplina: {item.nome}</Text>                                
                            </View>}>

                            <View style={styles.turmaUnidade}>   
                               <Text>Turma: {item.turma}</Text>
                               <View>
                               <Text>Unidade: {item.unidade}</Text> 
                               </View>                              
                            </View>

                            <View style={styles.salaDia}>   
                               <Text>Sala: {item.sala}</Text>
                               <Text>Dia: {item.dia}</Text>                               
                            </View>

                            <View style={styles.inicioFim}>   
                               <Text>Inicio: {item.inicio}</Text>
                               <Text>Fim: {item.fim}</Text>                               
                            </View>
                            
                    </DropDownItem>
                )
            })
        }
        return(
            <View style={styles.container}>
                {view}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    container:{
        flex: 1
    },
    dropDownItem:{        
        margin: 10,
    },
    title:{
        margin: 5,
        fontSize: 20,
        color: 'white'
    },
    titleDisciplina:{
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'green'
    },
    turmaUnidade:{
        flex:1,
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    salaDia:{
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    inicioFim:{
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    }

})

export default QuadroDHorariosCompo