# ng xi18n Deployment Demo

[Demo Site](http://i18n-demo.mario.studio/)

The project is based on the example from 
[angular i18n guide](https://angular.io/guide/i18n).
New Chinese language locale is added to the project.

The English build is deployed in the root folder, while builds
of other languages are deployed in separate sub-folders.

For a throughout build of all languages, English build should
be run first. Otherwise, all the builds of other languages
will be removed after English build.

In the main component, links to different builds are added.

Routing & navigation is also added in this demo project. The route
has `/products` and `/users` route paths.

As the routing components are simple, i18n for them are not
provided.

Deployed in an nginx docker container, the following nginx
configuration is required for proper route access of different
languages via direct link or page refresh.

```
location ~* /([a-z\-)]+)/ {
    try_files $uri $uri/ /$1/index.html;
}
```

Deployed in github pages, the method in 
[ghspa](https://websemantics.github.io/gh-pages-spa/) is used.
