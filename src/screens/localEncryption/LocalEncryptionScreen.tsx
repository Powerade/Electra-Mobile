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
    code: {
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
    code: string,
    promptVisible: boolean
}

export default class CreateWalletScreen extends React.Component<{}, State> {
    private getLocalKey = (code: string): string =>
        CryptoJS.SHA256(code).toString(CryptoJS.enc.Hex)

    public constructor(props: object) {
        super(props)
        this.state = {
            promptVisible: true,
            code: ''
        }
    }

    private submitCode = (value: string) => {
        this.setState({
            promptVisible: false,
            code: this.getLocalKey(value)
        })
    }

    public render(): JSX.Element {
        return (
            <MainWrapper>
                <Prompt
                    title='Enter a 6 digit code'
                    placeholder='Type here..'
                    visible={this.state.promptVisible}
                    onCancel={null}
                    onSubmit={this.submitCode}
                />
                {!!this.state.code &&
                    <View style={styles.container}>
                        <Text style={styles.code}>Your code is {this.state.code}.</Text>
                        <Text style={styles.warning}>We then use the code to lock the wallet.</Text>
                    </View>
                }
            </MainWrapper>
        )
    }
}
