//Dichiarazioni Variabili

let distance, num_changes, ticket_final_price, ticket_number, seat_number, distanza;

num_changes= Math.floor (Math.random() * 3) -1;
ticket_number= Math.floor (Math.random() * 99999999) + 11111111;
seat_number= Math.floor (Math.random() * 50) +1;
distance= Math.floor (Math.random() * 500) +50;


const price= 0.21;
const ticket_fullprice= distance * price;
const discount_under= ticket_fullprice * 0.2;
const discount_over= ticket_fullprice * 0.4;


function my_Function() {
    var in_name= document.querySelector("#nome1");
    var in_surname= document.querySelector("#cognome1");
    var departure= document.querySelector("#partenza");
    var arrival= document.querySelector("#arrivo");
    var eta= document.querySelector("#eta");

    document.getElementById("b_nome").innerHTML= in_name.value;
    document.getElementById("b_cognome").innerHTML= in_surname.value;
    document.getElementById("b_partenza").innerHTML= departure.value;
    document.getElementById("b_arrivo").innerHTML= arrival.value;
    document.getElementById("eta_passeggero").innerHTML = eta;
}

//calcolo prezzo biglietto

var eta= document.querySelector("#eta_passeggero"); 

if(eta<18){
    ticket_final_price = Math.round((ticket_fullprice - discount_under) * 100) / 100;
    document.getElementById("prezzo").innerHTML = `${ticket_fullprice} &euro;`
    document.getElementById("discount").innerHTML = `-20&percnt;`
    document.getElementById("ticket-final").innerHTML = `${ticket_final_price} &euro;`


}else if(eta>18 && eta<65){
    ticket_final_price = Math.round(ticket_fullprice * 100) / 100;
    document.getElementById("prezzo").innerHTML = `${ticket_fullprice} &euro;`
    document.getElementById("discount").innerHTML = `Nessuno sconto disponibile`
    document.getElementById("ticket-final").innerHTML = `${ticket_final_price} &euro;`


}else if(eta>65){
    ticket_final_price = Math.round((ticket_fullprice - discount_over) * 100) / 100;
    document.getElementById("prezzo").innerHTML = `${ticket_fullprice} &euro;`
    document.getElementById("discount").innerHTML = `-40&percnt;`
    document.getElementById("ticket-final").innerHTML = `${ticket_final_price} &euro;`

}

document.getElementById("b_distanza").innerHTML= `${distance}`;
document.getElementById("cambi").innerHTML= `${num_changes}`;
document.getElementById("posto").innerHTML= `${seat_number}`;
document.getElementById("n_biglietto").innerHTML= `${ticket_number}`;









