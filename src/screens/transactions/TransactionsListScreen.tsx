// import ElectraJs, { CoinMarketCapCurrency } from 'electra-js'
import numeral from 'numeral'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import MainWrapper from '../../components/MainWrapper/MainWrapper'

const styles = StyleSheet.create({
    transactions: {
        color: 'yellow',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 20
    },
    transaction: {
        color: 'yellow',
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 5
    }
})

export default class TransactionsListScreen extends React.Component {
    public render(): JSX.Element {
        return (
            <MainWrapper>
                <Text style={styles.transactions}>
                    TRANSACTIONS:
                </Text>
                <Text style={styles.transaction}>
                    Received 100 ECA from flscndkbcdjkscne1h
                </Text>
                <Text style={styles.transaction}>
                    Sent 100 ECA to flscndkbcdjkscne1h
                </Text>
                <Text style={styles.transaction}>
                    Sent 100 ECA to flscndkbcdjkscne1h
                </Text>
                <Text style={styles.transaction}>
                    Sent 100 ECA to flscndkbcdjkscne1h
                </Text>
                <Text style={styles.transaction}>
                    Sent 100 ECA to flscndkbcdjkscne1h
                </Text>
                <Text style={styles.transaction}>
                    Sent 100 ECA to flscndkbcdjkscne1h
                </Text>
                <Text style={styles.transaction}>
                    Sent 100 ECA to flscndkbcdjkscne1h
                </Text>
            </MainWrapper>
        )
    }
}
