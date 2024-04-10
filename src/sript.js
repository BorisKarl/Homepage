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

const pic = document.getElementById("footer_pic");
pic.addEventListener("mouseover", () => {
    pic.classList.toggle("move");
})
