import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    container: {
        flex: 1
    }
})

export default class MainWrapper extends React.Component {
    public render(): JSX.Element {
        const { children } = this.props
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='#590c76'
                    barStyle='light-content'
                />
                <LinearGradient
                    colors={['#9619b3', '#6f1294']}
                    end={{ x: 1, y: 0 }}
                    start={{ x: 0, y: 0 }}
                    style={styles.background}
                >
                    {children}
                </LinearGradient>
            </View>
        )
    }
}
