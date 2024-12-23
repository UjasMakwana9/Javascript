

function fetchPostdata()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(true)
            {
                resolve("Post data fetched")
            }
            else
                reject("Nathi value apvi")
        },2000)
    })
}
function fetchCommentdata()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(true)
            {
                resolve("Comment data fetched")
            }
            else
                reject("No Data")
        },3000)
    })
}

async function callToDatabase()
{
    try {
        console.log("fetching blog data");
        // Better way of handling all
        // let value = await fetchPostdata();
        // let comment = await fetchCommentdata();
        let [postData,commentData] = await Promise.all([fetchPostdata(),fetchCommentdata()])
        console.log("fetching data done ", postData , commentData );
        // return [value,comment];
    } catch (error) {
        console.log("Error while fetching the data",error);
    }
}

console.log(callToDatabase())