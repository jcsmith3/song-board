import axios from 'axios'
const lastFmKey = 'a33c0a5a6ed97d72bd9e8eb296887099'

const getSongData = query => {

  const data = axios.get(`https://www.songsterr.com/a/ra/songs.json?pattern=${ query }`)
  .then( json => {
    const songData = json.data[0]

    return {
      artist: songData.artist.name,
      title: songData.title,
      tabsUrl: `http://www.songsterr.com/a/wa/song?id=${songData.id}`
    }
  })

  return data
}

const getSongDetails = query => {
    const data = axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${lastFmKey}&artist=${query.artist}&track=${query.title}&format=json`).then( data => {
      const track = data.data.track
      // console.log( track )
      return {
        id: track.album.mbid,
        album: {
          image: track.album.image,
          title: track.album.title,
          url: track.album.url
        },
        artist: { name: track.artist.name, url: track.artist.url },
        name: track.name,
        tags: [ ...track.toptags.tag ],
        url: track.url,
        info: {
          date: track.wiki.published,
          summary: track.wiki.summary
        }
      }
})
    return data
}

export {
  getSongData,
  getSongDetails
}