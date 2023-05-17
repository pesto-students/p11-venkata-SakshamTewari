function drawTriangle(triangleSize){
    var str = "";
    for(let i = 1 ; i <= triangleSize ; i++ ){
        for(let j = 1 ; j <= i ; j++){
            str += '*';
        }
        console.log(str);
        str = "";
    }
}