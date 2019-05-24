class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    this.tabItem =  new TabItem(this.itemElement);
    this.element.addEventListener('click', () => {
      this.select()
  });
  } 
  select() {
    const links = document.querySelectorAll(".tabs-link").forEach(link => link.classList.remove('tabs-link-selected'));
    this.element.classList.toggle('tabs-link-selected');
    this.tabItem.select();
  }
} 
class TabItem {
  constructor(element) {
    this.element = element;
  }//Constructor closing bracket
  
  select() {
    const items = document.querySelectorAll('.tabs-item').forEach(item => item.classList.remove('tabs-item-selected'));
    this.element.classList.add('tabs-item-selected');
    selectedTab (this.element);
  }
}


class XButton {
  constructor (element){
    this.element = element;
    this.data = element.dataset.tab;
    this.element.addEventListener('click', ()=>{
    this.closeItem();
    });
  }
  closeItem(){
    document.querySelectorAll(`.tabs-item`).forEach(item => item.classList.remove('tabs-item-selected'));
    //Return the sticky property to header and footer
    footer.classList.remove('activeHeaderFooter');
    header.classList.remove('activeHeaderFooter');
  }
}


/*
class MainNavClassResize{
constructor (element){
this.element = element;
}
  
} */

let links = document.querySelectorAll(".tabs-link").forEach(tab => new TabLink(tab));

let xButtons = document.querySelectorAll(".xBtn").forEach(xDiv => new XButton(xDiv));

const singIn = document.querySelector('.signInTab');
singIn.addEventListener('click', (element) => {
  console.log("sign in button was clicked")
  window.location.href = "https://projects.invisionapp.com/share/Z6RLWHYRC2K#/screens";
});
/*
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let resizedPageElements = document.querySelector('.mainNav');

do { header.classList.add('activeHeaderFooter')}while (resizedPageElements.style.display !== "none");
do {footer.classList.remove('activeHeaderFoot')}while (resizedPageElements.style.display === "none");
*/
//  function selectedFooter () {
  // footer.classList.add("activeFooter");
  // console.log(nav)
  nav.classList.add("activTabMainNav");
  
// }
  
 

