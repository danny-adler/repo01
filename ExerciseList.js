import React, { Component } from 'react';
import { FlatList, View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';
; // ⇨ '11edc52b-2918-4d71-9058-f7285e29d894'

import ExerciseCard from './ExerciseCard';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#edeeef',
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

class ExerciseList extends Component {
    state = {
        exercises: []
    }

    componentDidMount() {
        //generateExercises();
        const temp = [
            {
                "result": "",
                "rightOperator": "2",
                "leftOperand": "5",
                "operator": "x",
                "equals": "=",
                "isCorrect": false,
                "id": "05dafc66-bd91-43a0-a752-4dc40f039144"
            },
            {
                "result": "",
                "rightOperator": "7",
                "leftOperand": "3",
                "operator": "x",
                "equals": "=",
                "isCorrect": false,
                "id": "9d499604-b185-40be-acf4-3746f6f14366"
            }
        ];
        const exercises = temp.map(e => ({
            ...e
        }));
        this.setState({ exercises });
    }



    handleRefreshPress = () => {
        //this.props.navigation.navigate('Add an event');
        //debugger;
        let totalResult = true;
        const ex = this.state.exercises;

        ex.forEach(element => {
            console.log("element.isCorrect: " + element.isCorrect);
            if (!element.isCorrect) {
                totalResult = false;
            }
        });
        console.log("totalResult " + totalResult);

        const temp = [];
        const exercisesCount = 5;
        const min = 0;
        const max = 10;
        for (let index = 0; index < exercisesCount; index++) {
            const leftOperand = Math.floor(Math.random() * (max - min + 1)) + min;
            const rightOperand = Math.floor(Math.random() * (max - min + 1)) + min;
            temp.push({
                "result": "",
                "rightOperator": rightOperand,
                "leftOperand": leftOperand,
                "operator": "x",
                "equals": "=",
                "isCorrect": false,
                "id": uuid.v4()
            });
        }

        const exercises = temp.map(e => ({
            ...e
        }));
        this.setState({ exercises });
    }

    render() {
        return [
            <FlatList
                style={styles.list}
                data={this.state.exercises}
                renderItem={({ item }) => <ExerciseCard exercise={item} />}
                keyExtractor={item => item.id}
            />,
            <View>
                <TouchableHighlight
                    onPress={this.handleRefreshPress}
                    style={styles.button} >
                    <Text style={styles.buttonText}>Refresh</Text>
                </TouchableHighlight>
            </View>
        ];
    }
}

export default ExerciseList;
