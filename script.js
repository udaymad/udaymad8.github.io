// Allow drop
function allowDrop(event) {
  event.preventDefault();
}

// Handle drag start
document.querySelectorAll('.draggable').forEach(item => {
  item.addEventListener('dragstart', event => {
      event.dataTransfer.setData('type', event.target.getAttribute('data-type'));
  });
});

// Handle drop
function drop(event) {
  event.preventDefault();
  const type = event.dataTransfer.getData('type');
  const formArea = document.getElementById('form-area');

  let element;
  if (type === 'input') {
      element = document.createElement('div');
      element.className = 'form-element';
      element.innerHTML = '<label>Text Input:</label><input type="text" placeholder="Enter text">';
  } else if (type === 'checkbox') {
      element = document.createElement('div');
      element.className = 'form-element';
      element.innerHTML = '<label><input type="checkbox"> Checkbox</label>';
  } else if (type === 'button') {
      element = document.createElement('div');
      element.className = 'form-element';
      element.innerHTML = '<button type="button">Button</button>';
  }

  formArea.appendChild(element);
}
