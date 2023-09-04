# `fortune | cowsay` MOTD

<a href="http://www.wtfpl.net/"><img
       src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png"
       width="80" height="15" alt="WTFPL" /></a>

A Node.js MOTD server that pipes `fortune` and `cowsay` together. `lolcat` is
supposed to be there as well; however, unfortunately Vercel filters out control
characters. Furthermore Ubuntu also filters out control characters in the
`50-motd-news` script, so it wouldn't work anyway.

## Getting Started
1. run `npm install` to install dependencies.
2. run `npm start` to start the server.

## License
[WTFPL](http://www.wtfpl.net/)
