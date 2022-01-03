function clickListen(): void {
  document.getElementById('start').addEventListener('click', handleClick);
}

function handleClick(this: HTMLElement, event: Event): void {
  event.preventDefault();
  this.style.backgroundColor = 'red';
  console.log('1. Click received...');
  alert('hello!');
}

clickListen();

document.body.textContent = 'Hello, World!';
