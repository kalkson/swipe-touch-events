# swipe-touch-events

Javascript based library that allow use swipe-touch events on DOM

# importing

```javascript
import 'swipe-touch-events';
```

or import by hand

# usage

```javascript
document.addEventListener('swiperight', () => {
  console.log('swiped right');
});
```

If you want to use events on specific DOM element:

```javascript
element.addEventListener('swipedown', () => {
  console.log('swiped down');
});
```
