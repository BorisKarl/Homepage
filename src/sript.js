// Smooth scrolling
const links = document.querySelectorAll(".sectionLink");
console.log(links);
links.forEach((link) => {
    link.addEventListener("click", (e) => {
            e.preventDefault();

        console.log(link.getAttribute("href"));
        let tmp = link.getAttribute("href");
        let id = tmp.substring(1);
        let target = document.getElementById(id);
        console.log(target)
                target.scrollIntoView({behavior: "smooth",})
    })
})
/*
const navList = document.querySelector(".nav_list");
navList.addEventListener("click", () => {
    let check = document.getElementById("top_link");
    console.log(check);
    if(check) return;
    else {
         const top = document.createElement("a");
         top.setAttribute("id", "top_link")
         top.setAttribute("class", "sectionLink");
         top.setAttribute("href", "#top");
         top.textContent = "Top";
         navList.insertBefore(top, navList.firstChild);
         top.addEventListener("click", (e) => {
           e.preventDefault();

           let tmp = top.getAttribute("href");
           let id = tmp.substring(1);
           let target = document.getElementById(id);
           console.log(target);
           top.scrollIntoView({ behavior: "smooth" });
         });
    }
   
})

*/

