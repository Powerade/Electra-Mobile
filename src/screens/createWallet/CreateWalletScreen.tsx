import ElectraJs from 'electra-js'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainWrapper from '../../components/MainWrapper/MainWrapper'

import CryptoJS from 'crypto-js'
import Prompt from 'rn-prompt'

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
    }
})

export interface State {
    mnemonic: string
}

export default class CreateWalletScreen extends React.Component<{}, State> {
    private hashMnemonic = (mnemonic: string): string =>
        CryptoJS.SHA256(mnemonic).toString(CryptoJS.enc.Hex)

    private electraJS: ElectraJs

    public constructor(props: object) {
        super(props)
        this.state = {
            mnemonic: ''
        }
        this.electraJS = new ElectraJs()
    }

    public componentDidMount(): void {
        this.electraJS.wallet.generate()
            .then(() => {
                this.setState({ mnemonic: this.electraJS.wallet.MNEMONIC })
            })
    }

    public render(): JSX.Element {
        return (
            <MainWrapper>
                <View style={styles.container}>
                    {!!this.state.mnemonic ?
                        <View>
                            <Text style={styles.warning}>
                                Your wallet mnemonic is </Text>
                            <Text style={styles.mnemonic}>{this.state.mnemonic}</Text>
                            <Text style={styles.warning}>Please store it safely</Text>
                        </View> :
                        <Text style={styles.warning}>Generating Wallet</Text>
                    }
                </View>
            </MainWrapper>
        )
    }
}
