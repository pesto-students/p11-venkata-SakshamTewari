function isStrongPassword(){
    let pass = prompt("Enter password");
    if(pass.length < 8)
        return false;
    if(pass.includes("password"))
        return false;
    
    let flag = false;
    for(let i in pass){
        if(pass[i] == pass[i].toUpperCase())
        flag = true;
    }
    if(flag == true)
        return true;
    else
        return false;
}