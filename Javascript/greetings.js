const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const deleteBtn = document.querySelector("#delete");

const HIDDEN_CLASSNMAE = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNMAE);
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username);
   paintGreetings(username)
};

function paintGreetings(username){
   greeting.innerHTML = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNMAE);
   deleteBtn.classList.remove("hidden")
}


const savedUsername = localStorage.getItem(USERNAME_KEY)





if(savedUsername === null){
   loginForm.classList.remove(HIDDEN_CLASSNMAE);
   loginForm.addEventListener("submit", onLoginSubmit);
} else {
   paintGreetings(savedUsername);
}


function deleteEvent(){
   localStorage.removeItem(USERNAME_KEY);
   window.location.reload()
};


deleteBtn.addEventListener("click", deleteEvent);



