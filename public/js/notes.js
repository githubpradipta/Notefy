fetch('http://localhost:3000/api/getallUsers')
.then(res=>res.json())
.then(data=>{
    console.log(data);
    const cardContainer = document.querySelector('.container1');

    // content.push(temp)
    data.map((data, i, row) => {
        // if (i + 1 === row.length) {
            const cardElement = document.createElement('div')
            cardElement.classList.add('card')
            cardElement.innerHTML = `
            <div class="card-details">
                <div class="imagediv">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.2sA_t9fLcvDFMqNfjWhEkAHaE8&pid=Api&P=0" alt=""
                        srcset="" class="n-img">
                </div>
                <p class="text-title">${data.fullname}</p>
                <p class="text-body">${data.username}</p>
            </div>
            <button class="card-button">Download</button>
    `
            cardContainer.appendChild(cardElement);
        // }
    })
})

   
