# Anton Pollak — portfolio

A lightweight Jekyll portfolio deployed with GitHub Pages. Profile details and homepage ordering are intentionally separated from the page templates so the site can be curated without editing layout code.

## Edit content

- Personal details, profile links, CV, email, and About lists live in `_data/profile.yml`.
- Homepage project entries live in `_data/projects.yml`; experience entries live in `_data/experience.yml`. Either can include a `publication` with an optional `title`; without one, the parent entry's title is used. Change an entry's `order` value to rearrange it; set `hidden: true` to remove it without deleting it.
- Images crop to fill their card by default. Add `display: contain` to show a complete logo or diagram in the standard media box, or `display: compact` for a small contained mark.
- Add `youtube_id` to a linked image to turn it into a click-to-load YouTube player. The image remains the no-JavaScript fallback link.
- Add a selective project detail as Markdown in `_projects/<slug>.md` with `title`, `description`, `label`, and optional `links` front matter. Add its generated `/work/<slug>/` URL to the corresponding `detail_url` in `_data/projects.yml`.
- Future standalone paper overviews use `layout: paper`. A clean paper URL has no portfolio chrome; links from the homepage may append `?from=portfolio` to show the contextual return link.

Empty `email` and `cv_url` values are automatically hidden.

## Preview locally

```sh
bundle install
bundle exec jekyll serve --livereload
```

Open <http://127.0.0.1:4000>. Local preview files are ignored by Git.

## Publish

GitHub Pages builds the site from the `main` branch. Review the local preview before committing or pushing changes.
