function solve(jsonString, criteria) {
    criteria = criteria.split('-');
    let array = JSON.parse(jsonString);
    let filtered = array.filter(e => e[criteria[0]] === criteria[1]);

    let counter = 0;
    for (let { first_name, last_name, email } of filtered) {
        console.log(`${counter++}. ${first_name} ${last_name} - ${email}`);
    }
}


solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);
