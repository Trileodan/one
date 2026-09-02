# ONE

A productivity coach that hides your list and gives you one task at a time.

> You don't have a whole list to deal with. You have ONE thing to do right now.

## How it works

Your life is a small solar system. The Sun is today — what you have actually
done. Everything orbiting it is a **planet**: a part of your life that owns
tasks. That is the whole rule. There is no special Work object, no protected
Home, nothing ONE insists on keeping.

A fresh install suggests four — Work, Home, Errands, Projects — and from the
moment it starts they have exactly the same standing as one you made five
minutes ago. Rename them, recolour them, change how they look, reorder them,
archive them, delete them. Delete *all* of them: a Sun on its own is a valid,
intentional state, and it stays that way through a reload. Your worlds might be
Business, Family, University, Fitness and Money. They might just be Stuff.

Any planet can hold **projects** — an optional layer of grouping inside it, for
when one world would otherwise sprout six over-specific planets of its own. A
task always belongs to a planet and *never* has to belong to a project:

    Planet → Task              for simple things
    Planet → Project → Task    when it helps

and never anything deeper than that.

The whole system makes one revolution a day, so the sky at nine in the morning
isn't the sky at four in the afternoon. Tap a world and the camera travels to
it — a few seconds through the stars, and you're standing on it. **While you're
inside a world, nothing from any other world exists** — no counts, no badges,
no "up next" from the kitchen. Pull the sphere down against its own weight and
let go, and it catapults back into orbit.

The one thing you're doing hangs in front of that world as its **moon** —
eclipsing it, the way it would look from the sun. A flag is planted on it if the
job is overdue (red), due today (orange) or important (gold).

Handle the moon, not the world: **push it up** to finish and the next moon swings
in from below, **left** for not right now (it asks why, and treats a bad time
differently from not fancying it), **right** to throw something new in without
losing your place. Saying no asks why in plain words — and one of the answers is
*check back on it later*, where you pick the moment. Until it comes round the
task is genuinely asleep: out of the running, out of the count. When it comes
round, it asks for you first. **Pull down** and you get the whole world — planet and moon —
and letting go catapults it back into orbit. Tap to start the clock; press and
hold and this world's tasks come round on a rolodex of moons.

If there's a meeting in the diary and nothing sensible fits in the gap before
it, ONE puts the meeting up early rather than showing you an empty screen — tap
it and you start it there and then. A commitment can carry get-ready time, and
nothing unrelated gets started inside it.

**Important**, **due today** and **urgent** are three different claims. Important
says this matters. Due today says there's a deadline. Urgent says *do this next*
— it jumps the queue once and then stops shouting, so one panic on Tuesday can't
quietly bend the rest of your week.

Work doesn't only end by being finished. Something you've done your part on and
are waiting to hear about goes to **waiting** — out of the running order, keeping
everything it knows, and it can come back as done or reopened. Something that has
simply stopped being necessary is **no longer needed**: kept in the history, not
counted as productivity, and you never have to pretend you did it. And when you
give up on a problem, ONE asks the useful question first — is there something to
make safe, work around, or follow up before you walk away?

Your finishing time isn't a setting you filled in once. Change it from the
solar system or from the orb and everything moves with it: what fits, what's
worth opening, and whether stopping is now the right answer. Because it can be.
ONE is allowed to recommend nothing — *"You've cleared the important stuff.
Nothing worth opening for twenty minutes. You're done at 4:30."*

## The voice

There's one ONE, and no dial to set. Every line it says goes through the same
three questions — what actually happened, what's worth saying, and how to say it
— so the response fits the day you've had rather than being drawn at random from
a bag of quips.

Most of the time that means something short and plain and then getting out of
the way. Choosing a different task yourself isn't treated as suspicious; it's
usually just a good decision. Stopping a job that's gone nowhere is damage
limitation, not quitting. Finishing something is a good event, not an opening
for a dig.

The teasing is rare on purpose, and it has to be earned by something you
actually did — the same job dodged for the third time, half an hour that became
two hours, a five-minute errand you're clearly about to turn into a research
project. That contrast is the whole personality.

Adding a task needs one thing: what it is. ONE reads the sentence — *"Call
Harrogate today 20m"*, *"Team meeting tomorrow 11am 1h"* — guesses the length
when you don't say, files it in the world (and project) you're standing in, and
puts you straight back on what you were doing. It matches against the worlds
*you* made, by their names, so nothing here is hard-coded to mean anything. With
no planets at all it asks for the one thing it genuinely needs — somewhere for
the task to live — and saves it the moment you've said.

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
