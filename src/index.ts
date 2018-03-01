import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'

import QRCodeScanner from './components/QRCodeScanner/QRCodeScanner'
import CreateWalletScreen from './screens/createWallet/CreateWalletScreen'
import ImportWalletScreen from './screens/importWallet/ImportWalletScreen'
import LocalEncryptionScreen from './screens/localEncryption/LocalEncryptionScreen'
import LoginScreen from './screens/login/LoginScreen'
import RecoverWalletScreen from './screens/recoverWallet/RecoverWalletScreen'
import TransactionsListScreen from './screens/transactions/TransactionsListScreen'
import WalletScreen from './screens/wallet/WalletScreen'
// import ReceiveScreen from './screens/receive/ReceiveScreen'
// import SendScreen from './screens/send/SendScreen'
// import SettingsScreen from './screens/settings/SettingsScreen'

// const tabNavigator = TabNavigator(
//   {
//     Wallet: { screen: WalletScreen },
//     Receive: { screen: ReceiveScreen },
//     Send: { screen: SendScreen },
//     Settings: { screen: SettingsScreen }
//   }
// )

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen
  },
  ImportWallet: {
    screen: ImportWalletScreen
  },
  CreateWallet: {
    screen: CreateWalletScreen
  },
  QRCodeScanner: {
    screen: QRCodeScanner
  },
  RecoverWallet: {
    screen: RecoverWalletScreen
  },
  LocalEncryption: {
    screen: LocalEncryptionScreen
  },
  Wallet: {
    screen: WalletScreen
  },
  TransactionsList: {
    screen: TransactionsListScreen
  }
},
  { headerMode: 'none' }
)

AppRegistry.registerComponent('electramobile', () => RootNavigator)
