import React from 'react'
import { View, Image } from 'react-native'
import { useTheme } from '@/Hooks'

interface Props {
  height?: number | string
  width?: number | string
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center'
}

const Brand = ({ height, width, mode }: Props) => {
  const { Layout } = useTheme()

  return (
    <View style={{ height, width }}>
      <Image
        style={Layout.fullSize}
        source={require('@/Assets/Images/diezen.png')}
        resizeMode={mode}
      />
    </View>
  )
}

Brand.defaultProps = {
  height: 200,
  mode: 'contain',
  width: 200,
}

export default Brand
