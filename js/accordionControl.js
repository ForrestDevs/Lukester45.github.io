const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('area-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('area-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('area-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));