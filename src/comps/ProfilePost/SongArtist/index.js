import React from 'react';


const SongArtist = ({songArtist}) => {
    return<p style={{fontSize:'12px'}}>By {songArtist}</p>
}

SongArtist.defaultProps = {
    songArist:"Artist Name"
}

export default SongArtist;