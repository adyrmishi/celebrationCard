function getsCardInfo() 
{
    let greeting = document.querySelector('#greeting').value
    let event = document.querySelector('#event').value
    let message = document.querySelector('#message').value
    let cardDetail = {greeting, event, message}
    return cardDetail
}

function removeForm()
{
    document.querySelector('#greeting').remove()
    document.querySelector('#event').remove()
    document.querySelector('#message').remove()
    document.querySelector('#submit').remove()
}

function buttonClick()
{
    let submitButton = document.querySelector('#submit')
    submitButton.addEventListener('click', e => {
        e.preventDefault();
        let cardDetails = getsCardInfo();
        removeForm();
        createCard(cardDetails);

    })
}

function createCard(cardInfo)
{
    let card = document.createElement("p")
    let cardText = document.createTextNode(cardInfo.greeting)
    card.appendChild(cardText)
    let body = document.querySelector("#body")
    body.appendChild(card)
}

buttonClick();