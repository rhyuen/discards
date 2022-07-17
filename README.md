# About

Where css goes to die.

## What I learned / Got metaphorically punched in the face by

### October 9, 2021

```css
    li{
        aspect-ratio: 1;
    } 

    /*above can replace below*/
    
    li:after { 
        display: block;
        padding-bottom: 100%; 
        content: "";
    }    

```

### December 2, 2021

```html
<img alt="words describing the image" loading="lazy" src="images/imageone.png">
```

`loading="lazy` only loads the image content if the image in the element is visible to the user (in the viewport).

[web.dev](https://web.dev/building-a-media-scroller-component/)

### December 16, 2021

When using translateY/X and wanting a smooth transition, use the 'transform' property.

[Stack Overflow](https://stackoverflow.com/a/22043021)
