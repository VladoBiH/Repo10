function getUsername(email) {
    var username = '';

    //Only Change code below this line
    var username = {
        "user1@gmail.com": "user1",
        "user2@gmail.com": "user2",
        "user3@gmail.com": "user3",
        "user4@gmail.com": "user4",
        "user5@gmail.com": "user5",
        "user6@gmail.com": "user6"
    };
    username = username[email];    
    // Only change code above this line

    return username;
}

getUsername("user2@gmail.com");
module.exports = getUsername;