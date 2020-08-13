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

## Unsolved Problems

## Snippet of Code
