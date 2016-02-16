# JS Exercise # 1

Description
---

The goal is to build a small click-based auth system. Meaning that the system must detect a combination of clicks according to criterias defined below.

The prototype has the following elements :
- An area where the user may click freely;
- An area for the success or failure message to appear.
- Whatever info you find necessary for users to understand what to do.

The coordinates of the clicks are sent to the server. These points constitute the key. The server replies with success if the key is correct, otherwise it replies with failure. The client must not hold information that would allow one to deduce the correct key or any information about it. The key is correct if and only if:

- It is composed of 3 clicks;
- The first click is to the left of the other two;
- The second click is to the right of the other two;
- The third click below the other two (order matters!).
- It must work and look good on mobile
- On screens smaller than 600px, use Tahoma as a typeface. Larger or equal to 600px, use Verdana.
- Bonus points for creative solutions
- The server must handle all requests gracefully - even tampered 'malicious' ajax requests: no 5xx http responses ever.

Duration
---
~ 3 Hours

Solution
---
- launch the Node server with `node server.js`
- access index.html in a browser and interact with the canvas

Technologies used
---
- [Node.js](https://nodejs.org/en/)
- [AngularJS](https://angularjs.org/)
- [Animate.css](https://daneden.github.io/animate.css/)
