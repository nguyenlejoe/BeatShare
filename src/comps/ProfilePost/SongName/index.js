import React from 'react';


const SongName = ({songName}) => {
    return<p style={{fontSize:'12px'}}>{songName}</p>
}

SongName.defaultProps = {
    songName:"Song Name"
}

export default SongName;