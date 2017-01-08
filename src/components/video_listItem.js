import React from 'react';
import {selectVideo} from '../actions/index';


const VideoListItem = ({video, index, pickVideo}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => pickVideo(index)} className="list-group-item">
      <div className="video-list media">
        <div className="media-right">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
