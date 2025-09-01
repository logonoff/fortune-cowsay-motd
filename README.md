# `fortune | cowsay` MOTD

<a href="http://www.wtfpl.net/"><img
       src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png"
       width="80" height="15" alt="WTFPL" /></a>

A Node.js MOTD server that pipes `fortune` and `cowsay` together.

## Getting Started

1. run `npm install` to install dependencies.
2. run `npm start` to start the server.

## API Documentation

### `GET /`

Returns a random `fortune | cowsay` message.

#### Params

- `cow` - the cow file to use. use "random" for a random cow (str, optional)
- `eyes` - the cow's eyes (str, optional)
- `tounge` - the cow's tongue (str, optional)

### `GET /cows`

Returns a list of available cow files.

### `GET /fortune`

Returns a random `fortune` message.

### `GET /cowsay`

Returns a random `cowsay` message.

#### Params

- `text` - the text to cowsay (str)

##### Cow

- `f` - the cow file to use (str, optional)
- `r` - whether to use a random cow file (bool, optional)

##### Face

- `e` - the cow's eyes (str, optional)
- `T` - the cow's tongue (str, optional)

##### Modes

- `b` - borg mode (bool, optional)
- `d` - dead mode (bool, optional)
- `g` - greedy mode (bool, optional)
- `p` - paranoid mode (bool, optional)
- `s` - stoned mode (bool, optional)
- `t` - tired mode (bool, optional)
- `w` - wired mode (bool, optional)
- `y` - youthful mode (bool, optional)

## License

[WTFPL](./LICENSE.md)
