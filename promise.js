const getDataWithPromise = new Promise((resolve , reject) => {
    const num = Math.random()*5;
    console.log(num);
    if( num < 0.2){
        resolve('Number is okay!');
    }
    else{
        reject('Error, number is not valid')
    }
})

getDataWithPromise
    .then(data => console.log(data))
    .catch(err => console.error('err', err));