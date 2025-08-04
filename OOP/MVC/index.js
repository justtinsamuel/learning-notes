const command = process.argv[2];
const params = process.argv.slice(3);

// CRUD
// show, add, update, delete

switch(command){
    case "add":
        const fs = require('fs');
        let data = fs.readFileSync("./data.json", "utf-8");
        let todos = JSON.parse(data);
        console.log(todos);
        break;
    case "show":
        console.log("showed");
        break;
    case "update":
        console.log("updated");
        break;
    case "deleted":
        console.log("deleted");
        break;
    default:
        console.log("default");
        break; 
}