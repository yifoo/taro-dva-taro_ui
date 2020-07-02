import { View } from '@tarojs/components'
import { Component } from '@tarojs/taro'
import './more.scss'



export default class More extends Component {
  config = {
    navigationBarTitleText: '个人中心'
  }
  render () {
    return (
      <View className='more'>
        我的
      </View>
    )
  }
}

