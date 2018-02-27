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

export default class LoginScreen extends React.Component {
    private importWallet = (): void => {
        this.props.navigation.navigate('ImportWallet')
    }

    private createWallet = (): void => {
        this.props.navigation.navigate('CreateWallet')
    }

    public render(): JSX.Element {
        return (
            <MainWrapper>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.importWallet}
                >
                    <Text style={styles.buttonText}>Import Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.createWallet}
                >
                    <Text style={styles.buttonText}>Create New Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.createWallet}
                >
                    <Text style={styles.buttonText}>Recover Wallet</Text>
                </TouchableOpacity>
            </MainWrapper>
        )
    }
}
