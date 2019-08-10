import React, { Component } from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import QuadroDHorariosCompo from '../components/QuadroDHorariosCompo'




class QuadroDHorarios extends Component {

    state = {
        disciplina1:[{
            nome: 'SEGURANÇA DA INFORMAÇÃO',
            turma: 'SINF8N',
            unidade: 'Guilherme Rocha',
            sala: '126',
            dia: 'seg',
            inicio: '19:00',
            fim: '21:45'
        }],
        disciplina2:[{
            nome: 'SEGURANÇA DA INFORMAÇÃO',
            turma: 'SINF8N',
            unidade: 'Guilherme Rocha',
            sala: '126',
            dia: 'seg',
            inicio: '19:00',
            fim: '21:45'
        }]
    }
  render() {
    return (
        <View style={styles.container}>
            <ScrollView>
            <QuadroDHorariosCompo disciplina={this.state.disciplina1} />
            <QuadroDHorariosCompo disciplina={this.state.disciplina2} />
            </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})


export default QuadroDHorarios