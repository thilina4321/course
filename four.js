const users = [
    {email:'123@gmail.com', password:'abcd'},
    {email:'456@gmail.com', password:'efgh'},
    {email:'789@gmail.com', password:'igkl'},
]

function trySignUp(email){
    const isUsed = users.find( (e)=>  e.email == email )
    if(isUsed){
        console.log('email already exist');
    }else{
        console.log('you can use this email');
    }
}

// find
// findIndex , indexOf
// filter
// push

trySignUp('123@gmail.com')

