let current_users = ["Atif","Aslam","Arijit","Darshan","Mohit"]
let new_users = ["Ali","Zulfi","Arijit","Atif","Asad"]

new_users.forEach(new_users => 
    {if(current_users.some(
        (current_users) => current_users.toLowerCase() === new_users.toLowerCase()
    ))
{
    console.log(`${new_users} is already taken.Please enter another`)
}else{
    console.log(`${new_users} is available!`)
}
});