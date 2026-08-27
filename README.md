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

**Replace every file in this folder, not just `index.html`.** `sw.js` carries a build
stamp that has to match the page, and that stamp is what tells your phone an update
exists. Drag the whole folder over, commit, and the next launch with a signal picks
up the new version - you'll get a *New version ready* tap-to-update message if the
app was already open.

To check which version you're actually running: **Setup tab, right at the bottom** -
it shows `Build 20260827-1113-a1b2c3`. Compare it with the `one-build` stamp near the
top of `index.html` in the repo. Same stamp, same app.

### If a deploy still looks stuck

Work down this list - it's in order of likelihood.

1. **Give it two minutes.** GitHub Pages builds after the commit lands. The repo's
   **Actions** tab shows the deploy; a green tick means it's live.
2. **Check you replaced `sw.js` too.** An old worker with an old stamp will keep
   serving the old app no matter how new `index.html` is.
3. **Hard reload once.** On the phone: pull down to refresh twice in a row. On a
   desktop: Ctrl-Shift-R (Cmd-Shift-R on a Mac).
4. **Home-screen icons cache harder than tabs.** On iPhone, if the installed app is
   stubborn, delete the icon and re-add it from Safari - your tasks are stored on the
   device, not in the app shell, so nothing is lost.
5. **Nuclear option.** Open the site in a normal browser tab, then Settings ->
   Site settings -> Clear site data. This *does* clear your tasks on that device, so
   only do it if the rest has failed.

## The files

| File | What it is |
| --- | --- |
| `index.html` | The entire app - markup, styles, logic |
| `manifest.webmanifest` | Makes it installable, sets the name, icon and colours |
| `sw.js` | Offline cache |
| `icon-*.png` | Home screen icons |
| `.nojekyll` | Stops GitHub Pages running Jekyll over the files |
