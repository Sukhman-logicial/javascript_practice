// Promises

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("Complete promise successfully");
        // resolve("Success");
        reject("Network Error");
    });
};

let promise = getPromise();
promise.then(() => {
    console.log("Promise fullfilled", res);
});

promise.catch(() => {
    console.log("rejected", err);
});

console.log(promise);


// Async function

function asyncfunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some Data");
            resolve("Success");
        }, 4000);
    });
}

let p1 = asyncfunc();
p1.then((res) => {
    console.log(res);
});