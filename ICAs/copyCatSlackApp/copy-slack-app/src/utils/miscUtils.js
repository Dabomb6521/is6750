export const titleCase = (str)=>{
    const myArray = str.split(" ")
    return myArray.map(item=>item.slice(0,1).toUpperCase()+item.slice(1).toLowerCase()).join(" ")
}


