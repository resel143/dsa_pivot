let inputString = "ab";

let outputArr = [""];

StringSubsequence(inputString);

function StringSubsequence(str) {
    let i,j;
    for(i=0; i<str.length; i++){
        for(j=i;j<str.length+1;j++){
            let currentSubsequence = str.slice(i,j);
            if(currentSubsequence != '') outputArr.push(str.slice(i,j))
        }
    }
    console.log(outputArr)
}