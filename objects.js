var playlist = {};
playlist[artistName] = new Array();
playlist[songTitle] = new Array();





function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { [artistName]: songTitle});
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
}
