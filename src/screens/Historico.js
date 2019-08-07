import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements'
import ProgressCircle from 'react-native-progress-circle'





class Historico extends React.Component {
    

  render() {
    return (
        <Card title = 'CR Global' containerStyle={{alignItems: 'center'}}>
        <ProgressCircle
            percent={77}
            radius={50}
            borderWidth={8}
            color="green"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{'7.65%'}</Text>
        </ProgressCircle>
        </Card>
    )
  }
}



const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Historico);
