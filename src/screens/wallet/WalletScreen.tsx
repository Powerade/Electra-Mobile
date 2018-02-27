import ElectraJs, { CoinMarketCapCurrency } from 'electra-js'
import numeral from 'numeral'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
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
  }
})

export interface State {
  currency: CoinMarketCapCurrency
  balance: number
  currentPrice: number
}

export default class WalletScreen extends React.Component<{}, State> {
  private readonly electraJs: ElectraJs

  public constructor(props: object) {
    super(props)

    this.electraJs = new ElectraJs()
    this.state = {
      balance: 0,
      currency: 'USD',
      currentPrice: 0
    }
  }

  public componentDidMount() {
    this.electraJs.webServices.getCurrentPriceIn(this.state.currency)
      .then((currentPrice: number) => this.setState({
        balance: 1122300.724543798,
        currentPrice
      }))
  }

  public render(): JSX.Element {
    return (
      <MainWrapper>
        <Text style={styles.balanceLabel}>
          YOUR TOTAL BALANCE
          </Text>
        <Text style={styles.balanceInEca}>
          {this.state.balance === 0
            ? '...'
            : numeral(this.state.balance).format('0,0.000')
          } ECA
          </Text>
        <Text style={styles.balanceInFiat}>
          {this.state.currentPrice === 0
            ? '...'
            : numeral(this.state.balance * this.state.currentPrice).format('0,0.00')
          }
          {this.state.currency}
        </Text>
      </MainWrapper>
    )
  }
}
