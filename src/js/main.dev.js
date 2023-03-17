"use strict";

var counter1 = 0;
var languageArray = [
/*"XHTML",*/
"CSS", "JavaScript", "TypeScript", "jQuery", "jQuery UI", "jQuery Mobile", "SCSS", "SASS", "Stylus", "PUG", "Nunjucks", "MySQL", "MariaDB", "PostgreSQL", "Java", "JSON", "Node.js", "Python", "Ruby", "C", "C++", "R", "SVG", "HTML"];

var loopArray = function loopArray() {
  setTimeout(function () {
    if (counter1 == languageArray.length) {
      counter1 = 0;
      loopArray();
    } else {
      var i = 0;
      var rememberLoopWord = "";

      var wordLoopFunction = function wordLoopFunction() {
        if (i < languageArray[counter1].length) {
          setTimeout(function () {
            rememberLoopWord = rememberLoopWord + languageArray[counter1].charAt(i);
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
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
window.addEventListener("resize", function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
});
window.addEventListener("touchend", function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
});
$(".portfolioIcon").on("click", function () {
  $(".portfolioInnerBox").addClass("fadeOutAnimation");
});
$(".notPortfolio").on("click", function () {
  $(".portfolioInnerBox").removeClass("fadeOutAnimation");
});
$(".abilityIcon").on("click", function () {
  $(".abilityPage").addClass("fadeOutAnimation");
});
$(".notAbility").on("click", function () {
  $(".abilityPage").removeClass("fadeOutAnimation");
});
$(".contactIcon").on("click", function () {
  $(".contactPage").addClass("fadeOutAnimation");
});
$(".notContact").on("click", function () {
  $(".contactPage").removeClass("fadeOutAnimation");
});