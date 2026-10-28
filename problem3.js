function countHashtags(caption) {
if(typeof caption!=="string"){
return "Invalid";
}
let words=caption.split(" ");
let hashtagCount=0;
let longestTag="";
for(let i=0;i<words.length;i++){
if(words[i].startsWith("#")){
hashtagCount++;
let tag=words[i].slice(1);
if(tag.length>longestTag.length){
longestTag=tag;
}
}
}
return{
hashtagCount:hashtagCount,
longestTag:longestTag
};
}
