const generatebtn = document.querySelector("button");
// console.log(generatebtn);
const memetitle = document.querySelector(".meme-title");
const memeimage = document.querySelector(".meme-image");
const authorname = document.querySelector(".author");




async function getmeme(){
    let res =await fetch("https://meme-api.com/gimme/wholesomememes");
    let data = await res.json();
    // console.log(data);
    const { author, title, url} = data;
    memetitle.textContent = title;
    // console.log(memetitle);
    memeimage.src = url;
    authorname.innerText = author;
}
getmeme();





generatebtn.addEventListener("click",async()=>{
    // console.log("hello")
    // fetch("https://meme-api.com/gimme/wholesomememes").then((res)=>{
    //     // console.log(res.json());
    //     return res.json();
    // }).then((data)=>{
    //     console.log(data);
    // })
    getmeme();
});