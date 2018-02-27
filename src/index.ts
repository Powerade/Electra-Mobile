import { AppRegistry } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'

import QRCodeScanner from './components/QRCodeScanner/QRCodeScanner'
import CreateWalletScreen from './screens/createWallet/CreateWalletScreen'
import ImportWalletScreen from './screens/importWallet/ImportWalletScreen'
import LoginScreen from './screens/login/LoginScreen'
import ReceiveScreen from './screens/receive/ReceiveScreen'
import SendScreen from './screens/send/SendScreen'
import SettingsScreen from './screens/settings/SettingsScreen'
import WalletScreen from './screens/wallet/WalletScreen'

const tabNavigator = TabNavigator(
  {
    Wallet: { screen: WalletScreen },
    Receive: { screen: ReceiveScreen },
    Send: { screen: SendScreen },
    Settings: { screen: SettingsScreen }
  }
)

const RootNavigator = StackNavigator({
  QRCodeScanner: {
    screen: QRCodeScanner
  },
  ImportWallet: {
    screen: ImportWalletScreen
  },
  CreateWallet: {
    screen: CreateWalletScreen
  },
  Login: {
    screen: LoginScreen
  }
},
  { headerMode: 'none' }
)

AppRegistry.registerComponent('electramobile', () => QRCodeScanner)
