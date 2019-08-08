import React from 'react';
import DropDownItem from 'react-native-drop-down-item';
import { View, Text, StyleSheet } from 'react-native';
import Disciplina from './Disciplina'

class Semestre extends React.Component {
    render(){
        view = null
        if(this.props.semestre){
            view = this.props.semestre.map((item, index) => {
                return (
                    <DropDownItem
                            key={index}
                            style={styles.dropDownItem}
                            contentVisible={false}              
                            header={
                            <View style={styles.titleSemestre}>
                                <Text style={styles.title}>Período: {item.periodo}</Text>
                                <Text style={styles.title}>CR: {item.cr}</Text>
                            </View>}>
                            <View style={styles.cadeiras}>   
                                <Disciplina cadeira={item.cadeira1} />
                                <Disciplina cadeira={item.cadeira2} /> 
                                <Disciplina cadeira={item.cadeira3} />
                                <Disciplina cadeira={item.cadeira4} />
                                <Disciplina cadeira={item.cadeira5} />
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
    cadeiras:{
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

export default Semestre