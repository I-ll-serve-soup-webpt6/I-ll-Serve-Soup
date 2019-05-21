let about = document.getElementById("aboutCard");
let market= document.getElementById("marketCard");
let sales = document.getElementById("salesCard");
let contact = document.getElementById("contactCard");


document.getElementById("about").addEventListener("click", function() {
    about.classList.replace("closed", "open");
    market.classList.replace("open", "closed");
    sales.classList.replace("open", "closed");
    contact.classList.replace("open", "closed");
  });

document.getElementById("market").addEventListener("click", function() {
    market.classList.replace("closed", "open");
    about.classList.replace("open", "closed");
    sales.classList.replace("open", "closed");
    contact.classList.replace("open", "closed");
  });

document.getElementById("sales").addEventListener("click", function() {
    sales.classList.replace("closed", "open");
    about.classList.replace("open", "closed");
    market.classList.replace("open", "closed");
    contact.classList.replace("open", "closed");
  });

document.getElementById("contact").addEventListener("click", function() {
    contact.classList.replace("closed", "open");
    sales.classList.replace("open", "closed");
    about.classList.replace("open", "closed");
    market.classList.replace("open", "closed");
  });
