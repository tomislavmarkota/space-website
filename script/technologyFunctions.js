document.addEventListener("DOMContentLoaded", () => {

    const picture = document.getElementById("tech-img");
    const numbers = document.querySelectorAll(".numbers");
    const title = document.getElementById("tech-title");
    const techInfo = document.getElementById("tech-info");
    const landscape = document.getElementById("src-landscape");
    const dataJson = []


    const technologyData = async () => {
        
        const fetchData = await fetch("./script/data.json");
        const data = await fetchData.json();
        dataJson.push(data);
        picture.src =   `${data.technology[0].images.portrait}`;
        landscape.srcset = `${data.technology[0].images.landscape}`;
        title.innerHTML = `${data.technology[0].name}`;
        techInfo.innerHTML = `${data.technology[0].description}`;
                
    }
    technologyData();

    function renderHtml(index){
        picture.src =   `${dataJson[0].technology[index].images.portrait}`;
        landscape.srcset = `${dataJson[0].technology[index].images.landscape}`;
        title.innerHTML = `${dataJson[0].technology[index].name}`;
        techInfo.innerHTML = `${dataJson[0].technology[index].description}`;
    }


    numbers[0].addEventListener("click", () => {
        activeTech(0);
        renderHtml(0);
    });
    numbers[1].addEventListener("click", () => {
        activeTech(1);
        renderHtml(1);
    });
    numbers[2].addEventListener("click", () => {
        activeTech(2);
        renderHtml(2);
    });



    const activeTech = (n = 0) => { 
        numbers.forEach(number => {
            number.classList.remove("active");
        })
        numbers[n].classList.add("active");
    }
    activeTech();
});
