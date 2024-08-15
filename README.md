# My Next App

This repository contains a Next.js application with specific configurations and issues described below.

## Steps to Reproduce

1. **Clone the repository:** `git clone https://github.com/ChellappanRajan/my-next-app.git`

2. **Navigate into the `org` directory:** `cd org`

3. **Install the dependencies:** `npm install`

4. **Run the tests:** `npm test`

## Issue Description

Even though I have set `disabled={true}` on the `Button` component, it is not respecting that value when using `lit/react`. However, the same test case works fine with `lit-labs/react`.
