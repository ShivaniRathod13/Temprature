const tempload = () => {
  let temp = document.getElementById("temp");
  temp.innerHTML = "&#xf2cb";

  setTimeout(() => {
    temp.innerHTML = "&#xf2ca";
    temp.style.color = "#f8b627";
  }, 1000);

  setTimeout(() => {
    temp.innerHTML = "&#xf2c9";
  }, 2000); //1000

  setTimeout(() => {
    temp.innerHTML = "&#xf2c8";
  }, 3000); //1000

  setTimeout(() => {
    temp.innerHTML = "&#xf2c7";
    temp.style.color = "#d63031";
  }, 4000); //1000
};

tempload();
//infiniti loop

setInterval(tempload, 5000);
//my name is shivani;
