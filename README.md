# Unofficial Resonite Documentation

![](_images/logo_light.png#gh-dark-mode-only)
![](_images/logo_dark.png#gh-light-mode-only)

> [!NOTE]
> This project is a WIP. There are plans to automate certain parts of the wiki.

## Why

This documentation(/wiki) got created in response to the [Resonite Issue #1](https://github.com/Yellow-Dog-Man/Resonite-Issues/issues/1). Myself and a few involved in this Issue think a static site generator is the better Wiki-Solution for complex Software these days.

## Contribute

This documentation is using [Docsify.JS](https://docsify.js.org) with Markdown.
To run the Wiki locally, please follow the [Docsify.JS instructions](https://docsify.js.org/#/quickstart). You need Node.JS installed on your workstation for the instructions to work.

Start command is `docsify serve .`

## Roadmap

The plan right now is to make the website fit Resonites branding and get all needed Docsify.JS Plugins running. Content wise, I think it is good to start out with what NeosVR offers on their Wiki. and import it. For that [mediawiki-to-gfm](https://github.com/outofcontrol/mediawiki-to-gfm) can be used. But im unsure on how to proceed from there... Specifically, when the Offical Resonite Wiki launches.

### ToDo List

- [ ] NeosVR MediaWiki import
  - [ ] Get all XML files from all articles
  - [ ] [Run Script](https://github.com/outofcontrol/mediawiki-to-gfm) and convert to Markdown files
  - [ ] Try different configurations on how to sort the articles
  - [ ] Consolidate articles for repetitive content and use [embedding/nesting](https://docsify.js.org/#/embed-files?id=embed-files) of files
- [ ] Sidebar
  - [ ] [Check, if it can be automated](https://docsify.js.org/#/more-pages?id=sidebar)
  - [ ] Write Script/Setup/Write manually
- [ ] Evaluate if Navbar is needed
- [ ] MediaWiki Template Support
  - [embedding/nesting](https://docsify.js.org/#/embed-files?id=embed-files) could work, might need script
