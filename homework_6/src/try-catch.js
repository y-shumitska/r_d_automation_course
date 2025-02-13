function throwError() {
    throw new Error('The source does not exist');
}


async function callNonExistingSource(){
    const response = await fetch ('https://samples-files-bla-bla.com/samples/code/json/sample1.json');
    const json = await response.json();
    return json;
}

async function callExistingSource(){
    const response = await fetch ('https://samples-files.com/samples/code/json/sample1.json'); //https://www.myip.com/1 - try this url to see the custom error
    if (!response.ok) {
        throwError();
    }
    const json = await response.json();
    console.log(json);
    return json;
}

(async () => {
    try {
        await callNonExistingSource();
    } catch (e) {
        console.log('Error:', e.message);
        await callExistingSource();
    }
})();
