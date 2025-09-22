
const MyPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received")
        }, 2000);
    });


MyPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });