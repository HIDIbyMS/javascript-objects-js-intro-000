var playlist = {
  artistName: 'Phil Ochs',
  songTitle: 'My Bloody Valentine'
};


function updatePlaylist( [playlist], artistName, songTitle) {
  Object.assign({}, playlist, { [artistName]: songTitle});
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
}
