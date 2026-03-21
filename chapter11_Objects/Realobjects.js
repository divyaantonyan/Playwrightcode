//  Objects are a fundamental data structure in JavaScript that allow us to store and organize data in key-value pairs. 
//  They are used to represent real-world entities and can contain properties (data) and methods (functions). 
//  Objects provide a way to group related data and functionality together, making it easier to manage and manipulate complex data structures.  

const ENV = {
    BASE_URL: "https://staging.myapp.com",
    TIMEOUT: 5000,
    RETRIES: 2,
    BROWSER: "Chrome"
}

const EXPECTED_RESPONSE = {
    status: 200,
    body: {
        user: { role: "admin", active: true }
    }
}
console.log(ENV);
console.log(EXPECTED_RESPONSE);

