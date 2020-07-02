import { connect } from '@tarojs/redux';
const mapStateToProps = state => ({
  list:state.feeds.list
});
const mapDispatchToProps = dispatch => ({
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
);
