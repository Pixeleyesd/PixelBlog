# PixelBlog
My own fullstack blog site! I'll use it for maybe posting updates about projects, sharing ideas, etc. :)

![Homescreen](/images/home.png)

## Note
Some of the stuff started failing so miserably, I had to copy (for the most part) the [stardance blog guide](https://stardance.hackclub.com/missions/blog/guide) and [tonymac129's blog repo](https://github.com/tonymac129/next-blog)

## Features
#### Sign in / sign up with Better Auth!

![signin](/images/signin.png)

#### Post blogs!

![blogsscreen](/images/post.png)

#### Read other peoples blogs!

![readblogsscreen](/images/read.png)

![blogspage](/images/blog.png)
### Other features
A global search bar for blog posts that searches by title and content

Disable signed in users from still going to the sign in page from the nav bar

Custom 404 page

#### Made with Next.js, React, Mongoose and MongoDB

## How to self host on your own server
- Clone the github repo using `git clone https://github.com/Pixeleyesd/PixelBlog` and open the directory with `cd PixelBlog`

- Set up `.env` in this directory using `.env.example` as reference.

- Install npm in that directory with `npm install`

- Install dependencies with `npm i mongoose better-auth`

- Build with `npm run build`

- Deploy with `npm start`

- Access on port `:8114`