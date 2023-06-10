"use strict";

function table() {
  let table = document.getElementById("tbl");
  let newArr = [];
  let td = "";

  for (let i = 0; i < 16; i++) {
    newArr.push(i + 1);
  }

  for (let i = 0; i < 4; i++) {
    td += "<tr>";
    for (let j = 0; j < 4; j++) {
      let rdm = Math.floor(Math.random() * newArr.length);
      let rdmElem = newArr.splice(rdm, 1)[0];
      td += `<td id=${rdmElem} onclick="clickTd(${rdmElem})">${rdmElem}</td>`;
    }
    td += "</tr>";
  }

  table.innerHTML = td;
}

table();

const newArr = [];

function clickTd(element) {
  let td = document.getElementById(element);
  newArr.push(element);
  if (newArr[0] == 1) {
    if ((td.style.backgroundColor = "green")) {
      td.style.pointerEvents = "none";
    }
  } else {
    td.style.backgroundColor = "red";
    setTimeout(() => {
      alert("You lose :(");
    }, 100);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[0] == 1) {
        if (newArr[i] + 1 == newArr[j]) {
          td.style.backgroundColor = "green";
          break;
        } else {
          td.style.backgroundColor = "red";
          setTimeout(() => {
            alert("You lose :(");
          }, 100);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      } else {
        td.style.backgroundColor = "red";
      }
    }
  }
  if (element == 16) {
    if (td.style.backgroundColor == "green") {
      setTimeout(() => {
        alert("Congrats! Winner :)");
      }, 300);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }
}
