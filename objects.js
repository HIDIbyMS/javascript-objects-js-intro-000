var playlist = {
  artistName: 'Alison',
  songTitle: 'Slowdive'
};


function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { ['Sometimes']: 'My Bloody Valentine'})
}

   
