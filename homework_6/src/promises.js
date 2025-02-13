
function getInfo(){
    return fetch('https://samples-files.com/samples/code/json/sample1.json')
        .then((response) => response.json())
        .then((info) => {
            if (info) {
                showPersonInfo(info);
            }
        })
        .catch((error) => {
            console.error('Some error:', error);
        });

}

function showPersonInfo(resp) {
    console.log('Info:', resp);
}

getInfo();

console.log('We do not wait the result of the previous function!');
