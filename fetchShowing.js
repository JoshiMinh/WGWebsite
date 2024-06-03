 // Define the movie card HTML as a template
 const movieCardTemplate = `
   <div class="col-lg-3 col-sm-6">
     <div class="card border-0" style="width: 15; margin: auto;">
       <img src="MoviesShowing/Abigail.jpg" class="card-img-top" />
       <div class="card-body">
         <p class="card-text">Abigail</p>
         <div>
           <button class="btn btn-primary">Đặt vé</button>
         </div>
       </div>
     </div>
   </div>
 `;

 // Get the container element
 const container = document.getElementById('showing-movies-container');

 // Insert the movie card template 10 times
 for (let i = 0; i < 10; i++) {
   container.innerHTML += movieCardTemplate;
 }