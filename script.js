let img  = document.querySelector('.img12');
let btn1 = document.querySelector('.btn1');
let btn0 = document.querySelector('.btn0');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let para = document.querySelector('.p12');
btn1.addEventListener('click', () => {
    img.src = 'https://i.pinimg.com/originals/bc/9e/98/bc9e98aac650781c31453dbd2d8d991a.jpg';
    para.innerHTML = 'Events';
})
btn2.addEventListener('click', () => {
    img.src = 'https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_headers/282400/2000x2000-0-70-2d438ed9621f3246a2e0f197423f10ef.jpg';
    
    para.innerHTML = 'in';
})
btn3.addEventListener('click', () => {
    
    img.src = 'images/Flag_of_Egypt.svg';
    para.innerHTML = 'Egypt';
})
btn0.addEventListener('click', () => {
    img.src = 'https://i.pinimg.com/originals/f9/cc/b0/f9ccb01a1fd53b31715434a5d4e9af2a.jpg';
    para.innerHTML = 'Best';
})

const loginBtn = document.getElementById("login-btn");
const createAccountBtn = document.getElementById("create-account-btn");
const username = document.getElementById("username");
const password = document.getElementById("password");
const loggedinp = document.getElementById("loggedin");

if (loginBtn) {
  loginBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const data = {
      username: username.value,
      password: password.value,
    };

    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(data),
    });
    const respond = await res.text();
    if (respond === "Logged in successfully") {
      window.location.href = "/public/index.html";
    } else {
      loggedinp.style.color = "red";
      loggedinp.innerText = "Failed To Login";
    }
  });
}
if (createAccountBtn) {
  createAccountBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const data = {
      username: username.value,
      password: password.value,
    };

    const res = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(data),
    });
    const respond = await res.text();
    if (respond === "User registered successfully") {
      window.location.href = "/public/index.html";
    } else {
      loggedinp.style.color = "red";
      loggedinp.innerText = "Failed To Register";
    }
  });
}