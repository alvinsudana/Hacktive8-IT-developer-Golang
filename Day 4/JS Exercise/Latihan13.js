function getUserData(username, fn){
    fetch('https://api.github.com/users/' + username)
      .then(response => {
        //handle response            
        console.log(response);
        return response.json()
      })
      .then(data => {
        fn(data)
        
      })
      .catch(error => {
        
      });    
}

getUserData("alvinsudana", console.log)