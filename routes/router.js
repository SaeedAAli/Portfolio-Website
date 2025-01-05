const router = (app) => {

    app.get("/", (request, response) => {
        response.render("./pages/home");
    });

    app.get("/Work",(request, response) =>{
        response.render("./pages/Work")
    });

    app.get("/About",(request, response) =>{
        response.render("./pages/About")
    });

    app.get("/Contact",(request, response) =>{
        response.render("./pages/Contact")
    });

    app.get("/hello",(request, response) =>{
        response.render("./pages/backuphomepage")
    });


    // Add your other routes in here

};

// Make the router available externally
module.exports = router;