const ins = document.querySelectorAll(".in");
const Sbutt = document.getElementById("Sbutt");
const h1 = document.getElementById("h1");

function wait(miliSeconds) {

return new Promise(resolve => setTimeout(resolve, miliSeconds));
}

async function logged() {

	ins.forEach(ins => {
		ins.style.borderBottom = "3px solid lime";
		ins.disabled = true;
	});

	Sbutt.style.backgroundColor = "lime";
	Sbutt.textContent = "logging in";
   Sbutt.disabled = true;
	
	let user = document.getElementById("user").value;
	h1.textContent = `Hello ${user}!`;

	await wait(1500);

 	window.location.href = "https://LuminousVibeUnknown2763.github.io/LuminousVibe/";
}
