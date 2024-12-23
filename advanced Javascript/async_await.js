function fetch_data()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(false)
            {
                resolve({
                    name : "chaiaurcode",
                    url : "https://google.com",
                })
            }
            else{
                reject("this is rejected")
            }
        },3000)
    })
}

async function userData()
{
    try {
        console.log("Fetching the data...");
        const fetchUser = await fetch_data()
        console.log("data...",fetchUser);
        console.log("data:" , fetchUser.name );  
    } catch (error) {
        console.log("Error fetching the data",error);
    }
}

userData()