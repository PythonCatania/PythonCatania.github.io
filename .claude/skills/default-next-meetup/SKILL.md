---
name: default-next-meetup
description: Reset the homepage "Next Meetup" section to its default generic state — generic image, generic title/description, no specific date, and the generic Meetup link. Use when the user wants to clear a specific event from the Next Meetup section or restore it to default.
---

# default-next-meetup

Restore the homepage **Next Meetup** section (`app-meetup`) to the generic default: no specific event, generic image, generic Meetup link, and no event date line.

## Files

- `src/app/components/meetup/meetup.component.html`
- `public/i18n/it.json` and `public/i18n/en.json` (the `nextMeetup` object)
- `public/images/homepage/DefaultNextMeetup.jpg` — the committed generic default image (1440x1440). The default state points the `<img>` at this file directly; it is never overwritten. (Event-specific images go to `NextMeetup.jpg` instead, written by the `set-next-meetup` skill.)

## Steps

1. **Reset the HTML.** Make `src/app/components/meetup/meetup.component.html` exactly:
   ```html
   <section id="next-meetup" class="bg-(--surface) px-4">
     <div class="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row-reverse">
       <div class="w-full md:w-1/2">
         <img
           ngSrc="/images/homepage/DefaultNextMeetup.jpg"
           alt="Next Meetup"
           width="1440"
           height="1440"
           class="w-full rounded-(--radius) object-cover shadow-lg"
         />
       </div>
       <div class="flex w-full flex-col items-center gap-4 text-center md:w-1/2 md:items-start md:text-left">
         <div class="py-16">
           <h2>{{ 'nextMeetup.title' | transloco }}</h2>
           <p class="mb-6">{{ 'nextMeetup.description' | transloco }}</p>
           <a
             id="meetup-link"
             rel="me noopener"
             target="_blank"
             href="https://www.meetup.com/python-catania/"
             role="button"
             aria-label="Meetup"
             class="inline-flex cursor-pointer items-center justify-center gap-2 rounded-(--radius) border-2 border-(--color-primary) bg-(--color-primary) px-4 py-2 text-base font-semibold text-white no-underline transition-colors hover:border-(--color-primary-hover) hover:bg-(--color-primary-hover) hover:text-white [&_svg]:shrink-0"
           >
             <app-icon-meetup />{{ 'nextMeetup.join' | transloco }}</a
           >
         </div>
       </div>
     </div>
   </section>
   ```
   Key differences from the event-specific state: `ngSrc` points at `DefaultNextMeetup.jpg` (not `NextMeetup.jpg`), `alt="Next Meetup"`, image `width/height` `1440`, no `nextMeetup.date` paragraph, generic `href="https://www.meetup.com/python-catania/"`, and the button uses `inline-flex` (not centered).

2. **Remove the date translation key.** Delete the `"date": ...` line from the `nextMeetup` object in both `public/i18n/it.json` and `public/i18n/en.json`. The resulting object is:
   ```json
   "nextMeetup": {
     "title": "...",
     "description": "...",
     "join": "..."
   }
   ```
   Leave `title`, `description`, `join` untouched.

3. **Verify** the build still compiles:
   ```bash
   npm run build
   ```

Do not commit unless the user asks.
