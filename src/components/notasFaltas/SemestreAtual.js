import React from 'react';
import DropDownItem from 'react-native-drop-down-item';
import { View, Text, StyleSheet } from 'react-native';
import DisciplinaAtual from './DisciplinaAtual'

class SemestreAtual extends React.Component {
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
                            <View style={styles.titleSemestre}>
                                <Text style={styles.title}>Disciplina: {item.nome}</Text>                                
                            </View>}>
                            <View style={styles.disciplina}>   
                                <DisciplinaAtual valores={item.valores1} />
                                <DisciplinaAtual valores={item.valores2} />   
                                <DisciplinaAtual valores={item.valores3} />   
                                <DisciplinaAtual valores={item.valores4} />   
                                <DisciplinaAtual valores={item.valores5} />                                   
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
    disciplina:{
        flex: 1,
        
    },
    container:{
        flex: 1
    },
    dropDownItem:{
        flex: 1,        
        margin: 10,
    },
    title:{
        margin: 5,
        fontSize: 20,
        color: 'white'
    },
    titleSemestre:{
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'green'
    }
})

export default SemestreAtual
