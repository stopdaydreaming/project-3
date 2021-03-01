const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/animeets", {
  useNewUrlParser: true,
});

const eventInfoSchema = new mongoose.Schema({
  name: String,
  location: String,
  city: String,
  state: String,
  date: Date,
});

const EventData = mongoose.model("EventData", eventInfoSchema);

const event1 = new EventData({
  name: "Huntsville Anime Day",
  location: "Embassy Suites by Hilton Huntsville Hotel & Spa",
  city: "Huntsville",
  state: "Alabama",
  date: "2021-03-06",
});
const event2 = new EventData({
  name: "Huntsville Anime Day",
  location: "Embassy Suites by Hilton Huntsville Hotel & Spa",
  city: "Huntsville",
  state: "Alabama",
  date: "2021-03-06",
});
const event3 = new EventData({
  name: "My-Con",
  location: "Wyndham Orlando Resort International Drive",
  city: "Orlando",
  state: "Florida",
  date: "2021-03-06",
});
const event4 = new EventData({
  name: "Mississippi Anime Festival 2021",
  location: "Mississippi Trademart Center",
  city: "Jackson",
  state: "Mississippi",
  date: "2021-03-13",
});
const event5 = new EventData({
  name: "Colorado Anime Fest",
  location: "Denver Marriott Tech Center",
  city: "Denver",
  state: "Colorado",
  date: "2021-03-19",
});

const defaultList = [event1, event2, event3, event4, event5];

// EventData.insertMany(defaultList, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved default events to database");
//   }
// });

EventData.find({})
