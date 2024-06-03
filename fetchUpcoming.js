// Define the upcoming movie card HTML as a template
const upcomingMovieCardTemplate = `
  <div class="col-lg-3 col-sm-6">
    <div class="card border-0" style="width: 15; margin: auto;">
      <img src="MoviesUpcoming/Anh Hùng Bàn Phím.jpg" class="card-img-top" />
      <div class="card-body">
        <p class="card-text">Anh Hùng Bàn Phím</p>
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

// Insert the upcoming movie card template 10 times
for (let i = 0; i < 10; i++) {
  row2.innerHTML += upcomingMovieCardTemplate;
}