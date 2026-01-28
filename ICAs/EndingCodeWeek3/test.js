// const extendedWarrenty = (name)=>{
//     console.log(`Hi ${name}. We've been trying to reach you about your car's extended warrenty`);
// }

// extendedWarrenty("Toa")

function itsOver(name){
    return `It's over, ${name}, I have the high ground`
}

function apply(nameArray,func){
    return nameArray.map(name=>func(name));
}

console.log(apply(["C3P0","R2D2","JarJar"]))