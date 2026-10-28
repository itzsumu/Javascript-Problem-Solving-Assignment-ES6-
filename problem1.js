function studentIntroduction(student) {
if (typeof student!=="object"){
    return "Invalid";
} 
if(student==null){
    return "Invalid";
}
if(student.name===undefined){
    return "Invalid";
}
if(student.age===undefined){
    return "Invalid";
}
if(student.course===undefined){
    return "Invalid";
}
return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}
