var playlist = {
  artistName: 'Phil Ochs',
  songTitle: 'My Bloody Valentine'
};


function updatePlaylist(obj, key, value) {
  obj[key] = value
  return obj;
}

function removeFromPlaylist(obj, key){
  delete playlist.artistName;
  return obj;
}
