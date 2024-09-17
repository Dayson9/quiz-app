const prev = document.getElementById('prev');
const nxt = document.getElementById('next')
const q_in = document.getElementById('q_in')
const info = document.getElementById('info');
const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const d = document.getElementById("d")

const opt = ['a', 'b', 'c', 'd'];
const optionText = document.getElementsByClassName('opt');
var selected = [];
var counter = 0;
const q_o_a = [{ "q": "Who invented computer?", "a": "Alan Turing", "b": "Elon Musk", "c": "Charles Babbage", "d": "Ada Lovelace", "ans": "c" },

  { "q": "In color combination, Green+Blue equals?", "a": "Red", "b": "Cyan", "c": "Orange", "d": "Lightgreen", "ans": "b" },

  { "q": "What is the full meaning of AI?", "a": "Articulate Intelligence", "b": "Artificial Intellectual", "c": "Articulate Intellect", "d": "Artificial Intelligence", "ans": "d" },

  { "q": "A number added to it's square makes 90, find the number", "a": "9", "b": "-11", "c": "-8", "d": "6", "ans": "a" },

  { "q": "Who is the founder of CCC (Celestial Church of Christ)?", "a": "Rev.E.M.F Oshoffa", "b": "Rev.S.B.J Oshoffa", "c": "Rev.A.A Bada", "d": "Rev.O.O Ogunlesi", "ans": "b" },

  { "q": "Which is the second biggest Movie Industry worldwide?", "a": "Hollywood", "b": "Nollywood", "c": "Bollywood", "d": "Burlywood", "ans": "b" },

  { "q": "You can break me without any touch, what am I?", "a": "Feeling", "b": "Bucket", "c": "Egg", "d": "Heart", "ans": "d" },

  { "q": "Which is the strongest  substance below?", "a": "Graphene", "b": "Graphite", "c": "Diamond", "d": "Tungsten", "ans": "a" },

  { "q": "Sound is measured in...", "a": "Watts", "b": "Ultrasound", "c": "Decibels", "d": "Dioptres", "ans": "c" },

  { "q": "Who is the founder of this Quiz?", "a": "Joel greyhat", "b": "Sodiq Tunde", "c": "Ohwi Daniel", "d": "Lamina Timilehin", "ans": "b" }]




function toNextQuestion() {
  counter++;
  q_in.innerText = q_o_a[counter].q;
  for (x in optionText) {
    optionText[x].innerText = q_o_a[counter][opt[x]];
  }
}

function toPrevQuestion() {
  counter--;
  q_in.innerText = q_o_a[counter].q;
  for (x in optionText) {
    optionText[x].innerText = q_o_a[counter][opt[x]];
  }
}

function printResult(el) {
  let len = q_o_a.length;
  let score = 0;
  for (i = 0; i < len; i++) {
    if (selected[i] === q_o_a[i].ans) {
      score++;
    }
  }

  el.innerHTML = "Congratulations<br>You scored " + score + " out of " + len;
  result.style.opacity = 1;
}

function hideResult() {
  result.style.opacity = 0;
}

prev.addEventListener('click', toPrevQuestion);

nxt.addEventListener('click', toNextQuestion);

document.body.onload = () => {
  q_in.innerText = q_o_a[counter].q;
  for (cc in optionText) {
    optionText[cc].innerText = q_o_a[counter][opt[cc]];
  }
}

submit.onclick = () => printResult(info);

a.onclick = () => selected[counter] = 'a'

b.onclick = () => selected[counter] = 'b'

c.onclick = () => selected[counter] = 'c'

d.onclick = () => selected[counter] = 'd'