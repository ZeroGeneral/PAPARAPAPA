//NOTE MAKE SURE TO ADD type="module" in your html! refer to ../html/login.html line 14
import data from "../assets/data/data.json" with { type: "json" };
// IMPORT ALL THE DATA INSIDE DATA.JSON and store it in a variable called data.
//store in a variable
let users = data.data
//set data to a local storage

//REFRESH DATA IF EVER SOMETHING WAS OVERWRITTEN OR ADDED
if (!sessionStorage.getItem("users")){
    console.log("Setting users")
    sessionStorage.setItem("users",JSON.stringify(users))
}else{
    users = JSON.parse(sessionStorage.users)
}
//access data which is stored in a data variable refer to ../assets/data/data.json line 2
console.log(users)
//store your required fields such as the email,password and login.
let login = document.getElementById("logitin")
//detect button click of login
login.addEventListener('click',() => {
    let em = document.getElementById("em")
    let ps = document.getElementById("ps")
    //check first if em and password is NOT provided and send an alert
    //this checks if the email and password has a value
    if (!(em.value && ps.value )){alert("MAKE SURE TO ENTER BOTH VALUES")}
    //validate data if both are provided
    else{
        //since the data is stored in an array we could loop through it and check if the data provided is included
        //this is not recommended for performance but for the sake of simplicity :c
        console.log(users.length)
        //LOOP THROUGH THE DATA 
        let userName
        for(let i = 0;i < users.length;i++){
            //check if the username matches
            if(users[i].username == em.value){
                //now check if the password matches
                if(users[i].password == ps.value){
                    //IF THE LOGIN IS SUCCESSFUL REDIRECT USER TO MAIN MENU OR HOME
                    //store username to greet user
                    userName = users[i].username
                    window.location.href = "../html/home.html"
                }
            }
        }
        //check if the user is found if so greet the user if not alert the user.
        if(userName){alert(`WELCOME BACK ${userName}!!!`)}else{alert("Error: UserName or Password is incorrect.")}
    }
})