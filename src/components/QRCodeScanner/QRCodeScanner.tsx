import React from 'react'
import { StyleSheet, Text } from 'react-native'
import MainWrapper from '../../components/MainWrapper/MainWrapper'

import QRCodeScanner from 'react-native-qrcode-scanner'

const styles = StyleSheet.create({

})

export default class QRCodeScannerComp extends React.Component {
    private onRead = (data) => {
        console.log(data)
    }

    public render(): JSX.Element {
        return (
            <MainWrapper>
                <QRCodeScanner
                    onRead={this.onRead}
                />
            </MainWrapper>
        )
    }
}
