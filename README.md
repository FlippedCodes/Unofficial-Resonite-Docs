# Unofficial Resonite Documentation

![](_media/logo_light.png#gh-dark-mode-only)
![](_media/logo_dark.png#gh-light-mode-only)

> [!NOTE]
> This project is a WIP. But there is a "[Roadmap](/README.md#todo-list)"

## Why

This documentation(/wiki) got created in response to the [Resonite Issue #1](https://github.com/Yellow-Dog-Man/Resonite-Issues/issues/1). Myself and a few involved in the linked issue think a static site generator is the better Wiki-Solution for complex software like resonite. While I personally understand the challenges and learning curve that comes with, I think it is still easier approach what is planned with the official Wiki.

## Contribute

### I just want to write

While I'm always happy see people trying, I don't want anyone to feel forced using Git and Markdown. If you just want to write something for this documentation without the shortcomings, feel free to shoot me a DM on Discord. My username is [`the.phil.`](https://discord.com/users/172031697355800577). (If possible, please do not send me a friend request and rather contact me in DMs directly through the [Resonite Discord Server](https://discord.gg/resonite).) You can send me anything unformatted and I will try my best to read your mind and make it pretty in Markdown ^^'

### How it works

This documentation is using [Docsify.JS](https://docsify.js.org) with Markdown.
To run the Wiki locally, please follow the [Docsify.JS instructions](https://docsify.js.org/#/quickstart). You need Node.JS installed on your workstation for the instructions to work.

Start command is `docsify serve .`

### A deserved Thank you ^^

A deserved shout-out goes out to [Banane9](https://github.com/Banane9) for helping me to get all the color of the different data types as well as a detailed list of all the Protoflux nodes.
Also a big thankies go to [Jae aka J4](https://777.tf/) for allowing us to use their work. It really helped to kick-start this documentation and get the ball rolling on how to structure it.

## Roadmap

### ToDo List

- [ ] Import Jae's Wiki articles about Resonite
- [ ] NeosVR MediaWiki import
  - [x] Get all XML files from all articles
  - [x] [Run Script](https://github.com/outofcontrol/mediawiki-to-gfm) and convert to Markdown files
  - [ ] Try different configurations on how to sort the articles
  - [ ] Consolidate articles for repetitive content and use [embedding/nesting](https://docsify.js.org/#/embed-files?id=embed-files) of files
  - [ ] Decide on how to handle the new Resonite Wikis content. (Import then override?)
- [x] ~~Decide on custom URL Routing for Ingame help~~ Normal URLs can be used.
- [ ] Sidebar
  - [ ] [Check, if it can be automated](https://docsify.js.org/#/more-pages?id=sidebar)
  - [ ] Write Script/Setup/Write manually
- [x] Evaluate if Navbar is needed: Navbar is needed for language changes and official links
- [ ] Evaluate MediaWiki Template Support
  - [x] [embedding/nesting](https://docsify.js.org/#/embed-files?id=embed-files) could work, might need script
  - [ ] Is possible: Add [Docsify mustache](https://docsify-mustache.github.io/#/) for templating with variables
    - But needs to be tested, if vars are applied to embeds
- [x] ~~Create Overrides to convert Githubs Markdown to Docsify.JS~~
  - ~~Noticed on Alert and Info box syntax~~ Fixed with plugin
- [ ] Add glossary plugin
- [ ] Test Tabs Plugin
- [x] Resonite Theming
- [x] Create render plugin to display protoflux nodes with dynamic content.
- [x] Create full list of a Protoflux nodes
- [ ] Hide drop shadow when sidebar is closed.
- [ ] Look into how to use Github Pages with Docsify
- [ ] Fix Light-Dark switcher overlapping with text on mobile.
