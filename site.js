{/* <p class="footer">These ${cardEntry.length} Stocks were added recently.</p> */ }
// $(document).ready(function () {
//     $('.card').mouseover(function () {
//         $('#pp1').css({

//                 "color": "#ffff",
//                 "background": "blue",
//             });
//         // "box-shadow": "10px 10px lightblue"
//     });
//     $('.card').mouseout(function () {
//         $('#pp1').css({

//                 "color": "black",
//                 "background": "#ffff"
//             });

//     });
// });
const data = [
    {
        title: "Tesla",
        rating: "Calculate price target",
        image: "http://13.233.15.248/HTML/investcalcs-html/assets/images/tesla.png"
    },
    {
        title: "Apple",
        rating: "Calculate price target",
        image: "http://13.233.15.248/HTML/investcalcs-html/assets/images/apple.png"
    },
    {
        title: "Google",
        rating: "Calculate price target",
        image: "http://13.233.15.248/HTML/investcalcs-html/assets/images/google.png"
    },
    {
        title: "Microsoft",
        rating: "Calculate price target",
        image: "http://13.233.15.248/HTML/investcalcs-html/assets/images/microsoft.png"
    },
];

data.forEach((element) => {

    const main = document.querySelector("#a");
    console.log(main);

    const card = document.createElement('div');
    card.classList = 'card';

    const movieCard = `
    <div class="container">
    <div class="card">
        <img class="card-img-top" id="im1"
            src=${element.image}
            alt="Card image">
        <div class="card-body">
            <p id="car1">${element.title}</p>
            <a href="#" class="btn btn-primary" id="pp1">${element.rating}</a>
        </div>
    </div>
    <br>
    </div>
`;

    card.innerHTML += movieCard;
    main.appendChild(card);

    console.log(element);
});