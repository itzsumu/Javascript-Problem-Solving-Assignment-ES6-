function bonusScore(scores) {
if(!Array.isArray(scores)){
return "Invalid";
}
if(scores.length==0){
return "Invalid";
}
for(let i=0;i<scores.length;i++){
if(typeof scores[i]!=="number"){
return "Invalid";
}
}
let updatedScores=scores.map(score=>score+10);
let total=updatedScores.reduce((sum,scores)=>sum+scores,0);
return total;
}

