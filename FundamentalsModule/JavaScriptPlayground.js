class Contact{

}
let obj = {
    'user1' : [new Contact(), new Contact()],
    'user2': [new Contact(), new Contact()]
};

let allContacts = [];
Object.entries(obj).forEach(e => {
    let contacts = e[1];
    for(let contact of contacts){
        allContacts.push(contact);
    }
});
console.log(obj);
console.log(allContacts);
