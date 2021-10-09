# StackSource Challenge

Implementation of two API's to complete the challenge using Node.js & Express.js

## Solutions

### API 1 - Using Binary Search Tree with HashMap (Good for many display requests)

#### Insert, Delete

- Time Complexity: O(logn) if Zip codes are unique, otherwise O(n)

#### Has

- Time Complexity: O(1)

#### Display

- Time Complexity: O(n)

### API 2 - Using only HashMap (Good for few display requests)

#### Insert, Delete, Has

- Time Complexity: O(1)

#### Display

- Time Complexity: O(nlogn)

## Running Locally

1. `npm install` to install all dependencies
2. `npm run start:api1` OR `npm run start:api2` to run server on [http://localhost:3000](http://localhost:3000)

## Example Requests

- `wget -qO - http://localhost:3000/insert/10222`
- `wget -qO - http://localhost:3000/delete/10333`
- `wget -qO - http://localhost:3000/has/10334`
- `wget -qO - http://localhost:3000/display`
