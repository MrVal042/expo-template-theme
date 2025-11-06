import { height, width } from '@constants'
import { ImageBackground } from 'expo-image'
import React from 'react'
import { StyleSheet } from 'react-native'
import { dummyAvatar } from '@data'

type IProps = {
  children: React.ReactNode
}

export default function ImageBg({ children }: IProps) {
  return (
    <ImageBackground
      accessibilityHint='Background image for the auth or form screen'
      accessibilityLabel='Login Background'
      imageStyle={{ opacity: 0.1 }}
      source={{ uri: dummyAvatar }}
      accessibilityRole='image'
      contentFit='contain'
      style={styles.BgImg}
      accessible={true}
      blurRadius={10}
    >
      {children}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  BgImg: {
    width,
    height: height * 0.99,
    paddingHorizontal: 20,
    gap: 20,
    flex: 1,
  },
})
