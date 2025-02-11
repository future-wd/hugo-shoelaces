---
title: "Quick Start"
description: "A quick start to using Shoelaces."
date: 2020-04-17T12:17:54+00:00
lastmod: 2020-04-17T12:17:54+00:00
draft: false
images: []
menu:
  main:
    weight: 20
---

How to start a new Hyas project — one pager.

## Requirements

Shoelaces uses npm to install dependencies and run commands. Installing npm is pretty simple. Download and install [Node.js](https://nodejs.org/) (it includes npm) for your platform.

## Start a new Hyas project

Create a new site, change directories, install dependencies, and start development server.

### Create a new site

```bash
git clone https://github.com/future-wd/hugo-shoelaces.git new-site
```

### Change directories

```bash
cd new-site
```

### Install dependencies

This will download hugo as a dependency and store it in the node_modules folder.

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Shoelaces will start the Hugo development webserver accessible by default at `http://localhost:1313`. Saved changes will live reload in the browser.

## Other commands

Hyas comes with commands for common tasks. [Commands →](#)

## Documentation

* [Netlify](https://docs.netlify.com/)
* [Hugo](https://gohugo.io/documentation/)
* [Shoelaces](#)

## Communities

* [Netlify Community](https://community.netlify.com/)
* [Hugo Forums](https://discourse.gohugo.io/)
* [Hyas Discussions](https://github.com/future-wd/hugo-shoelaces/discussions)
