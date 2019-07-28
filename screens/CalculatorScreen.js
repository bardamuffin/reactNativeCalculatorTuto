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
    var oc = global.swisscalc.lib.operatorCache;
    var calc = new global.swisscalc.calc.calculator();

        // Calculate: 12 + 45 = 	
    calc.addDigit("1");
    calc.addDigit("2");
    calc.addBinaryOperator(oc.AdditionOperator);
    calc.addDigit("4");
    calc.addDigit("5");
    calc.equalsPressed();
    console.log(calc.getMainDisplay());	// 57
    calc.clear();
    }

    //
    onDigitPress = (digit) => {
        
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.displayContainer}>
                    <CalcDisplay display={this.state.display} />
                </View>
                
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonRow}>
                        <CalcButton title="C" color="white" backgroundColor="#DCC894"/>
                        <CalcButton title="+/-" color="white" backgroundColor="#DCC894"/>
                        <CalcButton title="%" color="white" backgroundColor="#DCC894"/>
                        <CalcButton title="/" color="white" backgroundColor="#DCA394"/>
                    </View>
                    <View style={styles.buttonRow}>
                        <CalcButton onPress={() => { this.onDigitPress("7")}}title="7" color="white" backgroundColor="#607D8B"/>
                        <CalcButton title="8" color="white" backgroundColor="#607D8B"/>
                        <CalcButton title="9" color="white" backgroundColor="#607D8B"/>
                        <CalcButton title="x" color="white" backgroundColor="#DCA394"/>
                    </View>
                    <View style={styles.buttonRow}>
                        <CalcButton title="4" color="white" backgroundColor="#607D8B"/>
                        <CalcButton title="5" color="white" backgroundColor="#607D8B"/>
                        <CalcButton title="6" color="white" backgroundColor="#607D8B"/>
                        <CalcButton title="-" color="white" backgroundColor="#DCA394"/>
                    </View>
                    <View style={styles.buttonRow}>
                        <CalcButton title="1" color="white" backgroundColor="#607D8B"/>
                        <CalcButton title="2" color="white" backgroundColor="#607D8B"/>
                        <CalcButton title="3" color="white" backgroundColor="#607D8B"/>
                        <CalcButton title="+" color="white" backgroundColor="#DCA394"/>
                    </View>
                    <View style={styles.buttonRow}>
                        <CalcButton title="0" color="white" backgroundColor="#607D8B" style={{flex: 2}}/>
                        <CalcButton title="." color="white" backgroundColor="607D8B"/>
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