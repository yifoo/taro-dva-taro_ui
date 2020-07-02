import { ScrollView, View } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import { AtButton, AtInput } from 'taro-ui';
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
      feed: [
        1, 2, 3, 4
      ],
      value: ''
    }
  }
  componentDidMount() {
    console.log('this.props: ', this.props);
  }
  switchTab(index, e) {
    this.setState({
      currentNavtab: index
    })
  }
  handleChange() { }
  render() {
    return (
      <View>
        <ScrollView scroll-y className='container discovery withtab'>
          <View className='ctnt0' hidden={this.state.currentNavtab == 0 ? false : true}>
            {this.state.feed.map((item, index) => {
              return (
                <View key={index}>
                  <AtButton>按钮{item}</AtButton>
                  <AtInput
                    name={index}
                    title='标准五个字'
                    type='text'
                    placeholder='标准五个字'
                    onChange={this.handleChange.bind(this)}
                  />
                </View>
              )
            })}
          </View>
        </ScrollView>
      </View>
    )
  }
}
export default Discovery

