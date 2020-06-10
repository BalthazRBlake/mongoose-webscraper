const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const axios = require("axios").default;
const cheerio = require("cheerio");
const cron = require("node-cron");
const { BreakingNews } = require("./models");

mongoose.connect(MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

cron.schedule("*/10 * * * * *", async () => {
  console.log("Cron Job Executed");
  const html = await axios.get("https://cnnespanol.cnn.com/");
  const $ = cheerio.load(html.data);
  const titles = $(".news__title");
  
  titles.each((index, element) => {
    const breakingNews = {
      title: $(element).text().toString(),
      link: $(element).children().attr("href")
    }
  
  BreakingNews.create([breakingNews]);
  });
});

// cron expressions
// “At minute 0 past every 4th hour.” 0 */4 * * *
// “At every minute.” * * * * *
// "At every 10 seconds" */10 * * * * *