## The Friendship Algorithm

I'm a big fan of [The Big Bang Theory](http://www.cbs.com/shows/big_bang_theory/) and I couldn't resist playing around with Sheldon's friendship algorithm. It's pretty much one object represented as ```Sheldon``` guided by the module pattern (thanks to [Addy Osmani](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)).

I encourage you to fork this code and get some zen coding in. Since the logic is "safely" protected by ```Sheldon```, you should be able integrate any boilerplate of your choice for some fun interfaces. Also, feel free to refactor the logic when needed. It could always be better. That said, kudos to Wolowitz for plotting out the loop counter and escape.

Usage
--------------
### TypeScript
```
import { createSheldon } from './ts/sheldon.ts';
const Sheldon = createSheldon();
Sheldon.ask();
```

### Javascript
```
Sheldon.ask();
```

### Python
The python version of The Friendship Algorithm (created by [@amarrerod](https://github.com/amarrerod)) uses a possible friend which answers Shelly's questions with randomly selected options. Therefore, every execution is a chance of getting a new friend.

```sh
    python3 algorithm.py
```





Demo
--------------
[View Demo](https://www.marklreyes.com/the-friendship-algorithm-in-javascript/)

Flowchart
--------------
![alt text](https://github.com/marklreyes/The-Friendship-Algorithm/blob/master/the-friendship-algorithm-1024x809.png)

Watch Video Clip
--------------
[The Big Bang Theory: Season 2, Episode 13](https://www.youtube.com/watch?v=k0xgjUhEG3U)

