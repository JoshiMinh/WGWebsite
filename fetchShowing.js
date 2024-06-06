// Read the movie data from the Movies.txt file
fetch('Movies.txt')
  .then(response => response.text())
  .then(data => {
    const movieData = [];
    const lines = data.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line !== '') {
        const parts = line.split(' - ');
        const movieInfo = parts[0].split('\\');
        const category = movieInfo[0];
        if (category === 'MoviesShowing') {
          const imageFileName = movieInfo[1];
          const movieTitle = imageFileName.replace(/.jpg/g, '');
          const youtubeLink = parts[1] || '';

          movieData.push({ category, movieTitle, imageFileName, youtubeLink });
        }
      }
    }

    // Define the movie card HTML as a template function
    const movieCardTemplate = (movie) => `
      <div class="col-lg-3 col-sm-6">
        <div class="card border-0" style="width: 15; margin: auto;">
          <img src="${movie.category}/${movie.imageFileName}" class="card-img-top" />
          <div class="card-body">
            <p class="card-text text-center">${movie.movieTitle}</p>
            ${movie.youtubeLink ? `<div>
              <a href="${movie.youtubeLink}" target="_blank" class="btn btn-primary">Xem Trailer</a>
            </div>` : ''}
          </div>
        </div>
      </div>
    `;

    // Get the container element
    const container = document.getElementById('showing-movies-container');

    // Generate the HTML for each movie and append it to the container
    movieData.forEach(movie => {
      container.innerHTML += movieCardTemplate(movie);
    });
  })
  .catch(error => console.error('Error:', error));