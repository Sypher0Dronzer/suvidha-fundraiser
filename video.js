var cross= document.querySelector(".video-player i");
cross.addEventListener("click",()=>{
    document.querySelector('.video-player').style.width =0;
    document.querySelector("video").pause()
})

document.querySelectorAll(".see-video").forEach((e)=>{
    e.addEventListener("click",()=>{
        document.querySelector('.video-player').style.width = `100%`
    })
})