
async function getInfo(){
    const response = await fetch('https://samples-files.com/samples/code/json/sample1.json');
    const json = await response.json();
    return json;
}

async function showPersonInfo() {
    const info = await getInfo();
    console.log('Info:', info);
}

(async () => {
    await showPersonInfo();
})();

console.log('We do not wait the result of the previous function!');
