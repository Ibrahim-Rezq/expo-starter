import { Tabs } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'

import { HapticTab } from '@/components/HapticTab'
import { IconSymbol } from '@/components/ui/IconSymbol'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { useTheme } from 'react-native-paper'

export default function TabLayout() {
    const theme = useTheme()

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: theme.colors.primary,
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarActiveBackgroundColor: theme.colors.background,
                tabBarInactiveBackgroundColor: theme.colors.background,
                tabBarStyle: Platform.select({
                    ios: {
                        // Use a transparent background on iOS to show the blur effect
                        position: 'absolute',
                    },
                    default: {
                        borderTop: `1px solid ${theme.colors.secondaryContainer}`,
                    },
                }),
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <IconSymbol size={28} name='house.fill' color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='explore'
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ color }) => (
                        <IconSymbol
                            size={28}
                            name='paperplane.fill'
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}
