fetch('Movies.txt')
  .then(response => response.text())
  .then(data => {
    const movieData = data.split('\n').map(line => {
      const [info, youtubeLink = ''] = line.trim().split(' - ');
      const [category, imageFileName] = info.split('\\');
      if (category === 'MoviesUpcoming') {
        const movieTitle = imageFileName.replace(/.jpg/g, '');
        return { category, movieTitle, imageFileName, youtubeLink };
      }
    }).filter(Boolean);

    const movieCardTemplate = (movie) => `
      <div class="col-lg-3 col-sm-6">
        <div class="card border-0" style="width: 15; margin: auto;">
          ${movie.youtubeLink ? `<a href="${movie.youtubeLink}" target="_blank">
            <img src="${movie.category}/${movie.imageFileName}" class="card-img-top"/>
          </a>` : `<img src="${movie.category}/${movie.imageFileName}" class="card-img-top"/>`}
          <div class="card-body">
            <p class="card-text text-center">${movie.movieTitle}</p>
          </div>
        </div>
      </div>
    `;

    const container = document.getElementById('upcoming-movies-container');
    container.innerHTML = movieData.map(movieCardTemplate).join('');
  })
  .catch(error => console.error('Error:', error));