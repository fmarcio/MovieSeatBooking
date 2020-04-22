//SELECT ELEMENTS
//Select seats container
const seatsContainer = document.querySelector('.seats-container');
//Select only available seats
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
//Select seats count and total price
const count = document.getElementById('count');
const total = document.getElementById('total');
//Select movie dropdown
const movieTitle = document.getElementById('movie');


//Get the value of the tickets and convert it to number (+)
let ticketPrice = +movieTitle.value;

//FUNCTIONS
//Update seats count and total price
function updateSeatsCount() {
    //grab selected seats
    const clickedSeats = document.querySelectorAll('.row .seat.selected');
    const clickedSeatsCount = clickedSeats.length;

    //Update count with clicked seats
    count.innerText = clickedSeatsCount;

    //Update total price according to the seats and movie
    total.innerText = clickedSeatsCount * ticketPrice;
}

//EVENT LISTENERS
//Seat click event
seatsContainer.addEventListener('click', function(e) {
    const selectedSeat = e.target;

    if (selectedSeat.classList.contains('seat') && 
    !selectedSeat.classList.contains('occupied')) {

        selectedSeat.classList.toggle('selected');
        updateSeatsCount();
    };
});

//Movie select event (change ticket price according to the movie)
movieTitle.addEventListener('change', function(e) {
    ticketPrice = +e.target.value;
    updateSeatsCount();
});