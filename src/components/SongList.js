import React, { Component } from 'react';
import Song from './Song';

class SongList extends Component {

  render() {

    const songNodes = this.props.songs.map( (song, index) => {

      return (
        <Song title={song.title.label} key={song.id} chartPosition={index+1} image={song["im:image"][0].label}>
          {/* { song.title.label } */}
        </Song>
      )

    })

    return <div className="SongList"> {songNodes} </div>
  }
}

export default SongList;
