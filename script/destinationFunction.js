window.addEventListener("DOMContentLoaded", () => {
    const planetImg = document.getElementById("planet-img");
    const planetLink = document.querySelectorAll(".planet-link");
    const planetName = document.querySelector(".planet-name");
    const planetInfo = document.querySelector(".planet-info");
    const kilometers = document.getElementById("kilometers");
    const days = document.getElementById("days");
    const data = []

    const destinations = async () => {

        const fetchData = await fetch("./script/data.json");
        const response = await fetchData.json();
        data.push(response)
    }
    destinations();

    function renderHtml(index){
        planetImg.src=`${data[0].destinations[index].images.png}`;
        planetName.innerHTML = `${data[0].destinations[index].name}`;
        planetInfo.innerHTML = `${data[0].destinations[index].description}`;
        kilometers.innerHTML = `${data[0].destinations[index].distance}`;
        days.innerHTML = `${data[0].destinations[index].travel}`;

    }

    planetLink[0].addEventListener("click", () => {
        activePlanet(0);
        renderHtml(0);
    });
    planetLink[1].addEventListener("click", () => {
        activePlanet(1);
        renderHtml(1);
    });
    planetLink[2].addEventListener("click", () => {
        activePlanet(2);
        renderHtml(2);
    });
    planetLink[3].addEventListener("click", () => {
        activePlanet(3);
        renderHtml(3);
    });
  
    const activePlanet = (n = 0) => {
       for(var i = 0; i < planetLink.length; i++){
           planetLink[i].classList.remove("active");
       }
       planetLink[n].classList.add("active");
    }
    activePlanet();

})







    

