async function getUsers(){
    try{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()  
    return data.map(person => person.name)
                    .filter(name => name.length > 17)                
    }catch(error){
        console.error(error)
    }                   
}

// getUsers()
// .then((data)=>console.log(data))


async function getData(){
    try{
    const data = await getUsers()
    console.log(data);   
    }catch(error){
    console.error(error)
    }
}

await getData();


