const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync");

gulp.task("sass", () =>
  gulp
    .src("scss/*.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("css/"))
    .pipe(browserSync.stream({ match: "**/*.css" }))
);

gulp.task("watch", () => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("scss/*.scss", gulp.series(["sass"]));
  gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task("default", gulp.series(["watch"]));