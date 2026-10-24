# Your Creative Portfolio

A responsive, easy-to-edit portfolio website for illustration, design, sketching, and creative projects.

## Preview on your computer
1. Unzip this folder.
2. Open `index.html` in a browser.

## Change your name and details
Open `index.html` in any text editor:
- Replace `YOUR NAME` with your name.
- Update the introduction in the About section.
- Replace `hello@example.com` with your email address.
- Update the page title if you like.

## Add future projects
1. Put the image in the `images` folder (JPG, PNG, or WebP works well).
2. Open `projects.js`.
3. Copy one project object, paste it as another item inside `PROJECTS`, and edit its details.
4. Use a category of `Illustration`, `Design`, or `Experiments`.
5. Save and refresh `index.html`.

Example:
{
  title: "My new poster",
  category: "Design",
  year: "2027",
  image: "images/my-new-poster.jpg",
  description: "The idea, process, and things I learned while making this poster."
}

Remember to use commas between project objects. Keep image filenames simple, such as `poster-01.jpg`.

## Change the look
Edit `style.css`. The main colours are at the top under `:root`.

## Put it online
This is a static website and does not need a database or a paid website builder.
You can upload the contents of this folder to a static hosting service such as GitHub Pages, Netlify, or Cloudflare Pages. Keep `index.html`, `style.css`, `projects.js`, `script.js`, and the `images` folder together.
For GitHub Pages, create a repository, upload these files, then enable Pages in the repository's Settings.

## Before publishing
- Replace the placeholder name, email, and about text.
- Replace the four sample project images with your own work.
- Check that you have permission to publish every image and font used.
