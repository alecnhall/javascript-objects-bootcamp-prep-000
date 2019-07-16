var playlist = {artist:'Song Title'}

function updatePlaylist(object, value, key){
  object.value = key;
  return object;
}

function removeFromPlaylist(object, key){
  delete object.key;
  return object;
}
