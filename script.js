const cards = document.querySelectorAll('.card');

for( const card of cards){
//  console.log(card);
    
    card.addEventListener('click', () =>{
    removActive()
    card.classList.add('active');
})
}
function removActive(){
    for( const card of cards){
            console.log(card);
            card.classList.remove('active');
            }
}


// function AddActiveClass(){
//     for( const card of cards){
//     console.log(card);
//     card.classList.add('active');
//     }
// }