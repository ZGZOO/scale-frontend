# Planning

## User Stories

- User can create an account.
- User can input his/her weight on a certain day.
- User can select the weight as lb or kg.
- User can edit his/her weight.
- User can delete his/her weight.
- User can see a line chart of his/her weight from the day he/she created the account, till the current day.
- User can create multiple periods, with a mandatory start day, and an end day(optional, if not selected, it will be the current date by default)
- User can edit the start day, and the end day.
- User can delete a period.
- User can see a line chart of his/her weight for a period.
- User can set all the line charts to be public or private.
- User can find a friend, and send a friend invitation.
- User can add a friend.
- User can delete a friend.
- User can comment on a friend.

## Wireframes

1. [Phone design](https://res.cloudinary.com/headincloud/image/upload/v1597155769/scale-phone-size-design.png)
2. [Tablet design](https://res.cloudinary.com/headincloud/image/upload/v1597157409/Scale-Tablet-Design.png)
3. [Laptop design](https://res.cloudinary.com/headincloud/image/upload/v1597158405/Scale-Laptop-Design.png)

## Components

- [Components Diagram]()

## Models

User:

- username
- password_digest

scale_api > db > schema.rb

```
create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end
```

scale_api > app > models > user.rb:

```
class User < ApplicationRecord
  has_secure_password
end
```

---

Weight:

- Weight
- Date

Period:

- Start day
- End day (optional)

Relationship:

- User has many weights
- User has many periods
- Period has many weights

## CRUD functionalities

- Creat:
  - account
  - weight + date
  - period
- Read:
  - weight + date
  - line chart
- Update:
  - weight for the day
  - period: start day, or end day
  - (add a friend?)
- Delete:
  - weight for the day
  - period
  - account
  - (a friend?)

## External API

- Google Calendar(?)

## Minimum Viable Product (MVP)

- Fully functional application with all the user stories achieved
- Phone/Tablet/Laptop design all working

## Post-MVP

- Set a weight Goal
- Notification of a new friend (sound? pop-up? email?)

## Project Timeline

(6 weekdays, 1 weekend - total 8 days)

| Task                                                                         | Priority       | Estimated Time (hrs) | Actual Time (hrs) | Timeline  | Completeness |
| ---------------------------------------------------------------------------- | -------------- | -------------------- | ----------------- | --------- | ------------ |
| Mobile First                                                                 | H              | 6                    | ??                | Day 1     | ...          |
| User Authentication (Backend - user model)                                   | H              | 6                    | 2.5               | Day 1     | o            |
| Create React App                                                             | H              | 5 mins               | 5 mins            | Day 1     | o            |
| Create an icon with Canva                                                    | H              | 15 mins              | 45 mins           | Day 1     | o            |
| Set up index.html with icon and delete unnecessary stuff                     | H              | 5 mins               | 5 mins            | Day 1     | o            |
| Set up index.js with 'react-router-dom' (Router)                             | H              | 5 mins               | 5 mins            | Day 1     | o            |
| Set up App.js with 'react-router-dom' ??                                     | H              | 30 mins              | 1                 | Day 1     | o            |
| Create Home Component                                                        | H              | 15 mins              | 15 mins           | Day 1     | o            |
| Create Nav Component                                                         | H              | 15 mins              | 15 mins           | Day 1     | o            |
| Create Login Component                                                       | H              | 15 mins              | 15 mins           | Day 1     | o            |
| Deploy (continuously) to Netlify                                             | H              | 15 mins              | 3                 | Day 1 - 2 | o            |
| Add SCSS                                                                     | H              | 2 mins               | 2 mins            | Day 2     | o            |
| Login Page + Signup Page + User Auth (frontend form)                         | H              | 6                    | 8                 | Day 2     | o            |
| Set up CORS in rails                                                         | H              | 5 mins               | 5 mins            | Day 2     | o            |
| Render success message when user login                                       | H              | 1                    | 10 mins           | Day 2     | o            |
| after user login, show a different router                                    | H              | 1                    | ??                | Day 3     | x            |
| after user logout, go to home and nav will change back with login and signup | H              | 1                    | 30 mins           | Day 3     | o            |
| complete flow of sign in, log in, log out                                    | H              | 2                    | ??                | Day 3     | x            |
| Deploy backend to Heroku                                                     | H              | 1                    | ?                 | Day 3     | x            |
| Set up weight model (lb, kg)                                                 | H (hard, how?) | 6                    | ??                | Day 3     | x            |
| Set up period model (date and weight)                                        | H (hard, how?) | 6                    | ??                | Day 3     | x            |
| User input/edit/delete weight                                                | H              | 2                    | ??                | Day 3     | x            |
| User create/edit/delete a period                                             | H              | 2                    | ??                | Day 2 - 3 | x            |
| User sees the default line chart                                             | H              | 2                    | ??                | Day 2 - 3 | x            |
| User sees the line chart in each period                                      | H              | 2                    | ??                | Day 3 - 4 | x            |
| User set chart to be public or private                                       | H              | 2                    | ??                | Day 3 - 4 | x            |
| User find a friend                                                           | H (hard)       | 3                    | ??                | Day 4     | x            |
| User add a friend                                                            | H (hard)       | 5                    | ??                | Day 4     | x            |
| User delete a friend                                                         | H (easy)       | 5                    | ??                | Day 4     | x            |
| User comment on a friend                                                     | H              | 3                    | ??                | Day 4 - 5 | x            |
| User delete a comment on a friend                                            | H              | 3                    | ??                | Day 4 - 5 | x            |
| Tablet Design                                                                | H              | 6                    | ??                | Day 3 - 4 | x            |
| Laptop Design                                                                | H              | 6                    | ??                | Day 4 - 5 | x            |
| Post MVP                                                                     | L              | 6                    | ??                | Day 6     | x            |
| Better Design                                                                | L              | 6                    | ??                | Day 6     | x            |
| Total                                                                        | /              | 72                   | ??                | /         | x            |

## Questions

- A user have many days/weights/periods?
- Many to many model?
- NoSQL or SQL??
- How can I embed a calendar? Google Calendar?
