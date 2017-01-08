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
    this.props.fetchVideos('Soylent');
  }

  videoSearch(term) {
    this.props.fetchVideos(term);
  }

  pickVideo = (index) => {
    this.props.selectVideo(index);
  }

  render() {
    const vidSearch = _.debounce((term) => {this.videoSearch(term)}, 1000)
    console.log('here is the root of the aud ref that will kick it all off', this.refs)
    return (
      <div ref="aud">
        <SearchBar onSearchTermChange={_.debounce((term) => {this.videoSearch(term)}, 500)}/>
        <div className="row">
          <VideoDetail video={this.props.video}/>
          <VideoList videos={this.props.videos} pickVideo={this.pickVideo}/>
        </div>
        <Link to="/visualizer" className="btn btn-primary btn-danger">Visualize</Link>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {video: state.videos.video, videos: state.videos.videos}
}

export default connect(mapStateToProps, {fetchVideos, selectVideo})(VideoIndex);
