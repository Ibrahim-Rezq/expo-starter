import { View, ScrollView } from 'react-native'
import { useTheme, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function TabTwoScreen() {
    const theme = useTheme()

    return (
        <ScrollView style={{ backgroundColor: theme.colors.background }}>
            <SafeAreaView>
                <View>
                    <Text>Explore</Text>
                </View>
                <Text>
                    This app includes example code to help you get started.
                </Text>
            </SafeAreaView>
        </ScrollView>
    )
}
