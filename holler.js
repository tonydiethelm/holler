/*
This is meant to replace console logs in express routes and middleware. 
You can place this in your express routes, then comment them out when you don't need them any more. 

*/


const holler = (request, response, next) => {
  
  console.log(`\n \nHoller! going through ${request.path}`);
  
  //request.body
  if(request.hasOwnProperty('body')){
    console.log('request body is...', request.body, typeof request.body)
  }else{
    console.log('There is no request.body');
  }

  //request.params
  if(request.hasOwnProperty('params')){
    console.log('request params: ', request.params, typeof request.params)
  }else{
    console.log('There is no request.params');
  }

  //request.query
  if(request.hasOwnProperty('query')){
    console.log('request query: ', request.query, typeof request.query)
  }else{
    console.log('There is no request.query');
  }

  //response.locals
  if(response.hasOwnProperty('locals')){
    console.log('response locals: ', response.locals, typeof response.locals)
  }else{
    console.log('There is no response.locals');
  }

  //response.body
  if(response.hasOwnProperty('body')){
    console.log('response body: ', response.body, typeof response.body)
  }else{
    console.log('There is no response.body');
  }

  console.log('End Holler\n\n')
  return next();
}

module.exports = holler;