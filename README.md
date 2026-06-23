# Python Catania 🌋🐘

Python Catania 🌋🐘 static website.

## Next Meetup GitHub Actions

The homepage "Next Meetup" section is managed by two manually-triggered (`workflow_dispatch`) workflows.

### Set Next Meetup

Points the section at a specific Meetup event: sets the date, link, image, and title from the event page.

- **GitHub UI:** Actions → **Set Next Meetup** → **Run workflow**, then paste the event URL (e.g. `https://www.meetup.com/python-catania/events/123456789/`).
- **GitHub CLI:** `gh workflow run set-next-meetup.yml -f meetup_link="https://www.meetup.com/python-catania/events/123456789/"`

### Default Next Meetup

Resets the section to its generic default: generic image, generic title/description, no date, and the generic Meetup link.

- **GitHub UI:** Actions → **Default Next Meetup** → **Run workflow**.
- **GitHub CLI:** `gh workflow run default-next-meetup.yml`

Both workflows commit the change and trigger a deploy automatically.
