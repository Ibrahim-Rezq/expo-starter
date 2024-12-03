import React, { PropsWithChildren } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Container({ children, ...props }: PropsWithChildren) {
    const theme = useTheme()
    return (
        <ScrollView style={{ backgroundColor: theme.colors.background }}>
            {/* @ts-ignore */}
            <SafeAreaView style={{ height: '100vh' }}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {children}
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})
