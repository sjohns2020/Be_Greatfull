use be_greatfull;
db.dropDatabase();

db.users.insertMany([
    {
      "firstName": "Sean",
      "lastName": "Johnson",
      "email": "seanjo86@gmail.com",
      "loggedIn": true
    }
  ]);

db.bgs.insertMany([
    {
        "location": "Starbucks",
        "date": "22/11/22",
        "time": "13:15",
        "company": "Starbucks",
        "role": "Barista",
        "firstName": "Sean",
        "description": "Short, Black hair, smiley", 
        "message": "You are wonderful thank you",
        "image": "Hi"
    }])

module.exports = {
      url: "mongodb://localhost:27017/",
      database: "bezkoder_files_db",
      imgBucket: "photos",
    };
