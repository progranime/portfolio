# portfolio

Portfolio that will be created using MERN technology

# how to create heroku app

https://devcenter.heroku.com/articles/git

# Set config vars

- Config Vars - NPM_CONFIG_PRODUCTION = false

# Add buildpacks

- Add heroku/nodejs

#how to commit to the live heroku app

- git add .
- git commit -am "your comment"
- git push heroku master

#how to rename app

- heroku apps:rename newname
- git remote rm heroku
- heroku git:remote -a newname

# how to change remote app

- heroku git:remote -a jeremyespinosa

# Reasons of error in deployment

- node version must be 10.16.0 to fixed the issue in node-sass-chokidar dependencies
- npm version must be 6.9.0
