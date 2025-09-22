const MyPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received")
        }, 2000);
    });


async function runPromise(){
    try{
        const message= await MyPromise;
        console.log(message);
    }
    catch(error){
        console.log(error);
    }
}
runPromise();