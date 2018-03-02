// import ElectraJs, { CoinMarketCapCurrency } from 'electra-js'
import numeral from 'numeral'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import MainWrapper from '../../components/MainWrapper/MainWrapper'

const styles = StyleSheet.create({
  balanceInEca: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 36,
    fontWeight: '700'
  },
  balanceInFiat: {
    color: 'rgba(255, 255, 255, .8)',
    fontSize: 21,
    fontWeight: '300'
  },
  balanceLabel: {
    color: 'rgba(255, 255, 255, .6)',
    fontSize: 18,
    fontWeight: '500'
  },
  transactions: {
    color: 'yellow',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20
  },
  transaction: {
    color: 'yellow',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 5
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
  currency: string
  balance: number
  currentPrice: number
}

export default class WalletScreen extends React.Component<{}, State> {
  // private readonly electraJs: ElectraJs

  public constructor(props: object) {
    super(props)

    // this.electraJs = new ElectraJs()
    this.state = {
      balance: 1122300.724543798,
      currentPrice: 0.001093,
      currency: 'USD'
    }
  }

  private goToTransactions = () => {
    this.props.navigation.navigate('TransactionsList')
  }

  private goToPayment = () => {
    this.props.navigation.navigate('Send')
  }

  private goToReceive = () => {
    this.props.navigation.navigate('Receive')
  }

  // public componentDidMount() {
  // this.electraJs.webServices.getCurrentPriceIn(this.state.currency)
  //   .then((currentPrice: number) => this.setState({
  //     balance: 1122300.724543798,
  //     currentPrice
  //   }))
  // }

  public render(): JSX.Element {
    return (
      <MainWrapper>
        <Text style={styles.balanceLabel}>
          YOUR TOTAL BALANCE
          </Text>
        <Text style={styles.balanceInEca}>
          {numeral(this.state.balance).format('0,0.000')} ECA
          </Text>
        <Text style={styles.balanceInFiat}>
          {numeral(this.state.balance * this.state.currentPrice).format('0,0.00')}
          {this.state.currency}
        </Text>

        <Text style={styles.transactions}>
          TRANSACTIONS:
        </Text>
        <Text style={styles.transaction}>
          Received 100 ECA from flscndkbcdjkscne1h
        </Text>
        <Text style={styles.transaction}>
          Sent 100 ECA to flscndkbcdjkscne1h
        </Text>
        <Text style={styles.transaction}>
          Sent 100 ECA to flscndkbcdjkscne1h
        </Text>
        <Text style={styles.transaction}>
          Sent 100 ECA to flscndkbcdjkscne1h
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.goToTransactions}
        >
          <Text style={styles.buttonText}>Transactions List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.goToPayment}
        >
          <Text style={styles.buttonText}>Payment Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.goToReceive}
        >
          <Text style={styles.buttonText}>Receive Coins</Text>
        </TouchableOpacity>
      </MainWrapper>
    )
  }
}
