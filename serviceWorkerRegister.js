if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js')
        .then(registration => {
            console.log('Registration successfull with scope: ', registration.scope);
        })
        .catch(err => {
            console.log('Registration failed: ', err);
        });
}
