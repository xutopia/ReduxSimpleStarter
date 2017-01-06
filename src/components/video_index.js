import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchVideos} from '../actions/index';
import {Link} from 'react-router';
import {YOUTUBE_API_KEY} from '../config/youtube';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import YTSearch from 'youtube-api-search';




//create a new component, which should produce some HTML

class VideoIndex extends Component {

  componentWillMount() {
    this.props.fetchVideos('Taylor Swift');
    console.log('inside mount: ', this);
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

  render() {
    // const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 800)
    console.log('inside index: ', this);
    return (<div>
      <SearchBar />
      <VideoDetail video={this.props.video}/>
      <VideoList
        videos={this.props.videos}/>
    </div>);
  }
}

// onVideoSelect={selectedVideo => this.setState({video: selectedVideo})}

function mapStateToProps(state) {
  console.log('inside the map state to props', state);
  return {videos: state.videos.videos, video: state.videos.videos[0]}
}

export default connect(mapStateToProps, {fetchVideos})(VideoIndex);
