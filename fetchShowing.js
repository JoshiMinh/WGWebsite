// Read the movie data from the Movies.txt file
fetch('Movies.txt')
  .then(response => response.text())
  .then(data => {
    const movieData = [];
    const lines = data.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('MoviesShowing\\')) {
        const parts = line.split('\\');
        const name = parts[1].replace(/.jpg/g, '');
        const image = `MoviesShowing/${parts[1]}`;
        movieData.push({ name, image });
      }
    }

    // Define the movie card HTML as a template function
    const movieCardTemplate = (movie) => `
      <div class="col-lg-3 col-sm-6">
        <div class="card border-0" style="width: 15; margin: auto;">
          <img src="${movie.image}" class="card-img-top" />
          <div class="card-body">
            <p class="card-text">${movie.name}</p>
            <div>
              <button class="btn btn-primary">Đặt vé</button>
            </div>
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