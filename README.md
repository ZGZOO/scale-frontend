# Weight Tracker - "Scale"

## Description

Scale is an app that allows the user to input the weight for a certain day, and shows a graph of all the weights in a time frame. It also has a community that allow users to find friends, and talk to/comment on each other.

## Screenshot/GIF of the app

## Live Links

- [Front-end(Netlify)](https://scale-app.netlify.app/)
- [Back-end(Heroku)](??)

## GitHub Repos:

- [Front-end](https://github.com/ZGZOO/scale-frontend)
- [Back-end](https://github.com/ZGZOO/scale-backend)

## Technologies Used

- Front-end: React, SCSS, axios, React-Router
- Back-end: Rails, PostgreSQL

## User Stories

- [See user stories](https://github.com/ZGZOO/scale-frontend/blob/master/planning/planning.md)

## Wireframes

- [See wireframes](https://github.com/ZGZOO/scale-frontend/blob/master/planning/planning.md)

## Solved Problems

### 1. Front End can't log in

- Reason: The data I am sending back to the backend is not in the correct structure. And I am missing `headers`.
  ![The code I had](https://res.cloudinary.com/headincloud/image/upload/v1597281755/Screen_Shot_2020-08-12_at_2.56.08_PM_ms9qcl.png)
  ![The error I am getting](https://res.cloudinary.com/headincloud/image/upload/v1597281679/Screen_Shot_2020-08-12_at_2.56.21_PM_wizvvd.png)
- Solution:
  - In handleSubmit(), instead of just passing in `const [loginInput, setLoginInput] = useState({ username: "", password: "" });` to the axios's `data`, I need to set the structure of the data correctly, so I should have this
    ```
    const data = {
        user: {
            username: loginInput.username,
            password: loginInput.password,
        },
    };
    ```
    and pass this `data` to axios, like this: `data: JSON.stringify(data)`
  - Also, I need to add
    ```
    headers: {
        "Content-Type": "application/json",
    },
    ```
    inside axios({}) too. This is telling the server that the content is in JSON type.

### 2. Front End can't sign up

- Reason: Having the error like "password can't be blank" is because I "white list" the `:password`, which I shouldn't when setting the user_params.
  ![error of can't sign up](https://res.cloudinary.com/headincloud/image/upload/v1597281266/Screen_Shot_2020-08-12_at_2.48.51_PM_ilf105.png)
- Solution:
  The create route is good:

  ```
  # POST /users
  def create
  puts user_params
  @user = User.new(user_params)

  if @user.save
    render json: @user, status: :created, location: @user
  else
    render json: @user.errors, status: :unprocessable_entity
  end
  end
  ```

  But, in the strong params, I need to add `:password` to the permit:

  ```
  # Only allow a trusted parameter "white list" through.
  def user_params
    params.require(:user).permit(:username, :password, :password_digest)
  end
  ```

### 3. Redirect to user page after user signed in

- Reason: Didn't use `Redirect`, or props.history.push(). Only `Route` does not do the work.
- Solution: I used props.history.push()

  App.js
  ![Routes in App.js](https://res.cloudinary.com/headincloud/image/upload/v1597376731/Screen_Shot_2020-08-13_at_8.40.57_PM_jbnzgy.png)

  Login.jsx

  ![Login.jsx](https://res.cloudinary.com/headincloud/image/upload/v1597376731/Screen_Shot_2020-08-13_at_8.41.44_PM_ntvgbj.png)

  Signup.jsx

  ![Signup.jsx](https://res.cloudinary.com/headincloud/image/upload/v1597376731/Screen_Shot_2020-08-13_at_8.42.06_PM_xo7idm.png)

  Logout.jsx

  ![Logout.jsx](https://res.cloudinary.com/headincloud/image/upload/v1597376731/Screen_Shot_2020-08-13_at_8.41.12_PM_ftlyah.png)

### 4. Backend failed after taking all the contents under the nested folder out to the root of the backend directory in order to deploy to Heroku

- Reason: `.env` was lost in the process

  Errors indicating something about .env
  ![error indicating something about .env](https://res.cloudinary.com/headincloud/image/upload/v1597427647/Screen_Shot_2020-08-14_at_10.00.22_AM_dvigru.png)
  ![error indicating something about .env](https://res.cloudinary.com/headincloud/image/upload/v1597427646/Screen_Shot_2020-08-14_at_10.00.33_AM_qtsjq3.png)
  ![error indicating something about .env](https://res.cloudinary.com/headincloud/image/upload/v1597427645/Screen_Shot_2020-08-14_at_10.01.27_AM_u6ppli.png)

  .env file is missing
  ![.env file is missing](https://res.cloudinary.com/headincloud/image/upload/v1597427770/Screen_Shot_2020-08-14_at_10.27.23_AM_jzymhi.png)

- Solution: Carefully move all the files to the desired destination, including the hidden files!! In this case, I lost my `.env`file, so I just created a new one under the right directory (`touch .env`).

  Use this command to move files
  ![use this command](https://res.cloudinary.com/headincloud/image/upload/v1597427779/Screen_Shot_2020-08-14_at_10.20.30_AM_ztenpa.png)

### 5. After successfully deploying backend to Heroku, I still get an error.

![The error in the console](https://res.cloudinary.com/headincloud/image/upload/v1597521108/Screen_Shot_2020-08-14_at_12.41.36_PM_rf5hco.png)

- Reason: Missed a step in the md file!! (Need to read it carefully!)

  The step is: migrate on Heroku
  ![migrate on Heroku](https://res.cloudinary.com/headincloud/image/upload/v1597521221/Screen_Shot_2020-08-14_at_2.01.43_PM_ybdwrx.png)

- Solution: Run the command in the picture above. Again, need to read the doc carefully!

### 6. Error during deploying to Netlify.

![The error during deploying to Netlify](https://res.cloudinary.com/headincloud/image/upload/v1597521246/Screen_Shot_2020-08-14_at_12.07.39_PM_rgqyrb.png)

- Reason: As shown in the picture above.

- Solution:
  - Follow what is suggested in the picture. I added `CI= react-scripts build`
  - Or, advised by Madeline, in the build command in the package.json, add `CI=false` before the command it is currently displaying.

### 7. Backend on Heroku doesn't have the existing users anymore. So, user auth failed.

![In the console](https://res.cloudinary.com/headincloud/image/upload/v1597521255/Screen_Shot_2020-08-14_at_2.11.04_PM_kveibo.png)

![In the Postman](https://res.cloudinary.com/headincloud/image/upload/v1597521849/Screen_Shot_2020-08-14_at_2.15.08_PM_hngrq5.png)

- Reason: Didn't seed the user on Heroku! When I put the database on Heroku, it's an entirely new version of my database. When I run my site locally, it is pulling data from my local machine, which the data exist. When I run my site via Netlify, it is pulling data from backend on Heroku, meaning it no longer has access to my local machine, and I haven't seed any data on Heroku, therefore, no data exist.

- Solution:
  - Write `seed.rb`, and seed it on Heroku: `heroku run rails db:seed`.
  - Run rails on Heroku commands with `heroku run <rails command>`, like `heroku run rails c`.
  - Or, just test the "Sign In" functionality directly through frontend.

## Unsolved Problems

## Snippet of Code
