const searchFrom =document.getElementById("search-from");
const searchBox =document.getElementById("search-box");
const searchResult =document.getElementById("search-result");
const showMoreBtn =document.getElementById("show-more-btn");
//console.log(searchFrom);
//console.log(searchBox);
// console.log(searchResult);
// console.log(showMoreBtn);
// console.log(searchBox.value);

let keyword ="";
let page = 1;
const accessKey="5PHCC5QD3x4nbXfGL-Hw7tscDA_3Lz1xRz0uo9ysonY";


async function searchImages(){
    keyword = searchBox.value;
    console.log(searchBox.value);
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`
    
    const response = await fetch(url);
    const data= await response.json();

   if(page === 1){
     searchResult.innerHTML = "";
   }
  
    // console.log(data);
    const results = data.results;

    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLing = document.createElement("a");
        imageLing.href= result.links.html;
        imageLing.target ="_blank"
        
        imageLing.appendChild(image);
        searchResult.appendChild(imageLing);

    })
    showMoreBtn.style.display = "block";

}

searchFrom.addEventListener("submit", (e) =>{
    e.preventDefault();
    page= 1;
    searchImages();

});


showMoreBtn.addEventListener("click",()=>{
    page++;
    console.log(page);
    searchImages();
})