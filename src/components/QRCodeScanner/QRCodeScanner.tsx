import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import MainWrapper from '../../components/MainWrapper/MainWrapper'

import QRCodeScanner from 'react-native-qrcode-scanner'
import Prompt from 'rn-prompt'

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

export default class QRCodeScannerComp extends React.Component {
    constructor(props: object) {
        super(props)
        this.state = {
            showPrompt: false
        }
    }

    private onRead = (data) => {
        console.log(data)
    }

    private goToWallet = () => {
        this.setState({
            showPrompt: false
        })
        this.props.navigation.navigate('Wallet')
    }

    private askCode = () => {
        this.setState({
            showPrompt: true
        })
    }

    public render(): JSX.Element {
        return (
            <MainWrapper>
                <Prompt
                    title='Enter the wallets password'
                    placeholder='Type here..'
                    visible={this.state.showPrompt}
                    onCancel={this.goToWallet}
                    onSubmit={this.goToWallet}
                />
                <QRCodeScanner
                    onRead={this.onRead}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.askCode}
                >
                    <Text style={styles.buttonText}>Next Screen</Text>
                </TouchableOpacity>
            </MainWrapper>
        )
    }
}
