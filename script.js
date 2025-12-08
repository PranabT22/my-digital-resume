function myFunction() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btn = document.getElementById("Aboutme");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.textContent = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.textContent = "Read less";
    moreText.style.display = "inline";
  }
}