const fs = require('fs');

fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully.");
    console.log("File descriptor: " + fd);

    const name="hai";
    fs.writeFile('input.txt', name, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("Data written successfully!");
        console.log("Let's read newly written data.");


        fs.readFile('input.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("Asynchronous read: " + data.toString());


            let appenddata = "\nLearn Node.js";
            fs.appendFile("input.txt", appenddata, "utf8", function (err) {
                if (err) {
                    return console.log(err);
                };
                console.log("Data is appended to file successfully.");

                console.log("Let's read newly appended data.");
                fs.readFile('input.txt', function (err, data) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log(data.toString());

                    fs.close(fd, function (err) {
                        if (err) {
                            return console.error(err);
                        }
                        console.log("File closed successfully.");
                    });
                });
            });
        });
    });
});