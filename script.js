// const modalcontainer = document.querySelector('.modal-container');

// const modalTrigger = document.querySelectorAll('.modal-trigger1');

// modalTrigger.forEach(trigger => {
//   trigger.addEventListener('click', toggleModal );
// });


const modalbtn = document.querySelectorAll('[data-toggle="modal"]');


for(let button of modalbtn){
    button.addEventListener('click', function(e){
        let target = this.dataset.target;
        
        let modal = document.querySelector(target);
        modal.classList.add('active'); 

        const closebtn = modal.querySelectorAll('.close-modal');

        for(let close of closebtn){
            close.addEventListener("click", () =>{
                modal.classList.remove('active');
            })
        }

        modal.addEventListener("click", function(){
            this.classList.remove('active');
        })

    });
}


