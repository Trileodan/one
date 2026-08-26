# ONE

A productivity coach that hides your list and gives you one task at a time.

> You don't have a whole list to deal with. You have ONE thing to do right now.

## Put it online

1. Create a new repository on GitHub (public is fine - there's nothing in here but the app).
2. Drag every file in this folder into it and commit.
3. Go to **Settings -> Pages**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`, and Save.
4. Wait a minute, then open `https://<your-username>.github.io/<repo-name>/`.

## Put it on your phone

Open that address on your phone, then:

- **iPhone** - Share -> Add to Home Screen
- **Android** - menu -> Install app / Add to Home Screen

It opens full screen with no browser chrome, works with no signal, and keeps your
tasks between sessions.

## Where your data lives

In your browser's local storage on that device. Nothing is uploaded and there is no
account. Clearing site data clears your tasks. Each device keeps its own day.

## Updating it

Replace `index.html` and commit. The service worker fetches from the network first,
so the next launch with a signal picks up the new version. Bump `CACHE` in `sw.js`
if an update ever seems stuck.

## The files

| File | What it is |
| --- | --- |
| `index.html` | The entire app - markup, styles, logic |
| `manifest.webmanifest` | Makes it installable, sets the name, icon and colours |
| `sw.js` | Offline cache |
| `icon-*.png` | Home screen icons |
| `.nojekyll` | Stops GitHub Pages running Jekyll over the files |
