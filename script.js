monResult = document.querySelector('.monday-bar');
tueResult = document.querySelector('.tuesday-bar');
wedResult = document.querySelector('.wednesday-bar');
thuResult = document.querySelector('.thursday-bar');
friResult = document.querySelector('.friday-bar');
satResult = document.querySelector('.saturday-bar');
sunResult = document.querySelector('.sunday-bar');

async function getData() {
  const res = await fetch('./data.json');
  const data = await res.json();

  data.forEach((item) => {
    if (item.day === 'mon') {
      monResult.style.height = `${item.amount}%`;
    }
    if (item.day === 'tue') {
      tueResult.style.height = `${item.amount}%`;
    }
    if (item.day === 'wed') {
      wedResult.style.height = `${item.amount}%`;
    }
    if (item.day === 'thu') {
      thuResult.style.height = `${item.amount}%`;
    }
    if (item.day === 'fri') {
      friResult.style.height = `${item.amount}%`;
    }
    if (item.day === 'sat') {
      satResult.style.height = `${item.amount}%`;
    }
    if (item.day === 'sun') {
      sunResult.style.height = `${item.amount}%`;
    }
  });
}
getData();
