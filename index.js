const express = require("express");
const app = express();
const db = require("./models");
let methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
/**
 * Blog Home Route
 */

app.get("/blogs", async (req, res) => {
  try {
    let blogs = await db.blog.findAll();
    res.send(blogs);
  } catch (error) {
    console.log(error);
  }
});
/**
 * Blog Create Route
 */
app.get("/create", async (req, res) => {
  try {
    res.render("create");
  } catch (error) {
    console.log(error);
  }
});
/**
 * Get Individual Blog
 */
app.get("/blogs/:id", async (req, res) => {
  try {
    let blog = await db.blog.findOne({
      where: {
        id: Number(req.params.id),
      },
    });
    res.send(blog);
  } catch (error) {
    console.log(error);
  }
});

/**
 * Post to Blogs
 */
app.post("/blogs", async (req, res) => {
  try {
    let blog = db.blog.findOrCreate({
      where: {
        title: req.body.title,
        authorId: Number(req.body.authorId),
        content: req.body.content,
      },
    });

    res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
  }
});

/**
 * Delete a Blog Page
 */

app.get("/deleteBlog", async (req, res) => {
  try {
    res.render("delete");
  } catch (error) {
    console.log(error);
  }
});

/**
 * Delete Blog
 */
app.delete("/delete", async (req, res) => {
  try {
    console.log(req.body.blogId);
    let blog = db.blog.destroy({
      where: {
        id: Number(req.body.blogId),
      },
    });
    res.redirect(req.get("referer"));
  } catch (error) {
    console.log(error);
  }
});

app.listen(8000, () => {
  console.log(`listening for requests on port 8000`);
});
