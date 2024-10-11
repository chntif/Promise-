const fs = require('fs');


active = 1

if (0) {
    // 使用回调函数
    fs.readFile('../resourse/song1.txt', (err, data) => {
        if (err)
            throw err;
        console.log(data.toString());
    })
} else if (1) {
    // 使用Promise
    const p = new Promise((res, rej) => {
        fs.readFile('../resourse/song.tx1t', (err, data) => {
            if (err)
                rej(err);
            res(data);
        })
    })
        .then((data) => {
            console.log(data.toString());
        },
            (err) => {
                console.log(err);
            }
        )
}

