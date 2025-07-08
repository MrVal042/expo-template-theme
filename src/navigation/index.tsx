export { default as LoadApp } from './LoadApp'
export * from './navigationRef' 

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { HeaderButton, Text } from '@react-navigation/elements'
// import {
//   createStaticNavigation,
//   StaticParamList,
// } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { Image } from 'react-native'
// import { Home, Profile, Settings, Updates, NotFound } from '@screens'
// import { Icon } from '@components'

// const HomeTabs = createBottomTabNavigator({
//   screens: {
//     Home: {
//       screen: Home,
//       options: {
//         title: 'Home',
//         tabBarIcon: ({ color, size }) => (
//           <Icon name='home-outline' size={size} color={color} />
//         ),
//       },
//     },
//     Search: {
//       screen: Updates,
//       options: {
//         tabBarIcon: ({ color, size }) => (
//           <Icon name='search-outline' size={size} color={color} />
//         ),
//       },
//     },
//     Bookings: {
//       screen: Updates,
//       options: {
//         tabBarIcon: ({ color, size }) => (
//           <Icon name='book-online' size={size} color={color} />
//         ),
//       },
//     },
//     Chat: {
//       screen: Updates,
//       options: {
//         tabBarIcon: ({ color, size }) => (
//           <Icon name='chat-bubble-outline' size={size} color={color} />
//         ),
//       },
//     },
//     More: {
//       screen: Updates,
//       options: {
//         tabBarIcon: ({ color, size }) => (
//           <Icon name='more' size={size} color={color} />
//         ),
//       },
//     },
//   },
// })

// const RootStack = createNativeStackNavigator({
//   screens: {
//     HomeTabs: {
//       screen: HomeTabs,
//       options: {
//         title: 'Home',
//         headerShown: false,
//       },
//     },
//     Profile: {
//       screen: Profile,
//       linking: {
//         path: ':user(@[a-zA-Z0-9-_]+)',
//         parse: {
//           user: (value) => value.replace(/^@/, ''),
//         },
//         stringify: {
//           user: (value) => `@${value}`,
//         },
//       },
//     },
//     Settings: {
//       screen: Settings,
//       options: ({ navigation }) => ({
//         presentation: 'modal',
//         headerRight: () => (
//           <HeaderButton onPress={navigation.goBack}>
//             <Text>Close</Text>
//           </HeaderButton>
//         ),
//       }),
//     },
//     NotFound: {
//       screen: NotFound,
//       options: {
//         title: '404',
//       },
//       linking: {
//         path: '*',
//       },
//     },
//   },
// })

// export const Navigation = createStaticNavigation(RootStack)

// type RootStackParamList = StaticParamList<typeof RootStack>

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootStackParamList {}
//   }
// }
