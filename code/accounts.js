const Database = require("@replit/database");
const db = new Database()
var accstatus = "Not connected";
class Accounts {
  constructor(runtime, extensionId) {
		this.runtime = runtime;
	}
  getInfo() {
    return {
        "id": "Accounts",
        "name": "Account Maker",
        "blocks": [{
    "opcode": "connector", //This will be the ID code for the block
    "blockType": "command", //This can either be Boolean, reporter, command, or hat
    "text": "Create Account with username [uname] password [pword]", //This is the block text, and how it will display in the Scratch interface
    "arguments": {
                        "uname": {
                            "type": "text",
                            "defaultValue": "Cat"
                        },
                        "pword": {
                            "type": "text",
                            "defaultValue": "Meow"
                        },
},
{
    "opcode": "val", //This will be the ID code for the block
    "blockType": "reporter", //This can either be Boolean, reporter, command, or hat
    "text": "Account Status", //This is the block text, and how it will display in the Scratch interface
},
{
    "opcode": "listAll", //This will be the ID code for the block
    "blockType": "reporter", //This can either be Boolean, reporter, command, or hat
    "text": "List all Accounts", //This is the block text, and how it will display in the Scratch interface
},
        ],
        "menus": { 
        }
    };
    connector({uname, pword}) {
    db.list().then(keys => {
      if (keys.includes(uname)) {
        accstatus = "ERROR!"
      } else {
        db.set(uname, pword).then(() => {
          accstatus = "Success!"
        });
      }
    });
    
}
val() {
  return accstatus;
}
listAll() {
  db.list().then(keys => {
    return keys;
  });
}
}
}
Scratch.extensions.register(new Accounts());