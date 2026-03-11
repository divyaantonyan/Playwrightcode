

let responses = [200, 201, 404, 500, 404, 200, 503];
let uniqueResponses = [... new Set(responses)];
console.log("Unique responses",uniqueResponses);
for (let test of responses) {

    let status1 = false;

    for (let j = 200; j <= 299; j++) {

        if (test === j) {
            console.log(test + " Response is successful!!");
            status1 = true;
            break;
        }
        
    }

    if (!status1) {
        console.log(test + " First unsuccess code, Response is not successful!!");
        break;

    }
}