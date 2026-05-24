function veletlen_szam(){
    return Math.floor(Math.random() * 7438) + 1;//10000) + 1;
}


async function getch(url){
    const response = await fetch(url);
    const json_promise = await response.json();
    return json_promise;
}

async function uj_karakter(){
    
    let randomId = veletlen_szam();

    //console.log(randomId);// dzsitipiti

    
    let data = await getch(`https://api.disneyapi.dev/character/${randomId}`);
    console.log(data);

    if (!data.data) {
        //console.log("Nincs ilyen karakter");
        uj_karakter();
        return;
    }

    if (!data.data.name) {
        karakter.innerHTML = "Beazonosítatlan karakter";
    } else {
        karakter.innerHTML = data.data.name;
    }

    if (data.data.imageUrl) {
        kep.src = data.data.imageUrl;
    } else {
        kep.src = "sajnos.png";
    }

    if (data.data.films.length > 0) {        
        filmek.innerHTML = data.data.films.join(", ");//`<br>`);
    } else {
        filmek.innerHTML = "────୨ৎ────";
    }

    if (data.data.shortFilms.length > 0) {
        rovidfilmek.innerHTML = data.data.shortFilms.join(", ");
    } else {
        rovidfilmek.innerHTML = "────୨ৎ────";
    }

    if (data.data.tvShows.length > 0) {
        tevemusorok.innerHTML = data.data.tvShows.join(", ");
    } else {
        tevemusorok.innerHTML = "────୨ৎ────";
    }

    if (data.data.videoGames.length > 0) {
        videojatekok.innerHTML = data.data.videoGames.join(", ");
    } else {
        videojatekok.innerHTML = "────୨ৎ────";
    }

    if (!data.data.alignment) {
        oldal.innerHTML = "────୨ৎ────";
    } else {
        oldal.innerHTML = data.data.alignment;
    }

    if (data.data.parkAttractions.length > 0) {
        parkattrakciok.innerHTML = data.data.parkAttractions.join(", ");
    } else {
        parkattrakciok.innerHTML = "────୨ৎ────";
    }

    if (data.data.allies.length > 0) {
        szovetsegesek.innerHTML = data.data.allies.join(", ");
    } else {
        szovetsegesek.innerHTML = "────୨ৎ────";
    }

    if (data.data.enemies.length > 0) {
        ellensegek.innerHTML = data.data.enemies.join(", ");
    } else {
        ellensegek.innerHTML = "────୨ৎ────";
    }
}

const gomb = document.getElementById("gomb");
const karakter = document.getElementById("karakter");
const kep = document.getElementById("kep");
const filmek = document.getElementById("filmek");
const rovidfilmek = document.getElementById("rovidfilmek");
const tevemusorok = document.getElementById("tevemusorok");
const videojatekok = document.getElementById("videojatekok");
const oldal = document.getElementById("oldal");
const parkattrakciok = document.getElementById("parkattrakciok");
const ellensegek = document.getElementById("ellensegek");

gomb.addEventListener("click", uj_karakter);




