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

## Minimum Viable Product (MVP)

- Fully functional application with all the user stories achieved
- Phone/Tablet/Laptop design all working

## Post-MVP

- Set a weight Goal
- Notification of a new friend (sound? pop-up? email?)

## Project Timeline

(6 weekdays, 1 weekend - total 8 days)

| Task                                        | Priority       | Estimated Time (hrs) | Actual Time (hrs) | Timeline  | Completeness |
| ------------------------------------------- | -------------- | -------------------- | ----------------- | --------- | ------------ |
| Mobile First                                | H              | 6                    | ??                | Day 1     | x            |
| Backend                                     | H              | 6                    | ??                | Day 1     | x            |
| Set up user model (username, password)      | H (hard, how?) | 6                    | ??                | Day 1     | x            |
| User Authentication?                        | H (hard, how?) | 6                    | ??                | Day 1 - 2 | x            |
| Set up a calendar (date) (Google Calendar?) | H (hard, how?) | 6                    | ??                | Day 1 - 2 | x            |
| Set up weight model (lb, kg)                | H (hard, how?) | 6                    | ??                | Day 1     | x            |
| Set up period model (date and weight)       | H (hard, how?) | 6                    | ??                | Day 1     | x            |
| User create an account                      | H              | 2                    | ??                | Day 1 - 2 | x            |
| User input/edit/delete weight               | H              | 2                    | ??                | Day 1 - 2 | x            |
| User create/edit/delete a period            | H              | 2                    | ??                | Day 2 - 3 | x            |
| User sees the default line chart            | H              | 2                    | ??                | Day 2 - 3 | x            |
| User sees the line chart in each period     | H              | 2                    | ??                | Day 3 - 4 | x            |
| User set chart to be public or private      | H              | 2                    | ??                | Day 3 - 4 | x            |
| User find a friend                          | H (hard)       | 3                    | ??                | Day 4     | x            |
| User add a friend                           | H (hard)       | 5                    | ??                | Day 4     | x            |
| User delete a friend                        | H (easy)       | 5                    | ??                | Day 4     | x            |
| User comment on a friend                    | H              | 3                    | ??                | Day 4 - 5 | x            |
| User delete a comment on a friend           | H              | 3                    | ??                | Day 4 - 5 | x            |
| Tablet Design                               | H              | 6                    | ??                | Day 3 - 4 | x            |
| Laptop Design                               | H              | 6                    | ??                | Day 4 - 5 | x            |
| Post MVP                                    | L              | 6                    | ??                | Day 6     | x            |
| Better Design                               | L              | 6                    | ??                | Day 6     | x            |
| Total                                       | /              | 72                   | ??                | /         | x            |

## Questions

- A user have many days/weights/periods?
- How about the other way around?
- Many to many model?
- How can I just embed a calendar? Google Calendar?
