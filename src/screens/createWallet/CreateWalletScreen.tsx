import React from 'react'
import { StyleSheet, Text } from 'react-native'
import MainWrapper from '../../components/MainWrapper/MainWrapper'

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0E3CA5',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#430366',
        width: '75%',
        height: '7%',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20
    }
})

export default class CreateWalletScreen extends React.Component {
    public render(): JSX.Element {
        return (
            <MainWrapper>
                <Text>This is your mnemonic</Text>
                <Text>Mnemonic here</Text>
            </MainWrapper>
        )
    }
}
