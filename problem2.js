function filterActiveUsers(users) {
if(!Array.isArray(users)){
return "Invalid";    
}
if(users.length==0){
return "Invalid";
}
for(let i=0;i<users.length;i++){
if(!("isActive"in users[i])){
return "Invalid";
}
}
let activeUsers = users.filter(user => user.isActive === true);
return activeUsers;
}
