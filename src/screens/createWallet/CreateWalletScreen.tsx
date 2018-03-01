// import ElectraJs from 'electra-js'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MainWrapper from '../../components/MainWrapper/MainWrapper'

// import CryptoJS from 'crypto-js'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20
    },
    mnemonic: {
        textAlign: 'center',
        color: 'yellow',
        fontSize: 18,
        fontWeight: 'bold'
    },
    warning: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14
    },
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

export interface State {
    mnemonic: string
}

export default class CreateWalletScreen extends React.Component<{}, State> {
    // private hashMnemonic = (mnemonic: string): string =>
    //     CryptoJS.SHA256(mnemonic).toString(CryptoJS.enc.Hex)

    // private electraJS: ElectraJs

    public constructor(props: object) {
        super(props)
        // this.state = {
        //     mnemonic: ''
        // }
        // this.electraJS = new ElectraJs()
    }

    // public componentDidMount(): void {
    //     this.electraJS.wallet.generate()
    //         .then(() => {
    //             this.setState({ mnemonic: this.electraJS.wallet.MNEMONIC })
    //         })
    // }

    private goToWallet = () => {
        this.props.navigation.navigate('Wallet')
    }

    public render(): JSX.Element {
        return (
            <MainWrapper>
                <View style={styles.container}>
                    <Text style={styles.warning}>
                        Your wallet mnemonic is </Text>
                    <Text style={styles.mnemonic}>mnemonic here</Text>
                    <Text style={styles.warning}>Please store it safely</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.goToWallet}
                >
                    <Text style={styles.buttonText}>Next Screen</Text>
                </TouchableOpacity>
            </MainWrapper >
        )
    }
}
