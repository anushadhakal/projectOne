const buttons = document.querySelectorAll('.button')
    console.log(buttons);
    
    buttons.forEach(function (button){
        button.addEventListener('click',function(e){
            // console.log(e)
            console.log(e.target);
            
            if(e.target.id === 'grey'){
                document.body.style.backgroundColor = "grey"
            }
            if(e.target.id === 'red'){
                document.body.style.backgroundColor = "red"
            }
            if(e.target.id === 'blue'){
                document.body.style.backgroundColor = "blue"
            }
            if(e.target.id === 'yellow'){
                document.body.style.backgroundColor = "yellow"
            }
        })
    })               

    // const buttons = document.getElementsByClassName('button')
    // const arr = Array.from(buttons)
    // arr.forEach(function (button){                                       
    //     button.addEventListener('click',function(e){
    //         if(e.target.id === 'grey'){
    //             document.body.style.backgroundColor = "grey"
    //         }
    //         if(e.target.id === 'red'){
    //             document.body.style.backgroundColor = "red"
    //         }
    //         if(e.target.id === 'blue'){
    //             document.body.style.backgroundColor = "blue"
    //         }
    //         if(e.target.id === 'yellow'){
    //             document.body.style.backgroundColor = "yellow"
    //         }
    //     })
    // })       
    
    