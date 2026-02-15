function checkIndices() {
    client.indices.exists({index: 'users'}, (err, res, status) => {
        if (res) {
            console.log('index already exists');
        } else {
            client.indices.create( {index: 'users'}, (err, res, status) => {
            console.log(err, res, status);
        })
      }
    })
}