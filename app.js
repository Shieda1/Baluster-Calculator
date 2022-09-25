// https://www.omnicalculator.com/construction/baluster

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const v5 = document.getElementById('v5');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const balustersneededRadio = document.getElementById('balustersneededRadio');
const railinglengthRadio = document.getElementById('railinglengthRadio');
const numberofpostsRadio = document.getElementById('numberofpostsRadio');
const postwidthRadio = document.getElementById('postwidthRadio');
const balusterwidthRadio = document.getElementById('balusterwidthRadio');
const balusterspacingRadio = document.getElementById('balusterspacingRadio');

let balustersneeded;
let railinglength = v1;
let numberofposts = v2;
let postwidth = v3;
let balusterwidth = v4;
let balusterspacing = v5;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');
const variable5 = document.getElementById('variable5');

balustersneededRadio.addEventListener('click', function() {
  variable1.textContent = 'Railing length';
  variable2.textContent = 'Number of posts';
  variable3.textContent = 'Post width';
  variable4.textContent = 'Baluster width';
  variable5.textContent = 'Baluster spacing';
  railinglength = v1;
  numberofposts = v2;
  postwidth = v3;
  balusterwidth = v4;
  balusterspacing = v5;
  result.textContent = '';
});

railinglengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Balusters needed';
  variable2.textContent = 'Number of posts';
  variable3.textContent = 'Post width';
  variable4.textContent = 'Baluster width';
  variable5.textContent = 'Baluster spacing';
  balustersneeded = v1;
  numberofposts = v2;
  postwidth = v3;
  balusterwidth = v4;
  balusterspacing = v5;
  result.textContent = '';
});

numberofpostsRadio.addEventListener('click', function() {
  variable1.textContent = 'Balusters needed';
  variable2.textContent = 'Railing length';
  variable3.textContent = 'Post width';
  variable4.textContent = 'Baluster width';
  variable5.textContent = 'Baluster spacing';
  balustersneeded = v1;
  railinglength = v2;
  postwidth = v3;
  balusterwidth = v4;
  balusterspacing = v5;
  result.textContent = '';
});

postwidthRadio.addEventListener('click', function() {
  variable1.textContent = 'Balusters needed';
  variable2.textContent = 'Railing length';
  variable3.textContent = 'Number of posts';
  variable4.textContent = 'Baluster width';
  variable5.textContent = 'Baluster spacing';
  balustersneeded = v1;
  railinglength = v2;
  numberofposts = v3;
  balusterwidth = v4;
  balusterspacing = v5;
  result.textContent = '';
});

balusterwidthRadio.addEventListener('click', function() {
  variable1.textContent = 'Balusters needed';
  variable2.textContent = 'Railing length';
  variable3.textContent = 'Number of posts';
  variable4.textContent = 'Post width';
  variable5.textContent = 'Baluster spacing';
  balustersneeded = v1;
  railinglength = v2;
  numberofposts = v3;
  postwidth = v4;
  balusterspacing = v5;
  result.textContent = '';
});

balusterspacingRadio.addEventListener('click', function() {
  variable1.textContent = 'Balusters needed';
  variable2.textContent = 'Railing length';
  variable3.textContent = 'Number of posts';
  variable4.textContent = 'Post width';
  variable5.textContent = 'Baluster width';
  balustersneeded = v1;
  railinglength = v2;
  numberofposts = v3;
  postwidth = v4;
  balusterwidth = v5;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(balustersneededRadio.checked)
    result.textContent = `Balusters needed = ${computebalustersneeded().toFixed(2)}`;

  else if(railinglengthRadio.checked)
    result.textContent = `Railing length = ${computerailinglength().toFixed(2)}`;

  else if(numberofpostsRadio.checked)
    result.textContent = `Number of posts = ${computenumberofposts().toFixed(2)}`;

  else if(postwidthRadio.checked)
    result.textContent = `Post width = ${computepostwidth().toFixed(2)}`;

  else if(balusterwidthRadio.checked)
    result.textContent = `Baluster width = ${computebalusterwidth().toFixed(2)}`;

  else if(balusterspacingRadio.checked)
    result.textContent = `Baluster spacing = ${computebalusterspacing().toFixed(2)}`;
})

// calculation

// balustersneeded = (railinglength - (numberofposts * postwidth)) / (balusterwidth + balusterspacing)

function computebalustersneeded() { 
  return ((Number(railinglength.value) * 100) - (Number(numberofposts.value) * Number(postwidth.value))) / (Number(balusterwidth.value) + Number(balusterspacing.value));
}

function computerailinglength() {
  return ((Number(balustersneeded.value) * (Number(balusterwidth.value) + Number(balusterspacing.value))) + (Number(numberofposts.value) * Number(postwidth.value))) / 100;
}

function computenumberofposts() {
  return ((Number(railinglength.value) * 100) - (Number(balustersneeded.value) * (Number(balusterwidth.value) + Number(balusterspacing.value)))) / Number(postwidth.value);
}

function computepostwidth() {
  return ((Number(railinglength.value) * 100) - (Number(balustersneeded.value) * (Number(balusterwidth.value) + Number(balusterspacing.value)))) / Number(numberofposts.value);
}

function computebalusterwidth() {
  return (((Number(railinglength.value) * 100) - (Number(numberofposts.value) * Number(postwidth.value))) / Number(balustersneeded.value)) - Number(balusterspacing.value);
}

function computebalusterspacing() {
  return (((Number(railinglength.value) * 100) - (Number(numberofposts.value) * Number(postwidth.value))) / Number(balustersneeded.value)) - Number(balusterwidth.value);
}