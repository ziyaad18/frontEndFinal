function createAccount() {
  const inputs = document.getElementsByTagName("input");

  fetch("https://127.0.0.1:5000/add-now/", {
    method: "POST",
    body: JSON.stringify({
      fname: inputs[0].value,
      uname: inputs[1].value,
      passw: inputs[2].value,
      email: inputs[3].value,
      repeat_password: inputs[4].value,
    }),
    headers: {
      "Content-type": "application/json; charset= UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("account is created");
      document.getElementById("reg");
      window.location.href = "./index.html;";
    })
    .catch((e) => alert(e));
}

// Get the modal
let modal = document.getElementById("reg");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
