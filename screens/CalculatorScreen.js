import React from 'react';
import { View, Text, } from 'react-native';

require("./../lib/swisscalc.lib.format.js");
require("./../lib/swisscalc.lib.operator.js");
require("./../lib/swisscalc.lib.operatorCache.js");
require("./../lib/swisscalc.lib.shuntingYard.js");
require("./../lib/swisscalc.calc.calculator.js");
require("./../lib/swisscalc.display.numericDisplay.js");
require("./../lib/swisscalc.display.memoryDisplay.js");

export default class CalculatorScreen extends React.Component {

    render() {
        return (
            <View style={{paddingTop:50}}>
                <Text>Calculator Screen</Text>
            </View>
        )
    }
}