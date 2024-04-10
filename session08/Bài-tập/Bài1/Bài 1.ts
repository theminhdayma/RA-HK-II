
function parseInput(string: string): number | string | boolean | null | undefined {
    if(string === "true"){
        return true;
    }else if(string === "false"){
        return false;
    }else if(string === "undefined"){
        return undefined;
    }else if(string === "null"){
        return null;
    }else if(parseFloat(string)){
        return parseFloat(string);
    }else{
        return string;
    }  
}

console.log(parseInput("5"));         
console.log(parseInput("true"));      
console.log(parseInput("false"));     
console.log(parseInput("string"));    
console.log(parseInput("null"));      
console.log(parseInput("undefined")); 
