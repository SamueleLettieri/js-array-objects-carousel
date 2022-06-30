const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

let index = 0;
const container = document.querySelector("div.cards_container");

let box = document.createElement("div");
box.classList.add("col-12", "ms_p-r");

divImg();


const nextButton = document.querySelector("#next"); 

nextButton.addEventListener("click", function() {
    box.classList.remove("active")
    box.classList.add("ms_d_n")
    
    index++
    if(index === images.length){
        index = 0;
    }
    
    divImg();
    
    box.setAttribute("src", images[index].url);
    console.log(imgCarousel)
    
    box.classList.add("active")
});


const previousButton = document.querySelector("#previous"); 

previousButton.addEventListener("click", function() {
    box.classList.remove("active")
    box.classList.add("ms_d_n")
    
    index--
    if(index === -1){
        index = images.length - 1;
    }
    
    divImg();

    pDescription.innerHTML += images[index].description;
    
    box.setAttribute("src", images[index].url);
    console.log(imgCarousel)
    
    box.classList.add("active")
}); 





function divImg(){
    box = document.createElement("div");
    box.classList.add("col-12", "ms_p-r", "active");
    container.append(box)

    let imgCarousel = document.createElement("img");
    imgCarousel.classList.add("ms_img-caros",);
    imgCarousel.setAttribute("src", images[index].url);
    box.append(imgCarousel);
        
    let h2Title = document.createElement("h2");
    h2Title.classList.add("ms_p-abs_h");
    box.append(h2Title);
    h2Title.innerHTML += images[index].title;
        
    let pDescription = document.createElement("p");
    pDescription.classList.add("ms_p-abs_p",);
    box.append(pDescription);
    pDescription.innerHTML += images[index].description;
}