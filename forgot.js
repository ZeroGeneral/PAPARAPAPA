//NOTE MAKE SURE TO ADD type="module" in your html! refer to ../html/login.html line 14
import data from "../assets/data/data.json" with { type: "json" };
// IMPORT ALL THE DATA INSIDE DATA.JSON and store it in a variable called data.
//store in a variable
let users = data.data
//access data which is stored in a data variable refer to ../assets/data/data.json line 2

//REFRESH DATA IF EVER SOMETHING WAS OVERWRITTEN OR ADDED
if (!sessionStorage.getItem("users")){
    console.log("Setting users")
    sessionStorage.setItem("users",JSON.stringify(users))
}else{
    users = JSON.parse(sessionStorage.users)
}
//store your required fields such as the email,password and login.
let login = document.getElementById("logitin")

//saves data
function saveData(id,user,pass){
    console.log(users)
    users[id].password = pass
    sessionStorage.setItem("users",JSON.stringify(users))
    console.log(users)
    alert("Recovery Successful! Proceed to Log In")
    window.location.href = "../html/login.html"
}


console.log(users)
//detect button click of login
login.addEventListener('click',() => {
    let em = document.getElementById("em")
    let ps = document.getElementById("ps")
    let ps2 = document.getElementById("ps2")

    //check if values are present
    if (!(em.value && ps.value && ps2.value)){alert("MAKE SURE TO ENTER ALL VALUES")}
    else{
        let recovered = false
        //check if passwords are same
        if(ps.value == ps2.value){
            //LOOP THROUGH THE DATA 
            for(let i = 0;i < users.length;i++){
                //check if the username matches or if username is ni
                if(users[i].username == em.value){
                    let newPass = ps.value
                    //overwrite existing data
                    recovered = true
                    saveData(i,users[i].username,newPass)
                    break;
                }
            }
            if(!recovered){alert("IT SEEMS LIKE THE USER IS NOT REGISTERED IN OUR DATABASE")}
        }else{
            alert("Make sure both passwords are the same!")
        }
    }
})