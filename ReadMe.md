# npxcard #

Create a nice layout for your `npx your-name-here` card.

Inspired by @bitandbang's package https://www.npmjs.com/package/bitandbang (repo: https://github.com/bnb/bitandbang).

## Example ##

![npxcard](https://i.postimg.cc/0NbQMWc9/npxcard-example.png)

## Usage ##

To create your own `npx you-name-here` command, the easiest thing to do is fork this repo and change it for your own requirements:

* https://github.com/chilts/chilts

## API ##

We *could* have lots of functions to add a section, add a key, change something here and there however we're going
simple and instead you just pass a data structure with the information you want to show.

```
const sections = [
  {
    title: 'Andrew Chilton (Personal)',
    details: [
      [ 'Email', 'andychilton@gmail.com' ],
      [ 'Web', 'https://chilts.org' ],
      [ 'Twitter', 'https://twitter.com/andychilton' ],
      [ 'GitHub', 'https://github.com/chilts' ],
      [ 'GitLab', 'https://gitlab.org/chilts' ],
    ],
  },
  {
    title: 'Apps Attic Ltd (My Company)',
    details: [
      [ 'Email', 'chilts@appsattic.com' ],
      [ 'Web', 'https://appsattic.com' ],
      [ 'Twitter', 'https://twitter.com/AppsAttic' ],
      [ 'GitLab', 'https://gitlab.com/appsattic' ],
    ],
  },
  {
    title: 'Node.js / npm',
    details: [
      [ 'Profile', 'https://www.npmjs.com/~chilts' ],
      [ 'Card', '$ npx chilts' ],
    ],
  },
]
```

We may add section types in the future, but for now there is only one default section type.

Finally, once you do this, your `npx` command can just look like this:

```
#!/usr/bin/env node

const data = {
  // ... your info here ...
}

console.log(npxcard(data))
```

We may add options in the future. Feel free to do pull requests but make sure it's something everyone can use.

## Author ##

```
$ npx chilts
```

(Ends)
