import React, { Component } from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import QuadroHorarios from '../components/quadroHorarios/QuadroHorarios'





class QuadroDHorarios extends Component {

    state = {       
        disciplina1:[{
            id: Math.random(),
            nome: 'SEGURANÇA DA INFORMAÇÃO',
            turma: 'SINF8N',
            unidade: 'Guilherme Rocha',
            sala: '126',
            dia: 'seg',
            inicio: '19:00',
            fim: '21:45'
        }],
        disciplina2:[{
            id: Math.random(),
            nome: 'SEGURANÇA DA INFORMAÇÃO',
            turma: 'SINF8N',
            unidade: 'Guilherme Rocha',
            sala: '126',
            dia: 'seg',
            inicio: '19:00',
            fim: '21:45'
        }],
        disciplina3:[{
            id: Math.random(),
            nome: 'SEGURANÇA DA INFORMAÇÃO',
            turma: 'SINF8N',
            unidade: 'Guilherme Rocha',
            sala: '126',
            dia: 'seg',
            inicio: '19:00',
            fim: '21:45'
        }],
        disciplina4:[{
            id: Math.random(),
            nome: 'SEGURANÇA DA INFORMAÇÃO',
            turma: 'SINF8N',
            unidade: 'Guilherme Rocha',
            sala: '126',
            dia: 'seg',
            inicio: '19:00',
            fim: '21:45'
        }],
        disciplina5:[{
            id: Math.random(),
            nome: 'SEGURANÇA DA INFORMAÇÃO',
            turma: 'SINF8N',
            unidade: 'Guilherme Rocha',
            sala: '126',
            dia: 'seg',
            inicio: '19:00',
            fim: '21:45'
        }],
        
        
    }
  render() {
    return (
        <View style={styles.container}>
            <ScrollView>
            <QuadroHorarios  disciplina={this.state.disciplina1} />
            <QuadroHorarios  disciplina={this.state.disciplina2} />
            <QuadroHorarios  disciplina={this.state.disciplina3} />
            <QuadroHorarios  disciplina={this.state.disciplina4} />
            <QuadroHorarios  disciplina={this.state.disciplina5} />
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