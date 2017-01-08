import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchVideos, selectVideo} from '../actions/index';
import {Link} from 'react-router';
import {YOUTUBE_API_KEY} from '../config/youtube';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import YTSearch from 'youtube-api-search';




//create a new component, which should produce some HTML

class VideoIndex extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  componentWillMount() {
    this.props.fetchVideos('Taylor Swift');
  }

  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     videos: [],
  //     video: null
  //   };
  //
  //   this.videoSearch('Soylent');
  // }

  // videoSearch(term) {
  //   YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
  //     this.setState({
  //       videos: videos,
  //       video: videos[0]
  //     })
  //   });
  // }

  componentWillReceiveProps(nextProps){
    console.log('current props: ', this.props, ' next props: ', nextProps)
  }

  componentWillUpdate(nextProps) {
    console.log('COMPONENT WILL UPDATE')
  }

  pickVideo = (index) => {
    this.props.selectVideo(index);
  }

  render() {
    // this.props.fetchVideos('Taylor Swift');
    const vidSearch = _.debounce((term) => {this.videoSearch(term)}, 800)
    console.log('inside the main, changing state, should see twice: ', this.props);
    return (<div>
      <SearchBar />
      <div className="row">
        <VideoDetail video={this.props.video}/>
        <VideoList videos={this.props.videos} pickVideo={this.pickVideo}/>
      </div>
      <Link to="/visualizer" className="btn btn-primary btn-danger">Visualize</Link>
    </div>);
  }
}


function mapStateToProps(state) {
  return {video: state.videos.video, videos: state.videos.videos}
}

export default connect(mapStateToProps, {fetchVideos, selectVideo})(VideoIndex);
