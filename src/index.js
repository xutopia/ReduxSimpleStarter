import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import APIkey from './config/youtube';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


//create a new component, which should produce some HTML

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      video: null
    };

    this.videoSearch('Taylor Swift');
  }

  videoSearch(term) {
    YTSearch({key: window.YOUTUBE_API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        video: videos[0]
      })
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 800)
    return (<div>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={this.state.video}/>
      <VideoList
        onVideoSelect={selectedVideo => this.setState({video: selectedVideo})}
        videos={this.state.videos}/>
    </div>);
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
