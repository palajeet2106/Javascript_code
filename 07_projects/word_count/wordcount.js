function ccount(){
//     let msg = document.getElementById('msg').value
//     document.getElementById('characters').innerHTML = msg.length

//     let wc = 0;
//     let ar = msg.split('')
//     for(let i = 0; i < ar.length; i++){
//         if(ar[i] == ' '){
//             wc += 1
//         }
//     }
//     document.getElementById('words').innerHTML = wc
// }



// OR


    
    let msg = document.getElementById('msg').value
    document.getElementById('characters').innerHTML = msg.length

    
    let ar = msg.split(' ')
    
    document.getElementById('words').innerHTML = ar.length
    document.getElementById('vc').innerHTML = vowel(msg , vc)
    
}
let vc = 0; 
function vowel(msg , vc){
    let vow = ['a','e','i','o','u','A','E','I','O','U']
    for(let i = 0; i < vow.length; i++){
        for(let j = 0; j < msg.length; j++){
            if(msg[j] == vow[i]){
                vc += 1
            }
        }
    }
    return vc;
}