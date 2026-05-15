/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/


/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const prodotti = [
    {
        nome: "Smartphone Galaxy S23",
        categoria: "Elettronica",
        prezzo: 799.00,
        rating: 4.8,
        immagine: "assets/img/smartphone.jpg",
        disponibile: true
    },
    {
        nome: "Il Signore degli Anelli - Trilogia",
        categoria: "Blu-ray",
        prezzo: 25.50,
        rating: 5.0,
        immagine: "assets/img/lotr.jpg",
        disponibile: true
    },
    {
        nome: "T-Shirt Kappa",
        categoria: "Abbigliamento",
        prezzo: 15.99,
        rating: 4.2,
        immagine: "assets/img/tshirt.jpg",
        disponibile: true
    },
    {
        nome: "Macchina da Caffè Frog",
        categoria: "Casa",
        prezzo: 120.00,
        rating: 4.5,
        immagine: "assets/img/caffe.jpg",
        disponibile: false
    },
    {
        nome: "Cuffie Bluetooth",
        categoria: "Elettronica",
        prezzo: 250.00,
        rating: 4.9,
        immagine: "assets/img/cuffie.jpg",
        disponibile: true
    },
    {
        nome: "L'isola del Tesoro",
        categoria: "Libri",
        prezzo: 12.00,
        rating: 4.7,
        immagine: "assets/img/1984.jpg",
        disponibile: true
    },
    {
        nome: "Jeans Levi's",
        categoria: "Abbigliamento",
        prezzo: 85.00,
        rating: 4.6,
        immagine: "assets/img/jeans.jpg",
        disponibile: true
    },
    {
        nome: "Aspirapolvere Robot",
        categoria: "Casa",
        prezzo: 199.90,
        rating: 4.3,
        immagine: "assets/img/robot.jpg",
        disponibile: true
    },
    {
        nome: "Smart TV 55 Pollici 4K",
        categoria: "Elettronica",
        prezzo: 450.00,
        rating: 4.4,
        immagine: "assets/img/tv.jpg",
        disponibile: false
    },
    {
        nome: "Guida Definitiva al BodyBuilding",
        categoria: "Libri",
        prezzo: 45.00,
        rating: 4.8,
        immagine: "assets/img/js-book.jpg",
        disponibile: true
    },
    {
        nome: "Giacca a Vento Impermeabile",
        categoria: "Abbigliamento",
        prezzo: 60.00,
        rating: 4.1,
        immagine: "assets/img/giacca.jpg",
        disponibile: true
    },
    {
        nome: "Set di Coltelli da Cucina",
        categoria: "Casa",
        prezzo: 35.50,
        rating: 4.5,
        immagine: "assets/img/coltelli.jpg",
        disponibile: true
    }
];

/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function formattaPrezzo(prezzo) {
    let prezzoConDecimali = prezzo.toFixed(2);
}


/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function piazzaStelline(n) {
    if (n === 0) return '☆☆☆☆☆';
    if (n === 1) return '★☆☆☆☆';
    if (n === 2) return '★★☆☆☆';
    if (n === 3) return '★★★☆☆';
    if (n === 4) return '★★★★☆';
    if (n === 5) return '★★★★★';
    return 'Rating non valido';
}

console.log(piazzaStelline(6));

/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Nome prodotto, Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */