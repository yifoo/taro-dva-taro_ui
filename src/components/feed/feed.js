import { View } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import './feed.scss'

export default class Feed extends Component {
  navigateTo(url) {
    Taro.navigateTo({url:url})
  }
  render() {
    return (
      <View className='feed-item'>
        订阅
      </View>
    )
  }
}
