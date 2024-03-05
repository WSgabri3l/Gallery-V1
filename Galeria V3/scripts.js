var imageList = ["/images/image_1.jpg",
                "/images/image_2.jpg",
                "/images/image_3.jpg",];

const gallery = document.querySelector("#gallery");
const view = document.querySelector("#view");
const viewSpace = document.createElement("img");

viewSpace.id = "viewId";
view.appendChild(viewSpace);

for (let index = 0; index < imageList.length; index++) {
    
    let imageSpace = document.createElement("img");
    let imageSource = imageList[index];
    
    imageSpace.src = imageSource;

    imageSpace.addEventListener("click", (event) =>{

        viewSpace.src = imageSource
    })

    gallery.appendChild(imageSpace);

};

const buttonNext = document.createElement("button")
const buttonPrevious = document.createElement("button")