function isBalanced(string){

    let stack = new Stack();

    for(let i=0 ; i<string.length(); i++){
        if(string[i]=='(' || string[i] == '{' || string[i] == '[')
            stack.push(string[i]);
        else{
            if((string[i] !== ')' && stack.peek()!=='(') ||  (string[i] === ']' && stack.peek()!=='[') || (string[i] === '}' && stack.peek()!=='{') )
                return false;
            else
                stack.pop();
        }
    }

    if(stack.isEmpty()===false)
        return false;
    return true;
        
}