var playlist = {
  artistName: 'Phil Ochs',
  songTitle: 'My Bloody Valentine'
};


function updatePlaylist(obj, key, value) {
  // Object.assign({}, playlist, { [artistName]: songTitle});
  obj[key] = value
  return obj;
}

function removeFromPlaylist( [playlist], artistName){
  delete playlist.artistName;
  return playlist;
}
