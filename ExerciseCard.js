import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 10,
        paddingTop: 10,
        paddingBottom: 20,
        margin: 10,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: "row",
    },
    exercisePart: {
        width: "20%",
        textAlign: "center",
    },
    exerciseText: {
        fontSize: 28
    },
    exerciseTextInput_Init: {
        fontSize: 28,
        borderColor: '#edeeef',
        borderWidth: 2,
    },
    exerciseTextInput_Red: {
        fontSize: 28,
        borderColor: '#edeeef',
        borderWidth: 2,
    },
    exerciseTextInput_Green: {
        fontSize: 28,
        borderColor: '#edeeef',
        borderWidth: 2,
    },
});

class ExerciseCard extends Component {
    state = {
        equals: null,
        operator: null,
        leftOperand: null,
        rightOperator: null,
        result: null,
        id: null,
        isCorrect: false,
        exerciseTextInput_Style: "#edeeef",
    };

    componentDidMount() {
        //this.setState({ exercise });
        //debugger;
        //const x=this.props.exercise;
        this.setState({ equals: this.props.exercise.equals });
        this.setState({ operator: this.props.exercise.operator });
        this.setState({ leftOperand: this.props.exercise.leftOperand });
        this.setState({ rightOperator: this.props.exercise.rightOperator });
        this.setState({ id: this.props.exercise.id });
        //this.setState({ equals: '=' });
        //this.setState({ operator: 'x' });
        //this.setState({ leftOperand: '7' });
        //this.setState({ rightOperator: '4' });
        //this.setState({ id: '9d499604-b185-40be-acf4-3746f6f14366' });
    }

    handleChangeResult = (value) => {
        this.setState({ result: value });

        const green = "#0f0";
        const red = "#f00";
        if (this.state.leftOperand * this.state.rightOperator == value) {
            this.setState({ isCorrect: true });
            this.setState({ exerciseTextInput_Style: green });
        } else {
            this.setState({isCorrect: false});
            this.setState({ exerciseTextInput_Style: red });
        }
    }

    render() {
        return (
            <View style={styles.card}>
                <View style={styles.exercisePart}>
                    <Text style={styles.exerciseText}>{this.state.leftOperand}</Text>
                </View>
                <View style={styles.exercisePart}>
                    <Text style={styles.exerciseText}>{this.state.operator}</Text>
                </View>
                <View style={styles.exercisePart}>
                    <Text style={styles.exerciseText}>{this.state.rightOperator}</Text>
                </View>
                <View style={styles.exercisePart}>
                    <Text style={styles.exerciseText}>{this.state.equals}</Text>
                </View>
                <View style={styles.exercisePart}>
                    <TextInput
                        //style={[styles.exerciseTextInput, setBorder]}
                        style={[styles.exerciseTextInput_Init,{borderColor:this.state.exerciseTextInput_Style}]}
                        spellCheck={false}
                        placeholder="?"
                        value={this.state.result}
                        keyboardType="numeric"
                        onChangeText={this.handleChangeResult}
                    />
                </View>
            </View>
        );
    }
    /** 
        ExerciseCard.propTypes = {
            exercise: PropTypes.shape({
                leftOperand: PropTypes.number.isRequired,
                operator: PropTypes.number.isRequired,
                rightOperator: PropTypes.number.isRequired,
                equals: PropTypes.number.isRequired,
                result: PropTypes.number.isRequired
            })
        }
    */
}

export default ExerciseCard;
