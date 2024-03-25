const marco = {
  name: "Marco", //Oggetto n1
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn", //Oggetto n2
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed", //Oggetto n3
  isAmbassador: false,
};

const prices = [34, 5, 2];
const shippingCost = 50;
let utenteCheEffettuaLAcquisto = amy; //cambia il valore qui per provare se il tuo algoritmo funziona!

const utenti = [];
utenti.push(marco, paul, amy);
console.log(utenti);
/* console.log(utenti[0]);
console.log(utenti[1]);
console.log(utenti[2]); */
for (let i = 0; i < utenti.length; i++) {
  const element = utenti[i];
  /*  console.log(element); */
  console.log(
    element.name + " " + element.lastName + (element.isAmbassador ? " è un ambassador" : " non è un ambassador")
  );
}

const ambassador = [];
for (let i = 0; i < utenti.length; i++) {
  const element = utenti[i];
  if (element.isAmbassador) {
    ambassador.push(element);
  }
}
console.log(ambassador);

//funzione carrello!

let carrello = 0;
let costoTot = 0;
for (let i = 0; i < prices.length; i++) {
  const element = prices[i];
  carrello += element;
  console.log(carrello);
}

for (let i = 0; i < utenti.length; i++) {
  const element = utenti[i]; //verificato se gli utenti sono ambassador!
  console.log(element);
  if (element.isAmbassador) {
    // sconto applicato a Marco isAmbassador: true.
    //console.log(element.isAmbassador);
    let sconto = 0;
    sconto = carrello - (carrello * 30) / 100;
    console.log(sconto);

    //ultimo eseercizio

    if (sconto > 100) {
      costoTot = sconto;
      console.log(costoTot);
    } else {
      costoTot = shippingCost + sconto;
      console.log("il costo tot. per l'ambassador è " + costoTot);
    }
  } else {
    //prezzi pieni senza sconto
    console.log(carrello);
    if (carrello > 100) {
      //spedizione gratuita
      costoTot = carrello;

      console.log(costoTot);
    } else {
      //spedizione a pagamento
      costoTot = shippingCost + carrello;
      console.log(costoTot);
    }
  }
}
