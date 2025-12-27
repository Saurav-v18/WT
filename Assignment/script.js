const colors = {
  quad1: "#F88379",
  quad2: "#f0e33f",
  quad3: "#b86d23",
  quad4: "#719870"
};

const quadrants = document.querySelectorAll(".container div");
quadrants.forEach(quad => {
  quad.addEventListener("mouseenter", () => {
    quad.style.backgroundColor = colors[quad.className];
  });

  quad.addEventListener("mouseleave", () => {
    quad.style.backgroundColor = "white";
  });
});
