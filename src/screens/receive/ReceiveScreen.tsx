import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import QRCode from 'react-native-qrcode'
import Prompt from 'rn-prompt'
import MainWrapper from '../../components/MainWrapper/MainWrapper'

const styles = StyleSheet.create({
  text: {
    color: 'yellow',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20
  }
})

export default class ReceiveScreen extends React.Component {
  constructor(props: object) {
    super(props)
    this.state = {
      showPrompt: true,
      amount: 0
    }
  }

  private onRead = (data) => {
    console.log(data)
  }

  private onSubmit = (value: string) => {
    this.setState({
      showPrompt: false,
      amount: value
    })
  }

  public render(): JSX.Element {
    return (
      <MainWrapper>
        <Text style={styles.text}>Receive</Text>

        <Prompt
          title='Enter the amount to send'
          placeholder='Type here..'
          visible={this.state.showPrompt}
          onCancel={this.onSubmit}
          onSubmit={this.onSubmit}
        />

        {!!this.state.amount &&
          <QRCode
            value={this.state.amount}
            size={200}
            bgColor='white'
            fgColor='black'
          />
        }
      </MainWrapper>
    )
  }
}
