"use strict";

let userName = prompt("What is your name?");


if (userName?.trim()) {
    alert(`Hello, ${userName}! How are you?`);
} else {
    alert("Hello! How are you?");
}
