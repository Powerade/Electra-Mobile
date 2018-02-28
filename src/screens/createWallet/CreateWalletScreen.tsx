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
        color: 'white',
        fontSize: 18
    },
    warning: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14
    }
})

export interface State {
    mnemonic: string,
    promptVisible: boolean
}

export default class CreateWalletScreen extends React.Component<{}, State> {
    private hashMnemonic = (mnemonic: string): string =>
        CryptoJS.SHA256(mnemonic).toString(CryptoJS.enc.Hex)

    public constructor(props: object) {
        super(props)
        this.state = {
            promptVisible: true,
            mnemonic: ''
        }
    }

    private submitMnemonic = (value: string) => {
        this.setState({
            promptVisible: false,
            mnemonic: value
        })
    }

    public render(): JSX.Element {
        return (
            <MainWrapper>
                <Prompt
                    title='Input a mnemonic'
                    placeholder='Type here..'
                    visible={this.state.promptVisible}
                    onCancel={null}
                    onSubmit={this.submitMnemonic}
                />
                {!!this.state.mnemonic &&
                    <View style={styles.container}>
                        <Text style={styles.mnemonic}>Your mnemonic is {this.state.mnemonic}.</Text>
                        <Text style={styles.warning}>
                            Please save it, it won't be shown again and
                            you will need it to recover your wallet
                        </Text>
                    </View>
                }
            </MainWrapper>
        )
    }
}
