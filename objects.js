var playlist = {
  artistName: 'Phil Ochs',
  songTitle: 'My Bloody Valentine'
};


function updatePlaylist(obj, key, value) {
  obj[key] = value;
  return obj;
}

function removeFromPlaylist(obj, artistName){
  delete playlist.artistName;
  playlist;
}
