import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'
import Taro, { Component } from '@tarojs/taro'
import dva from './dva'
import models from './model'
import Index from './pages/index'
import action from './utils/action'


const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    dispatch(action("sys/error", e));
  },
});
const store = dvaApp.getStore();

class App extends Component {

  config = {
    pages: [
      'pages/index',
      'pages/more',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0068C4',
      navigationBarTitleText: 'taro知乎',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true
    },
    tabBar: {
      color: "#626567",
      selectedColor: "#2A8CE5",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "pages/index",
        text: "发现",
        iconPath: "./asset/images/discovery.png",
        selectedIconPath: "./asset/images/discovery_focus.png"
      },
        {
          pagePath: "pages/more/more",
          text: "我的",
          iconPath: "./asset/images/burger.png",
          selectedIconPath: "./asset/images/burger_focus.png"
        }]
    }
  }

  componentDidMount() {
    dvaApp.dispatch({type: 'sys/test'})
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentCatchError() {
  }

  render() {
    return (<Provider store={store}>
      <Index/>
    </Provider>);
  }
}

Taro.render(<App/>, document.getElementById('app'))
