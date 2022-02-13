document.addEventListener("DOMContentLoaded", () => {
    
    const role = document.querySelector(".role");
    const dots = document.querySelectorAll(".dots");
    const name = document.getElementById("crew-member");
    const memberInfo = document.getElementById("member-info");
    const memberPic = document.getElementById("member-pic");
    const data = []
    
    const crew = async () => {

        const fetchData = await fetch("./script/data.json");
        const response = await fetchData.json();
        data.push(response);
    }
    crew();
    

    function renderHtml(index){
        role.innerHTML = `${data[0].crew[index].role}`;
        name.innerHTML = `${data[0].crew[index].name}`;
        memberInfo.innerHTML = `${data[0].crew[index].bio}`;
        memberPic.src = `${data[0].crew[index].images.png}`;
    }

    dots[0].addEventListener("click", () => {
        activeDot(0);
        renderHtml(0);
    }) 
    dots[1].addEventListener("click", () => {
        activeDot(1);
        renderHtml(1);
    }) 
    dots[2].addEventListener("click", () => {
        activeDot(2);
        renderHtml(2);
    }) 
    dots[3].addEventListener("click", () => {
        activeDot(3);
        renderHtml(3);
    }) 


    const activeDot = (n = 0) => {
        for(var i = 0; i < dots.length; i++){
            dots[i].classList.remove("active");
        }
        dots[n].classList.add("active");
    }
    activeDot();

})