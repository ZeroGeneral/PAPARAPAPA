//NOTE MAKE SURE TO ADD type="module" in your html! refer to ../html/sign.html line 15
import data from "../assets/data/data.json" with { type: "json" };
// IMPORT ALL THE DATA INSIDE DATA.JSON and store it in a variable called data.
//store in a variable
let users = data.data

//REFRESH DATA IF EVER SOMETHING WAS OVERWRITTEN OR ADDED
if (!sessionStorage.getItem("users")){
    console.log("Setting users")
    sessionStorage.setItem("users",JSON.stringify(users))
}else{
    users = JSON.parse(sessionStorage.users)
}
//access data which is stored in a data variable refer to ../assets/data/data.json line 2

//store your required fields such as the email,password and login.
let login = document.getElementById("logitin")

function saveData(id,user,pass){
    console.log(users)
    users[users.length] = {"username":user,"password":pass}
    sessionStorage.setItem("users",JSON.stringify(users))
    console.log(users)
    alert("Sign Up Successful! Proceed to Log In")
    window.location.href = "../html/login.html"
}


//detect button click of login
login.addEventListener('click',() => {
    let em = document.getElementById("em")
    let ps = document.getElementById("ps")
    let ps2 = document.getElementById("ps2")
    //check first if em and password is NOT provided and send an alert
    //this checks if the email and password has a value
    if (!(em.value && ps.value &&ps2.value)){alert("MAKE SURE TO ENTER ALL THE VALUES")}
    //validate data if both are provided
    else{
        //CHECK IF USERNAME ALREADY EXISTS!!

        //if everything is provided double check botth passwords if they are the same
        if(ps.value == ps2.value){
            //if all values are entered and are correct proceed to save the data
            console.log(users.length)
            let userExists = false
            for(let i = 0; i<users.length;i++){
                if(users[i].username == em.value){
                    userExists = true
                    alert("USERNAME ALREADY EXISTS!!")
                }
            }
            //save data if username doesnt exist in database!
            if(!userExists){saveData(users.length,em.value,ps.value)}
        }else{
            alert("Make sure both passwords are the same!")
        }
    }
})