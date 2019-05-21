// We're supposed to only have one ID type reference per page.  I don't know why YET bc I haven't looked
// into it deeper.  Also we have to build components in order to meet MVP.

// let about = document.getElementById("aboutCard");
// let market= document.getElementById("marketCard");
// let sales = document.getElementById("salesCard");
// let contact = document.getElementById("contactCard");



class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      this.tabItem =  new TabItem(this.itemElement);
      this.element.addEventListener('click', () => {
          this.select()
      })
    };
  
    select() {
      const links = document.querySelectorAll(".tabs-link").forEach(link => link.classList.remove('tabs-link-selected'));
      this.element.classList.toggle('tabs-link-selected');
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
    select() {
      const items = document.querySelectorAll('.tabs-item').forEach(item => item.classList.remove('tabs-item-selected'));
      this.element.classList.add('tabs-item-selected');
    }
  }
  let links = document.querySelectorAll(".tabs-link").forEach(tab => new TabLink(tab));

/*
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
*/