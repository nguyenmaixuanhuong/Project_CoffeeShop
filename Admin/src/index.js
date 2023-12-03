const path = require('path');
const express = require('express')
const morgan = require('morgan')
const route = require('./app/routes');
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
var methodOverride = require('method-override')
const cors = require('cors')
// express trả về 1 đối tượng, là đại diện để xây dựng trang website
const app = express()
app.use(cors());
app.options('*',cors());
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({
  extended: false,
}))
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));
const port = 3000

// HTTP logger
app.use(morgan('combined'))
// Template engine
app.use(expressLayouts)
app.set('view engine', 'ejs');
app.set('layout','./layouts/main');
app.set('views', path.join(__dirname, "views"));

// Route init
route(app);

// là route tuyến đường 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

