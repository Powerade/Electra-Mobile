import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
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

export default class ImportWalletScreen extends React.Component {
    public render(): JSX.Element {
        return (
            <MainWrapper>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.scanQRCode}
                >
                    <Text style={styles.buttonText}>Scan QR Code</Text>
                </TouchableOpacity>
            </MainWrapper>
        )
    }
}
