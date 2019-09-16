Question 1. In your README to the best of your knowledge please explain what the following lines of code do
1.global.browser = new BrowserHelpers()
```
Custom browser method，you can use  in all files
```

2.global.expect = chai.expect;
```
chai allows developers to choose interfaces based on preferences
```
Question 2. In your README to the best of your knowledge please explain why we are placing the let fizzBuzz = new FizzBuzz outside the it block?
```
Because they are going to be used in the test. We have to tell the test system what we are testing 
```
Question 3. In your README to the best of your knowledge please explain the difference between using === and == in JS?
```
'==='strictly equal, will compare the type and value of two values
'=='Abstract equality, when comparing, will first type conversion, then compare values
```


Question 4. In your README to the best of your knowledge please explain why we are moving (number % 5 === 0) to the top?
```
To prevent numbers from being divisible by multiple numbers
```
Question 5. In your README to the best of your knowledge please explain the difference between feature and unit test
```
unit test Is to test the code we write is running or not 
```


Question 6. In your README to the best of your knowledge please explain what this following code does
```
This code creates an asynchronous function from the describe block，It can reduce the waiting time of the test
```


Question 7. In your README to the best of your knowledge please explain what expectations in the context of testing are
````
Every piece will have a expectations  because we need to give the system a command to let them give us theexpectations  value.
```



Question 8. In your README to the best of your knowledge please write a line to line explanation of what is happening in this code
```
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            let button = document.getElementById('button')
            let displayDiv = document.getElementById('display_answer')
            button.addEventListener('click', () =>{
                let value = document.getElementById('value').value
                let fizzBuzz = new FizzBuzz
                let result = fizzBuzz.check(value)
                displayDiv.innerHTML = result;
            })
        })
    </script>
```



Question 9. In your README to the best of your knowledge please explain what a CDN (Content Delivery Network) is?
```
A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.
```