//Dichiarazioni Variabili

let distance, num_changes, ticket_final_price, ticket_number, seat_number, distanza, ticket_final_price_show;






function my_Function() {
    var in_name= document.querySelector("#nome1");
    var in_surname= document.querySelector("#cognome1");
    var departure= document.querySelector("#partenza");
    var arrival= document.querySelector("#arrivo");
    var eta= document.querySelector("#eta").value;
    var class_value= document.querySelector("#class").value;

    num_changes= Math.floor (Math.random() * 8) +1;
    ticket_number= Math.floor (Math.random() * 99999999) + 11111111;
    seat_number= Math.floor (Math.random() * 50) +1;
    distance= Math.floor (Math.random() * 800) +50;

    const price= 0.21;
    let ticket_fullprice= distance * price;
    let ticket_fullprice_show= Math.round((ticket_fullprice)* 100) / 100;
    const discount_under= ticket_fullprice * 0.2;
    const discount_over= ticket_fullprice * 0.4;

    console.log(ticket_fullprice, discount_over, discount_under);
    //calcolo prezzo biglietto


    if(eta < 18 && class_value === "Seconda Classe"){
        ticket_final_price = ticket_fullprice - discount_under;
        ticket_final_price_show = Math.round((ticket_final_price) *100 ) / 100;
        document.getElementById("prezzo").innerHTML = `${ticket_fullprice_show} &euro;`;
        document.getElementById("discount").innerHTML = `-20&percnt;`;
        document.getElementById("ticket-final").innerHTML = `${ticket_final_price_show} &euro;`;


    }else if(eta > 18 && eta < 65 && class_value === "Seconda Classe"){
        ticket_final_price = ticket_fullprice;
        ticket_final_price_show = Math.round((ticket_final_price) *100 ) / 100;
        document.getElementById("prezzo").innerHTML = `${ticket_fullprice_show} &euro;`;
        document.getElementById("discount").innerHTML = `Nessuno sconto disponibile`;
        document.getElementById("ticket-final").innerHTML = `${ticket_final_price_show} &euro;`;


    }else if(eta > 65 && class_value === "Seconda Classe"){
        ticket_final_price = ticket_fullprice - discount_over;
        ticket_final_price_show = Math.round((ticket_final_price) *100 ) / 100;
        document.getElementById("prezzo").innerHTML = `${ticket_fullprice_show} &euro;`;
        document.getElementById("discount").innerHTML = `-40&percnt;`;
        document.getElementById("ticket-final").innerHTML = `${ticket_final_price_show} &euro;`;

    }else if(eta < 18 && class_value === "Prima Classe"){
        ticket_fullprice= distance * price * 1.2;
        ticket_fullprice_show= Math.round((ticket_fullprice)* 100) / 100;
        ticket_final_price = ticket_fullprice - discount_under;
        ticket_final_price_show = Math.round((ticket_final_price) *100 ) / 100;
        document.getElementById("prezzo").innerHTML = `${ticket_fullprice_show} &euro;`;
        document.getElementById("discount").innerHTML = `-20&percnt;`;
        document.getElementById("ticket-final").innerHTML = `${ticket_final_price_show} &euro;`;


    }else if(eta > 18 && eta < 65 && class_value === "Prima Classe"){
        ticket_fullprice= distance * price * 1.2;
        ticket_fullprice_show= Math.round((ticket_fullprice)* 100) / 100;
        ticket_final_price = ticket_fullprice;
        ticket_final_price_show = Math.round((ticket_final_price) *100 ) / 100;
        document.getElementById("prezzo").innerHTML = `${ticket_fullprice_show} &euro;`;
        document.getElementById("discount").innerHTML = `Nessuno sconto disponibile`;
        document.getElementById("ticket-final").innerHTML = `${ticket_final_price_show} &euro;`;


    }else if(eta > 65 && class_value === "Prima Classe"){
        ticket_fullprice= distance * price * 1.2;
        ticket_fullprice_show= Math.round((ticket_fullprice)* 100) / 100;
        ticket_final_price = ticket_fullprice - discount_over;
        ticket_final_price_show = Math.round((ticket_final_price) *100 ) / 100;
        document.getElementById("prezzo").innerHTML = `${ticket_fullprice_show} &euro;`
        document.getElementById("discount").innerHTML = `-40&percnt;`
        document.getElementById("ticket-final").innerHTML = `${ticket_final_price_show} &euro;
        `
    }else if(eta < 18 && class_value === "Business Class"){
        ticket_fullprice= distance * price * 1.4;
        ticket_fullprice_show= Math.round((ticket_fullprice)* 100) / 100;
        ticket_final_price = ticket_fullprice - discount_under;
        ticket_final_price_show = Math.round((ticket_final_price) *100 ) / 100;
        document.getElementById("prezzo").innerHTML = `${ticket_fullprice_show} &euro;`
        document.getElementById("discount").innerHTML = `-20&percnt;`
        document.getElementById("ticket-final").innerHTML = `${ticket_final_price_show} &euro;`


    }else if(eta > 18 && eta < 65 && class_value === "Business Class"){
        ticket_fullprice= distance * price * 1.4;
        ticket_fullprice_show= Math.round((ticket_fullprice)* 100) / 100;
        ticket_final_price = ticket_fullprice;
        ticket_final_price_show = Math.round((ticket_final_price) *100 ) / 100;
        document.getElementById("prezzo").innerHTML = `${ticket_fullprice_show} &euro;`
        document.getElementById("discount").innerHTML = `Nessuno sconto disponibile`
        document.getElementById("ticket-final").innerHTML = `${ticket_final_price_show} &euro;`


    }else if(eta > 65 && class_value === "Business Class"){
        ticket_fullprice= distance * price * 1.4;
        ticket_fullprice_show= Math.round((ticket_fullprice)* 100) / 100;
        ticket_final_price = ticket_fullprice - discount_over;
        ticket_final_price_show = Math.round((ticket_final_price) *100 ) / 100;
        document.getElementById("prezzo").innerHTML = `${ticket_fullprice_show} &euro;`
        document.getElementById("discount").innerHTML = `-40&percnt;`
        document.getElementById("ticket-final").innerHTML = `${ticket_final_price_show} &euro;`
    }
    console.log(ticket_final_price);

    document.getElementById("b_nome").innerHTML= in_name.value;
    document.getElementById("b_cognome").innerHTML= in_surname.value;
    document.getElementById("b_partenza").innerHTML= departure.value;
    document.getElementById("b_arrivo").innerHTML= arrival.value;
    document.getElementById("eta_passeggero").innerHTML= eta;
    document.getElementById("b_class").innerHTML= class_value;
    document.getElementById("cambi").innerHTML= `${num_changes}`;
    document.getElementById("posto").innerHTML= `${seat_number}`;
    document.getElementById("n_biglietto").innerHTML= `${ticket_number}`;
    document.getElementById("ticket_data").style.display = "block";
}











