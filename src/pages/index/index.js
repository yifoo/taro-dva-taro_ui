import { ScrollView, View } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import './index.scss';
import injector from './injector';
@injector
class Discovery extends Component {
  config = {
    navigationBarTitleText: '发现'
  }
  constructor() {
    super(...arguments)
    this.state = {
      currentNavtab: 0,
      feed:[
        1,2,3,4
      ],
    }
  }
  componentDidMount(){
    console.log('this.props: ', this.props);
  }
  switchTab(index,e) {
    this.setState({
      currentNavtab: index
    })
  }
  render () {
    return (
      <View>
        <ScrollView scroll-y className='container discovery withtab'>
          <View className='ctnt0' hidden={this.state.currentNavtab==0 ? false : true}>
              {this.state.feed.map((item, index)=>{
                return (
                  <View>123123我的</View>
                )
              })}
          </View>
        </ScrollView>
      </View>
    )
  }
}
export default Discovery

