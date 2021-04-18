
const EventEmitter = require('events');

class Users extends EventEmitter {
  userLogged() {
    this.emit("User Logged", data);
  }
}

const users = new Users();

users.on('User Logged', data => {
  console.log(data);
})
users.emit("User Logged", { user: "Erick de Freitas" });
users.emit("User Logged", { user: "Teste de Freitas" });


