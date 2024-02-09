const screenContainer = document.querySelector('.screen-container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');

const movieSelect = document.getElementById('movie-choices');

populateUI();

let ticketPrice = +movieSelect.value;
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
  }
  
  function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
  
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  
    const selectedSeatsCount = selectedSeats.length;
  
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    
    setMovieData(movieSelect.selectedIndex, movieSelect.value);
  }


function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  
    if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          seat.classList.add('selected');
        }
      });
    }
  
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  
    if (selectedMovieIndex !== null) {
      movieSelect.selectedIndex = selectedMovieIndex;
    }
  }

  
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

screenContainer.addEventListener('click',function(e) {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});

updateSelectedCount();


document.addEventListener('DOMContentLoaded', function() {
  const movieDropdown = document.getElementById('movie-choices');
  const screen = document.querySelector('.screen');

  movieDropdown.addEventListener('change', function() {
      const selectedMovie = movieDropdown.options[movieDropdown.selectedIndex];
      const price = selectedMovie.value;
      const movieName = selectedMovie.textContent.split(' ')[0]; 
      
      switch (movieName) {
          case 'HANUMAN':
            screen.style.backgroundImage = 'url("../images/movies/movieBanner1.jpeg")';
              break;
          case 'SALAAR':
            screen.style.backgroundImage = 'url("../images/movies/movieBanner2.jpg")';
              break;
          case 'CAPTAIN':
            screen.style.backgroundImage = 'url("../images/movies/movieBanner3.jpg")';
              break;
          case 'EAGLE':
            screen.style.backgroundImage = 'url("../images/movies/movieBanner4.jpg")';
              break;
          case 'AQUAMAN':
            screen.style.backgroundImage = 'url("../images/movies/movieBanner5.jpg")';
              break;
          case 'SPIDERMAN':
            screen.style.backgroundImage = 'url("../images/movies/movieBanner6.jpg")';
              break;
          case 'TITANIC':
            screen.style.backgroundImage = 'url("../images/movies/movieBanner7.jpg")';
              break;
          case 'FIGHTER':
            screen.style.backgroundImage = 'url("../images/movies/movieBanner8.jpg")';
              break;
          case '12th':
            screen.style.backgroundImage = 'url("../images/movies/movieBanner9.jpg")';
              break;
          case 'MANGALVAAR':
            screen.style.backgroundImage = 'url("../images/movies/movieBanner10.jpg")';
              break;
      }
  });
});
