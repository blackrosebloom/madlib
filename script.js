let adjective1 = prompt("enter an adjective");
let creature = prompt("enter the name of s spooky creature");
let adjective2 = prompt ("enter an adjective.");
let noun = prompt("enter an noun");
let friend = prompt ("enter the name of a friend");





let story = `My son insisted that I ${adjective1} for ${creature} under the bed. So I ${adjective2} down to have a look, and there was my son ${noun} in fright, ${friend}, I think there someone in my bed.`;

let madLibOutputDiv = document.getElementById("madLibOutputDiv");

madLibOutputDiv.innerHTML = `<p>${story}</p>`;

