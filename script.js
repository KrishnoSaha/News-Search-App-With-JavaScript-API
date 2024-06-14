const apiKey= '063fa2054bdf46e78ca901aac303cb7b'
const blogContainer= document.getElementById(blogs);
 async function fetchRandomNews(){
    try{
       const apiUrl= `https://newsapi.org/v2/everything?q=tesla&pageSize=20&apiKey=${apiKey}`
       const response= await fetch(apiUrl);
       const data= await response.json();
       console.log(data);
       return data.articles;

    }catch(error){
        console.error("error faching random news", error)
        return[]

    }

}
function displayBlogs(articles){
    blogs.innerHTML= "";
    articles.forEach((articles)=>{
        const blogCard= document.createElement("div");
        blogCard.classList.add("blog-card");
        const img= document.createElement("img");
        img.src= articles.urlToImage;
        img.art= articles.title;
        const title= document.createElement("h2");
        const truncatedTitle= articles.title.length>40? articles.title.slice(0, 40)+ ".....": articles.title;
        title.textContent= truncatedTitle;
        const description= document.createElement("p");
        description.textContent= articles.description;

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogs.appendChild(blogCard);







    });


}

(async ()=>{
    try{
        const articles= await fetchRandomNews();
        displayBlogs(articles);
        

    }catch(error){
        console.error("error fetching random news", error);

    }
})();