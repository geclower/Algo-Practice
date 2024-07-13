function saveThePrisoner(prisoners, sweets, start) {
    // let warn = start

    // for(let i = 1; i<sweets; i++){
    //     if(warn == prisoners){
    //         warn = 1
    //     }else{
    //         warn++
    //     }
    // }
    
    // return warn

    return (start + sweets - 1) % prisoners || prisoners;
}

//inculded both my original solution and a more efficent one after some research.