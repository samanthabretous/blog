---
templateKey: blog-post
title: Build Cookie Consent Pop Up in React
date: 2019-10-12T10:34:22.668Z
featuredImage: /img/adding-additional-widgets/adding-additional-widgets-to-netlify-cms-thumb.png
thumbnail: /img/adding-additional-widgets/adding-additional-widgets-to-netlify-cms-thumb.png
isFeaturedPost: false
draft: true
description: All websites now a days a cookie consent notification on it so why shouldn't my website have one too. Follow along so your React website can be up to date with all that legal jargon.
tags:
  - tutorial
  - cookie
---

In a world where data collection laws are strict, it is vital to let users know that you are collecting and evaluating their behavior. Because of this it is extremely common to see consent forms pop up on all websites you visit. Well the consent prompt might not be particular useful -- when was the last time ready a website's cookie policy? Its important to add a notice to help bring awareness about privacy and data collection on the web. 

There are tons of consent form plugins you can add to your website. While they are great to use, I tend to try and avoid adding a bunch of unnecessary code to my website. And now you have to either. So I made a light weight version of a cookie consent form you can steal and put on your website for free. 

One thing I have also done is in my google analytics script I have chosen to not collect any personal data. By updating the config function I am anonymizing IP addresses for all events. Always check your function syntax against the [Google developers example](https://developers.google.com/analytics/devguides/collection/analyticsjs/ip-anonymization) before you add it to your existing tracking code. This will make sure you avoid any syntax errors.

```javascript
// usage for gtag.js
gtag('config', <'GA_TRACKING_ID'>, { anonymize_ip: true })
```

```javascript
// usage for analytics.js
ga('set', 'anonymizeIp', true)
```

Technically when adding this line we are no longer collecting personal data so a consent form is not required. Please note I'm not a lawyer, I just build cool stuff. So this and this whole article may not necessarily be [GDPR](https://eugdpr.org/) compliant. Please do your own research and don't _crumb_ at me, bro!

<img src="https://media.giphy.com/media/8cfNwKytlzCVhhElCq/giphy.gif" /></div>


#### Step 1
First order of business is to create a React component called `CookiePopUp`. We will need to call this component on the global page within the code. This is so no matter what page the user lands on the cookie modal will appear. For me, I do not have a global file but instead a component called `Layout` that includes all my meta data that I insert on all my pages. 

```javascript
import React from "react"

export default const CookiePopUp = () => {
  return <p>I am the beginning of a yummy consent</p>
}
```
*** 

#### Step 2
Next, we need to create a function that sets a cookie that we will use later when the user has accepted the consent. JavaScript's document property lets us [read and write cookies](https://www.w3schools.com/js/js_cookies.asp) associated with the document. Its like a _batch_ made in heaven, so we will just use that for handing cookies. 

```javascript
  /**
   * Set a cookie
   * @param cname - cookie name
   * @param cvalue - cookie value
   * @param exdays - expiry in days
   */
  const _setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };
```

***

#### Step 3

We also need to create a function to get the cookie that we can use to determine if we need to show the consent pop up. Oh ginger snaps, we can use the document cookie property again. Copy pasta.
[DESSCRIBE WHATS GOING ON HERE]

```javascript
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
```

***

#### Step 4
We will go head and add some [jsx](https://reactjs.org/docs/introducing-jsx.html) to the `CookiePopUp` component. The only part that is important here is the `GOT IT` button. We do not want the pop to go away unless the user presses the button. 

```
```

#### Step 
Now the part that will put a _chip_ on your shoulder. Animations!!!




Apologies for all the cookie puns. I found them pretty entertaining and I was hoping to _bake_ your day a little better.

Baby, we go together like milk and cookies.
Its like frosting a cookie

