// Read the movie data from the Movies.txt file
fetch('Movies.txt')
  .then(response => response.text())
  .then(data => {
    const upcomingMovieData = [];
    const lines = data.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('MoviesUpcoming\\')) {
        const parts = line.split('\\');
        const name = parts[1].replace(/.jpg/g, '');
        const image = `MoviesUpcoming/${parts[1]}`;
        upcomingMovieData.push({ name, image });
      }
    }

    // Define the upcoming movie card HTML as a template function
    const upcomingMovieCardTemplate = (movie) => `
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
    const upcomingContainer = document.getElementById('pills-sub');

    // Get the row2 element inside the container
    const row2 = upcomingContainer.querySelector('.row2');

    // Generate the HTML for each upcoming movie and append it to the row2 element
    upcomingMovieData.forEach(movie => {
      row2.innerHTML += upcomingMovieCardTemplate(movie);
    });
  })
  .catch(error => console.error('Error:', error));