---
name: set-next-meetup
description: Point the homepage "Next Meetup" section at a specific Meetup event given its event link — sets the event date, the link, the image, the title, and centers the button. Use when the user gives a meetup.com event URL and wants it featured as the next meetup.
---

# set-next-meetup

Configure the homepage **Next Meetup** section (`app-meetup`) for a specific Meetup event.

## Input

- A Meetup event URL, e.g. `https://www.meetup.com/python-catania/events/315327982/` (the user provides it; it may also appear in the prompt).
- Optionally, an event image the user attaches in the conversation. If they attach one, use it instead of the event's own image.

## Files

- `src/app/components/meetup/meetup.component.html`
- `public/i18n/it.json` and `public/i18n/en.json` (the `nextMeetup` object)
- `public/images/homepage/NextMeetup.jpg`

## Steps

1. **Get the event details.** Fetch the event page to read the **title**, **date**, and **start time**:
   ```
   WebFetch <event-url> "What is the title, date and start time of this event?"
   ```

2. **Build the localized date strings.**
   - Italian (`it.json`): `"<Giorno> <D> <mese> <AAAA>, ore <HH:MM>"` — e.g. `Martedì 14 luglio 2026, ore 18:30`. Use Italian weekday (Lunedì, Martedì, Mercoledì, Giovedì, Venerdì, Sabato, Domenica) and lowercase Italian month (gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre). Time in 24h.
   - English (`en.json`): `"<Weekday>, <D> <Month> <YYYY>, <h:MM AM/PM>"` — e.g. `Tuesday, 14 July 2026, 6:30 PM`.

3. **Update the image.** Always replace `public/images/homepage/NextMeetup.jpg`.
   - If the user attached an image for this event, use that source. Otherwise download the event's own cover image from the Meetup page. The `og:image` meta tag points at a low-res share variant (e.g. `.../600_<id>.jpeg`); Meetup stores the same photo at full resolution under a `highres_` prefix, so rewrite the size prefix to `highres_` before downloading:
     ```bash
     IMAGE_URL=$(curl -sL "<event-url>" | grep -oP '<meta property="og:image"\s+content="\K[^"]+' | head -1)
     IMAGE_URL=$(echo "$IMAGE_URL" | sed -E 's#/[0-9]+_([0-9]+\.[a-z]+)#/highres_\1#')
     curl -sL "$IMAGE_URL" -o /tmp/next-meetup-source
     ```
   - Convert the chosen source to JPG, overwrite the live file, and read back the dimensions:
     ```bash
     convert <attached-image-or-/tmp/next-meetup-source> -quality 90 public/images/homepage/NextMeetup.jpg
     identify public/images/homepage/NextMeetup.jpg   # note the width/height
     ```
   - Use the reported width/height in the `<img>` tag in the next step.

4. **Set the HTML** in `src/app/components/meetup/meetup.component.html`. The section must read (replace `WIDTH`/`HEIGHT` with the image dimensions, `EVENT TITLE` with the event title, and `EVENT-URL` with the event link):
   ```html
   <section id="next-meetup" class="bg-(--surface) px-4">
     <div class="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row-reverse">
       <div class="w-full md:w-1/2">
         <img
           ngSrc="/images/homepage/NextMeetup.jpg"
           alt="EVENT TITLE"
           width="WIDTH"
           height="HEIGHT"
           class="w-full rounded-(--radius) object-cover shadow-lg"
         />
       </div>
       <div class="flex w-full flex-col items-center gap-4 text-center md:w-1/2 md:items-start md:text-left">
         <div class="py-16">
           <h2>{{ 'nextMeetup.title' | transloco }}</h2>
           <p class="mb-2">{{ 'nextMeetup.description' | transloco }}</p>
           <p class="mb-6 text-center text-xl font-bold">{{ 'nextMeetup.date' | transloco }}</p>
           <a
             id="meetup-link"
             rel="me noopener"
             target="_blank"
             href="EVENT-URL"
             role="button"
             aria-label="Meetup"
             class="mx-auto flex w-fit cursor-pointer items-center justify-center gap-2 rounded-(--radius) border-2 border-(--color-primary) bg-(--color-primary) px-4 py-2 text-base font-semibold text-white no-underline transition-colors hover:border-(--color-primary-hover) hover:bg-(--color-primary-hover) hover:text-white [&_svg]:shrink-0"
           >
             <app-icon-meetup />{{ 'nextMeetup.join' | transloco }}</a
           >
         </div>
       </div>
     </div>
   </section>
   ```
   Notes: the date paragraph is bigger, bold, centered, and inherits the default text color (no red). The button is `mx-auto flex w-fit` so it stays centered.

5. **Set the `date` translation key** inside the `nextMeetup` object of both `public/i18n/it.json` and `public/i18n/en.json` (add it if missing, between `description` and `join`):
   ```json
   "nextMeetup": {
     "title": "...",
     "description": "...",
     "date": "<localized date from step 2>",
     "join": "..."
   }
   ```
   Leave `title`, `description`, `join` untouched.

6. **Verify** the build:
   ```bash
   npm run build
   ```

To reset the section back to the generic default, use the `default-next-meetup` skill.

Do not commit unless the user asks.
