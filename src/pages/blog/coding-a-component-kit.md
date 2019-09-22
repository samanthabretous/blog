---
templateKey: blog-post
title: Coding a Component Kit
date: 2019-09-01T10:34:22.668Z
featuredImage: /img/coding-a-component-kit/Coding_a_component_kit_thumbnail_samantha_bretous@2x.png
thumbnail: /img/coding-a-component-kit/Coding_a_component_kit_thumbnail_samantha_bretous@2x.png
isFeaturedPost: false
draft: false
description: Lessons I learned when building out a component kit for a software engineering team.
tags:
  - tutorial
  - react
---

The idea of creating a shared library of components for all engineers to use is an easy concept to understand. The difficulty, is deciding which components to create and share amongst teams. After helping build a full library at my previous job, I was able break it down 5 key points of why you should start building components as well as some items to consider when coding new components.

!["why are we talking about components"](/img/coding-a-component-kit/why_are_we_talking_about_components.png "Why are we talking about components")

###1. [Technology is changing we should too](#technology-is-changing-we-should-too)

We have a bunch of new technologies that weren’t available before. For example, React, which was designed to be the reusable Lego blocks of your UI that presented data that changed over time. As developers we no longer need to copy and paste the same code on multiple pages. We have the ability to create abstractions and make our code more scalable.

###2. [Work less and write less code](#work-less-and-write-less-code)

Wouldn’t it be nice to work less and write less code as an individual contributor. Well with components that’s an option. With a component base system in place, a developer's focus gets place on pulling and interpolating data not that other thing called CSS. We are able to "stack" components right next to each other, plug in data, and we are done. Everything a developer might have enjoyed when they were playing with legos as a child except the stepping on legos part, of course.

### 3. [Manage Projects More Efficiently](#manage-projects-more-efficiently)
Since there isn't a need to copying and pasting anymore, our code base gets reduce. Which in return the actual files with get smaller, and we can create faster UI experiences. When updates need to happen on the component level it will happen across app and projects. And if you didn't make duplicate components you will just have to update in one place. Isn't that unbelievable?

###4. [Isolate Bugs](#isolate-bugs)
You know what else is unbelievable...when bugs can be isolated. No more guessing if a component is causing a breakage, because there are mechanisms in place. A component is going to be well tested and we will talk about that later. Developers can eliminate the component being the problem.

###5. [Constant UX across multiple platform](#constant-ux-across-multiple-platform)
The most crucial reason to have components is that it sets a foundation to create a consistent UX across all apps and projects. Now there are a lot of awesome pre-packaged component libraries like Material UI and Semantic. So why don't companies use them… well that simple it's for branding. And when one deals with branding there become an additional layer of workflow.

>"Software is often built by incredibly large teams of people. The challenge to create coherent experiences multiplies exponentially as more people are added to the mix. Over time, no matter how consistent or small a team is, different people will contribute new solutions and styles, causing experiences to diverge." - The lead designer from Airbnb Karri Saarinen

The more inconsistent the user experience, the slower product development becomes and vice versa.

###[Fundamental Pieces of a Component](#fundamental-pieces-of-a-component)
So now you know why components are extremely impressive. Now let's figure out what makes a component.

- Reusable: that means they can be extended. Allowing you to easily create new components from existing ones.
- Composable: can be combine with other components together to create new experiences.
- Encapsulated: Isolated markup. Isolated styles. Isolated behavior.

So that the tech book definition of what makes a component. But after working with them for some time. I’ve come up with some other tips and tricks we can use.

!["static component"](/img/coding-a-component-kit/component_kit-static.png "Static Component")

**Static:** Components are like your applications primitives. The only task a component should have is rendering data. By whatever means necessary it should not be fetching its own data. As a developer we will never know where that component will live within an application in the future or how other developers will use it.

!["similar api similar component"](/img/coding-a-component-kit/component_kit-similar_api_similar_component.png "Similar API Similar Component")

**If you have similar components. Have similar api for those components.**

(Card on the left. List item on the right.)

At my previous job theses two components were built by two different developers, which lead to different property naming conventions. The card component had a image_uri property and the list item had a image property. While this seems like a small detail at first, when the component library got larger, something small became a problem within the app. And it took more time for developers to memorize the component's API.

!["Override Style"](/img/coding-a-component-kit/component_kit-override_style.png "Override Style")

**Override Styles:** When working with React Native for some odd reason ios and android they did not always play nice with each other in styling terms. They are like sour patch kids. Adding margin or height in one worked but it didn’t quite look right in the other. So we need a way in app to handle those darn kids. Right?!?

And it can be really hard to override those styles that are embedded. But allowing the app to control the bounding box of a component is a start.

!["discoverable"](/img/coding-a-component-kit/component_kit-discoverable.png "Discoverable")

**Discoverable:** We need to make sure that every component is discoverable. If we can not find it, developers will not know to use it. Ideally there is a complete list of every component be display in every state. And let's not forget to document all our props with the types and how to use them.

!["over exposing"](/img/coding-a-component-kit/component_kit-over_exposing.png "Over Exposing")

**Over exposing:** When we first began building our green field app at my previous job, the app decided which state to render. The app would be able to Use `CardWithData` and `CardWithNoData`. It became a little unnecessary. So we put the weight of which state to render on the component instead since it created a lot less boilerplate code. So the code you see in the image would live within the component. and based on the properties you pass to it determines what state to render.

!["third party library"](/img/coding-a-component-kit/component_kit-third_party_library.png "Third Party Library")

**Third party libraries:** Treat it like a Third Party Library as if you were going to OSS it. Generally when something is open source it is.

1. Well Tested
2. Well Documented
3. Versioned
4. Well Maintained

!["everything is not a component"](/img/coding-a-component-kit/component_kit-everything_a_component.png "Everything is not a Component")

**Everything is not a component:** Components are great but you have to put a limit on which ones you are going to make. Forcing everything to be a component makes it a lot harder to maintain. If you are only going to use it one or two times there’s no need to make it a component part of a component library.

!["component checklist"](/img/coding-a-component-kit/component_kit-checklist.png "Component Checklist")

So that brings me into how do you know to make something a component. Tips for you in a checklist form

- **Easy to Modify:** If you could easily apply a change with a modifier then it’s probably the same component, if it requires a lot of changes then you probably need to make a new component.
- **Extension of Existing:** Ask yourself, If we change appearance of X on component A, do we expect that X should change also for component B and C — if so, they might be the same component.
- **Used Often:** Again we have to figure out how often is this component going to be used. Is it a one off for design?
- **Abstract Names:** Give components abstract names. Avoid naming that indicates a specific use-case, e.g. “Snippet” rather than “Search result snippet”.