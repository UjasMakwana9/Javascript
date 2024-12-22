let response = 'pending'
function fetch_data()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success = false;
            if(success)
            {
                resolve("Data fetch successfully")
            }
            else
            {
                reject("Error fetching data")
            }
        },3000)
    })
}

   response = fetch_data()
                    .then((data)=>{
                        console.log(data);
                        // response = "resolved"
                        return "resolved"
                    })
                    // .then((value)=>{
                    //     console.log(value);
                    // })
                    .catch((error) =>{
                        console.log(error);
                        return "rejected"
                    });
setTimeout(()=>console.log(response),6000)
// console.log(response);
