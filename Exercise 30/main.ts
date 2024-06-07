let users = ["admin","Asad","Daniyal","Hamza","Talha"]

for(let user of users) {
    if(user === "admin"){
        console.log("Hello admin!Would you like to see status report?")
    }else{
        console.log(`Hello! ${user}, thank you for logging in again`)
    }
};