import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { CalcButton, CalcDisplay } from './../components';

require("./../lib/swisscalc.lib.format.js");
require("./../lib/swisscalc.lib.operator.js");
require("./../lib/swisscalc.lib.operatorCache.js");
require("./../lib/swisscalc.lib.shuntingYard.js");
require("./../lib/swisscalc.calc.calculator.js");
require("./../lib/swisscalc.display.numericDisplay.js");
require("./../lib/swisscalc.display.memoryDisplay.js");

export default class CalculatorScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            display: "0",
        };
    this.oc = global.swisscalc.lib.operatorCache;
    this.calc = new global.swisscalc.calc.calculator();

    }

    //
    onDigitPress = (digit) => {
        this.calc.addDigit(digit);
        this.setState({ display: this.calc.getMainDisplay() })
    }
    onClearPress = () => {
        this.calc.clear();
        this.setState({ display: this.calc.getMainDisplay() })
    }
    onPlusMinusPress = () => {
        this.calc.negate();
        this.setState({ display: this.calc.getMainDisplay() })
    } 
    onBinaryOperatorPress = (operator) => {
        this.calc.addBinaryOperator(operator);
        this.setState({ display: this.calc.getMainDisplay() })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.displayContainer}>
                    <CalcDisplay display={this.state.display} />
                </View>
                
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonRow}>
                        <CalcButton onPress={this.onClearPress} title="C" color="white" backgroundColor="#DCC894"/>
                        <CalcButton onPress={this.onPlusMinusPress} title="+/-" color="white" backgroundColor="#DCC894"/>
                        <CalcButton title="%" color="white" backgroundColor="#DCC894"/>
                        <CalcButton onPress={() => { this.onBinaryOperatorPress(this.oc.DivisionOperator) }} title="/" color="white" backgroundColor="#DCA394"/>
                    </View>
                    <View style={styles.buttonRow}>
                        <CalcButton onPress={() => { this.onDigitPress("7")}} title="7" color="white" backgroundColor="#607D8B"/>
                        <CalcButton onPress={() => { this.onDigitPress("8")}} title="8" color="white" backgroundColor="#607D8B"/>
                        <CalcButton onPress={() => { this.onDigitPress("9")}} title="9" color="white" backgroundColor="#607D8B"/>
                        <CalcButton title="x" color="white" backgroundColor="#DCA394"/>
                    </View>
                    <View style={styles.buttonRow}>
                        <CalcButton onPress={() => { this.onDigitPress("4")}} title="4" color="white" backgroundColor="#607D8B"/>
                        <CalcButton onPress={() => { this.onDigitPress("5")}} title="5" color="white" backgroundColor="#607D8B"/>
                        <CalcButton onPress={() => { this.onDigitPress("6")}} title="6" color="white" backgroundColor="#607D8B"/>
                        <CalcButton onPress={() => { this.onDigitPress("7")}} title="-" color="white" backgroundColor="#DCA394"/>
                    </View>
                    <View style={styles.buttonRow}>
                        <CalcButton onPress={() => { this.onDigitPress("1")}} title="1" color="white" backgroundColor="#607D8B"/>
                        <CalcButton onPress={() => { this.onDigitPress("2")}} title="2" color="white" backgroundColor="#607D8B"/>
                        <CalcButton onPress={() => { this.onDigitPress("3")}} title="3" color="white" backgroundColor="#607D8B"/>
                        <CalcButton title="+" color="white" backgroundColor="#DCA394"/>
                    </View>
                    <View style={styles.buttonRow}>
                        <CalcButton onPress={() => { this.onDigitPress("0")}} title="0" color="white" backgroundColor="#607D8B" style={{flex: 2}}/>
                        <CalcButton onPress={() => { this.onDigitPress(".")}} title="." color="white" backgroundColor="607D8B"/>
                        <CalcButton title="=" color="white" backgroundColor="#DCA394"/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonRow: { flexDirection: "row", justifyContent: "space-between",},
    displayContainer: { flex: 1, justifyContent: "flex-end" },
    container: { flex: 1, backgroundColor: "black",},
    buttonContainer: { paddingBottom: 20},
})