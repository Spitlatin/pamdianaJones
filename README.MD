


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------TL;DR

This is a one-page website designed by Brian Milotte for Pam Hickman (Pamdiana Jones) for the release of her first published book "When in Roam" (Turtle Publishing, 2019).

Heroku URL
https://boiling-badlands-63637.herokuapp.com


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------CREDITS

The original layout was a borrowed, royalty-free Bootstrap4 template called "Agency".

Agency found at URL:
https://startbootstrap.com/themes/agency/

Agency Git Repo:
https://github.com/StartBootstrap/startbootstrap-agency




----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------DEV NOTES (notes to self)

page deployed on heroku.com, but the bootstrap css and styles.css were combined, and I believe this slowed downt the site. So, I sought to purge the unused css rules.  I found this, and it worked like a charm:

purge css via:

    1    "npm install purgecss -g"
        
    2    cd into project folder
    (for easier file extension finding,
    not necessary but helpful)

    3    mkdir "result"

    4    "purgecss --css public/css/styles.css --content views/index.html --output result"


---------------------------

deploying on heroku, must have Procfile containing one line of code:

    web: node app.js
    OR
    add start script to JSON

        (I did both, the procfile is what accomplished the task, though)


---------------------------

also, on heroku, make sure to change the listen code on app.js from

    app.listen(3000, function(){
        console.log("listening on 3000");
    });
TO

    let port = process.env.PORT;
        if (port == null || port == "") {
            port = 3000;
        }
    console.log("Listening intently");
    app.listen(port);

-----------------------------


