import Container from '@/components/Container'
import { View } from 'react-native'
import { useTheme, Text } from 'react-native-paper'

export default function TabTwoScreen() {
    const theme = useTheme()

    return (
        <Container>
            <View>
                <Text>Explore</Text>
            </View>
            <Text>This app includes example code to help you get started.</Text>
        </Container>
    )
}
