let counter1 = 0;
const languageArray = [
  /*"XHTML",*/
  "CSS",
  "JavaScript",
  "TypeScript",
  "jQuery",
  "jQuery UI",
  "jQuery Mobile",
  "SCSS",
  "SASS",
  "Stylus",
  "PUG",
  "Nunjucks",
  "MySQL",
  "MariaDB",
  "PostgreSQL",
  "Java",
  "JSON",
  "Node.js",
  "Python",
  "Ruby",
  "C",
  "C++",
  "R",
  "SVG",
  "HTML",
];
let loopArray = () => {
  setTimeout(() => {
    if (counter1 == languageArray.length) {
      counter1 = 0;
      loopArray();
    } else {
      let i = 0;
      let rememberLoopWord = "";
      let wordLoopFunction = () => {
        if (i < languageArray[counter1].length) {
          setTimeout(() => {
            rememberLoopWord =
              rememberLoopWord + languageArray[counter1].charAt(i);
            $("h2 > p > span").html(rememberLoopWord);
            i++;
            wordLoopFunction();
          }, 80);
        } else {
          counter1++;
          loopArray();
        }
      };
      wordLoopFunction();
    }
  }, 500);
};
loopArray();
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
window.addEventListener("touchend", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
$(".portfolioIcon").on("click", () => {
  $(".portfolioInnerBox").addClass("fadeOutAnimation");
});
$(".notPortfolio").on("click", () => {
  $(".portfolioInnerBox").removeClass("fadeOutAnimation");
});
$(".abilityIcon").on("click", () => {
  $(".abilityPage").addClass("fadeOutAnimation");
});
$(".notAbility").on("click", () => {
  $(".abilityPage").removeClass("fadeOutAnimation");
});
$(".contactIcon").on("click", () => {
  $(".contactPage").addClass("fadeOutAnimation");
});
$(".notContact").on("click", () => {
  $(".contactPage").removeClass("fadeOutAnimation");
});
