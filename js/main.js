
//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  
  const url = 'https://api.codetabs.com/v1/proxy?quest=https://owen-wilson-wow-api.herokuapp.com/wows/random'
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#movie').innerText = `The movie is "${data[0].movie}"`
        document.querySelector('#year').innerText = `The movie was released in ${data[0].release_date}`
        document.querySelector('#character').innerText = `In the movie, Owen Wilson plays the character "${data[0].character}"`
        document.querySelector('#timestamp').innerText = `The Timestamp is ${data[0].timestamp}`
        document.querySelector('#fullLine').innerText = `The Full line is '${data[0].full_line}'`

        let video = document.querySelector('video');
        let source = document.querySelector('#changeMe');

        source.setAttribute('src', data[0].video["720p"]);
        video.load();

        // document.querySelector('source').src = data[0].video["720p"]
        // console.log(data[0].video["720p"])

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
getFetch()
