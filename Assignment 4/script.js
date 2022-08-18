


// let button1 = document.getElementById('btn1');
// let button2 = document.getElementById('btn2');
// let button3 = document.getElementById('btn3');

// let formElement = document.body.children[0].children[0];
// let actionattribute = formElement.attributes.action.value;

// console.log(actionattribute);
// console.dir(formElement);

function actionattributeChange(event) {
    let link = event.target.value;
    console.log(link);
    let formElement = document.body.children[0].children[0];
    formElement.attributes.action.value = link;
}

// button1.addEventListener('click', actionattributeChange(event));
// button2.addEventListener('click', actionattributeChange(event));
// button3.addEventListener('click', actionattributeChange(event));