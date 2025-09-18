// Question 1 : Write a function fetchData(callback) that simulates fetching data with setTimeout. After 2 seconds, it should return "Data fetched!" using the callback.

function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched");
    }, 1000);
}
fetchData((data) => {
    console.log(data);
});


// Question 2 : Write a function addNumbers(a, b, callback) that takes two numbers and a callback, then returns the sum using the callback.

function addNumbers(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 2000);
}
addNumbers(15, 10, (result) => {
    console.log("Sum is:", result);
});


// Question 3 : Create a promise isEven(num) that resolves if the number is even, rejects if odd.

function isEven(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 2 === 0) {
                resolve("Number is even");
            } else {
                reject("Number is odd");
            }
        }, 2000);
    });
}

isEven(4)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });


// Question 4 : Create a promise chain: Fetch user → "User fetched" Fetch posts → "Posts fetched" Finally print "All data ready"

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User fetched");
        }, 2000);
    });
}
function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Posts fetched");
        }, 1000);
    });
}

fetchUser()
    .then((userMessage) => {
        console.log(userMessage);
        return fetchPosts();
    })
    .then((postsMessage) => {
        console.log(postsMessage);
        console.log("All data ready");
    })
    .catch((error) => {
        console.error("Error:", error);
    });


// Question 5 : Rewrite Q4 using async/await.

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User fetched");
        }, 2000);
    });
}
function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Posts fetched");
        }, 1000);
    });
}

async function fetchData() {
    try{
        const userMessage =await fetchUser();
        console.log(userMessage);
        const postsMessage =await fetchPosts();
        console.log(postsMessage);
        console.log("All data ready");
    }
    catch(error){
        console.error("Error:", error);
    }
}
fetchData();


// Question 6 : Create a function delay(ms) that waits for ms milliseconds before returning "Done!" using async/await.

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Done!");
        }, ms);
    });
}

async function runDelay(ms) {
    const message = await delay(ms);
    console.log(message);
}
runDelay(2000);