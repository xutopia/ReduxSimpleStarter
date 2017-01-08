import React from 'react';
import VideoListItem from './video_listItem';

const VideoList = (props) => {
  const videoItems = props.videos.map((video, index) => {
    return (
      <VideoListItem
        pickVideo={props.pickVideo}
        index={index}
        key={index}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList;
