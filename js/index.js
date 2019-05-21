class TabLink {
    constructor(tabElement){
      this.tabElement = tabElement;
      this.tabData = this.tabElement.dataset.tab; 
      this.cards = document.querySelectorAll('.card');
      this.cards = Array.from(this.cards).map(card => new TabCard(card));
      this.tabElement.addEventListener('click',()=>this.selectTab());
    }
  
    selectTab(){
      const tabs = document.querySelectorAll('.tab');
      tabs.forEach(tab => tab.classList.remove('active-tab'));
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => card.style.display = 'none');
      this.tabElement.classList.add('active-tab');
      this.cards.forEach(card => {
        card.selectCard();
      });
    }
  }

let card = document.querySelectorAll('.card').forEach(card => new CardLink(card));

