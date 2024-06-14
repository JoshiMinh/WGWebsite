fetch('Movies.txt')
  .then(response => response.text())
  .then(data => {
    const movieData = data.split('\n').map((line, index) => {
      const [info] = line.trim().split(' - ');
      const [category, imageFileName] = info.split('\\');
      if (category === 'MoviesUpcoming') {
        const movieTitle = imageFileName.replace(/.jpg/g, '');
        return { category, movieTitle, imageFileName, lineNumber: index + 1 };
      }
    }).filter(Boolean);

    const movieCardTemplate = (movie) => `
      <div class="col-lg-3 col-sm-6">
        <div class="card border-0" style="width: 15; margin: auto;">
          <a href="MovieInfo.html" onClick="storeMovieInfo(${movie.lineNumber})">
            <img src="${movie.category}/${movie.imageFileName}" class="card-img-top" />
          </a>
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

function storeMovieInfo(lineNumber) {
  localStorage.setItem('clickedMovieLineNumber', lineNumber);
}