//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  let date = document.querySelector('input').value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=w0v6ed4P1aSthvrdcYBWPgc9CpZVfW4w0rvug9eC&date=${date}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('.title').innerText = data.title;

        if (data.media_type === 'image') {
          document.querySelector('.potd').src = data.hdurl;
          document.querySelector('iframe').classList.add('hidden');
          document.querySelector('.potd').classList.remove('hidden');
        } else if (data.media_type === 'video') {
          document.querySelector('iframe').src = data.url;
          document.querySelector('iframe').classList.remove('hidden');
          document.querySelector('.potd').classList.add('hidden');
        }
        document.querySelector('.description').innerText = data.explanation;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}



