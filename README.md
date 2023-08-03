# Spotistat
### Overview
Spotistat was my first "solo" web application. While it is very elementary,
it took a lot of StackOverflow, YouTube, and trial and error to get working. The 
technologies involved are ReactJS for the front end, TailwindCSS for styling, and 
ExpressJS for the backend. I also used various NodeJS packages, although I tried to use
them sparingly.

The functionality is limited to logging in via Spotify and viewing your personal top 
10 tracks and artists from the last four months. This was done using [Spotify's Web API](https://developer.spotify.com/documentation/web-api). 
I used a wrapper for the API, linked [here](https://github.com/thelinmichael/spotify-web-api-node), 
along with ExpressJS for very easy access. Due to how light weight everything is, it
runs relatively fast upon login.

### Future
Spotistat is an application I have a bigger vision for and I plan on coming back to the
Spotify Web API. There is _plenty_ of information that Spotify gives you access to--I want
to build some of these features out sometime later. 

Overall, this project was great experience and has inspired me to make more software; the 
field of software engineering seems much more accessible now.
