import React from 'react'
import { StyleSheet, Text } from 'react-native'
import MainWrapper from '../../components/MainWrapper/MainWrapper'

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

export default class RecoverWalletScreen extends React.Component<{}, State> {
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

        setTimeout(() => this.props.navigation.navigate('LocalEncryption'), 2000)
    }

    public render(): JSX.Element {
        return (
            <MainWrapper>
                <Prompt
                    title='Input wallets mnemonic'
                    placeholder='Type here..'
                    visible={this.state.promptVisible}
                    onCancel={null}
                    onSubmit={this.submitMnemonic}
                />
                {!!this.state.mnemonic &&
                    <Text style={styles.mnemonic}>Then we generate the wallet with the mnemonic</Text>
                }
            </MainWrapper>
        )
    }
}
