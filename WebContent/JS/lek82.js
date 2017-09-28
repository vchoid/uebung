let f = function() {

    for (let index = 0; index <= 2; index++) {

        setTimeout(function() {
            console.log(index);
        }, 2000)

    }
}

f();