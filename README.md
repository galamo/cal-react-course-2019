# React course CAL

- run npm install
- run npm install react-bootstrap
- import 'bootstrap/dist/css/bootstrap.min.css';

## ex Components

- create nav bar component
- wrap bootstrap react component

## ex Ref

- On navbar component
- Create a ref to HTML input element
- Focus the element on page rendered
- draw inside the input place holder dots => . , each 300 ms another dot,
- when dots length reached to maximum 10 dots .......... intiate the placeholder to .

## ex Filters

- Add the following filters to countries
- Countries search - free text
- Region search - free text / dropdown
- has borders - When has borders is checked only countries with borders will be presented

## ex Routing

- create registration page
- add registration page to our routing

## ex Controled components - Form

- Create a registration user form

## ex Axios request to register user

- Implemenet registration using axios

### POST <IP>:<PORT>/auth/register
- http://10.103.51.77:3200/auth/register
- payload: const { email, password }
 {
	"email":"gal11@ga11l.com",
	"password":"gal123",
	"first_name":"gal",
	"last_name":"am"
}

### POST <IP>:<PORT>/auth/login

- http://10.103.51.77:3200/auth/login
- payload: const { email, password }
 {
	"email":"gal11@ga11l.com",
	"password":"gal123",
	"first_name":"gal",
	"last_name":"am"
}
- payload: const { email, password }


### GET <IP>:<PORT>/flights
- authorization header
- jwt token
- { authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJnYWwxMUBnYTExbC5jb20iLCJwYXNzd29yZCI6bnVsbCwiZmlyc3RfbmFtZSI6bnVsbCwibGFzdF9uYW1lIjpudWxsLCJpYXQiOjE1NzcwODgzODIsImV4cCI6MTU3NzA5MTk4Mn0._gtsNX16ec8ZdhQbCNEF0kzWnn1AmU9h_aOnKYyiNUo" }

## ex Hooks

- convert the register form page to functional component using out custom hook

## redux
- npm install redux react-redux redux-thunk @types/react-redux @types/redux
- install redux dev tools in chrome


## ex redux
### Customers Page 
- GET http://10.103.51.77:3200/flights/customers { authorization: token }
- Create customersReducers
- Create Async action GET_CUSTOMERS
- Create Sync Actions for Success, Error and pending
- Create client route Customers
- Execute nitial request on component mounted, useffect
 