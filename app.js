const tastatur = document.querySelectorAll('td');
const previousArea = document.querySelector('#previousArea');
const operetionButtons = document.querySelectorAll('.operationButtons');
const result = document.querySelector('.currentArea');
const gleichButton = document.querySelector('#gleich');
const delButton = document.querySelector('#del');
const allDellButton = document.querySelector('#allDel');
[...tastatur].forEach((e) => {
  e.onclick = () => {
    operationArea(e.innerText);
  };
});
[...operetionButtons].forEach((e) => {
  e.onclick = () => {
    selectOperation(e.innerText);
  };
});
const operationArea = (value) => {
  if (value === '.' && result.innerText.includes('.')) {
    return;
  }
  if (value === '-' && result.innerText.includes('-')) {
    return;
  }
  if (result.innerText.length > 10) {
    return;
  }
  result.innerText += value;
};

const selectOperation = (value) => {
  if (result.innerText === '') {
    return;
  }
  if (previousArea.innerText !== '') {
    calculate();
  }
  previousArea.innerText = result.innerText + value;
  result.innerText = '';
};

const calculate = () => {
  const resultValue = parseFloat(result.innerText);
  const previousValue = parseFloat(previousArea.innerText.slice(0, -1));
  let compute;
  if (previousArea.innerText.includes('+')) {
    compute = resultValue + previousValue;
    previousArea.innerText = '';
    result.innerText = compute;
  }
  if (previousArea.innerText.includes('-')) {
    compute = resultValue - previousValue;
    previousArea.innerText = '';
    result.innerText = compute;
  }
  if (previousArea.innerText.includes('x')) {
    compute = resultValue * previousValue;
    previousArea.innerText = '';
    result.innerText = compute;
  }
  if (previousArea.innerText.includes('/')) {
    compute = previousValue / resultValue;
    previousArea.innerText = '';
    result.innerText = compute;
  }
};

gleichButton.onclick = () => {
  if (result.innerText === '' && previousArea.innerText !== '') {
    result.innerText = previousArea.innerText.slice(0, -1);
    previousArea.innerText = '';
  } else {
    calculate();
  }
};
allDellButton.onclick = () => {
  previousArea.innerText = '';
  result.innerText = '';
};

delButton.onclick = () => {
  result.innerText = result.innerText.slice(0, -1);
};
