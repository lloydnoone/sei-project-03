const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Veg = require('../models/Veg')
const User = require('../models/User')

mongoose.connect(
  dbURI, 
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err) // if connect fails, will send an error to the console and exit
    db.dropDatabase() // on a good connect, first drop all data in the database
      .then(() => {
        return User.create([
          {
            username: 'Lloyd',
            email: 'lloyd@email.com',
            password: 'pass',
            passwordConfirmation: 'pass',
            availablePickUpDays: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ], 
            availablePickUpTimes: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23' ],
            addressLineOne: 'Peaches Castle', 
            addressLineTwo: '', 
            addressCity: 'The mushroom Kingdom', 
            addressPostcode: 'E4 8JA'
          },
          {
            username: 'Claire',
            email: 'claire@email.com',
            password: 'pass',
            passwordConfirmation: 'pass',
            availablePickUpDays: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ], 
            availablePickUpTimes: [ '18', '19', '20' ],
            addressLineOne: '60 Disney Lane', 
            addressLineTwo: 'Marshmellow World', 
            addressCity: 'Paris', 
            addressPostcode: 'E8 2RS'
          },
          {
            username: 'Jenny',
            email: 'jenny@email.com',
            password: 'pass',
            passwordConfirmation: 'pass',
            availablePickUpDays: [ 'Saturday', 'Sunday' ], 
            availablePickUpTimes: [ '9', '10' ],
            addressLineOne: 'Round here', 
            addressLineTwo: 'Aldgate', 
            addressCity: 'Lodon', 
            addressPostcode: 'E15 4BQ'
          },
          {
            username: 'Paul',
            email: 'paul@email.com',
            password: 'pass',
            passwordConfirmation: 'pass',
            availablePickUpDays: [ 'Tuesday', 'Wednesday' ], 
            availablePickUpTimes: [ '18', '19', '20' ],
            addressLineOne: '15 Cerulean Lane', 
            addressLineTwo: '', 
            addressCity: 'Cerulean City', 
            addressPostcode: 'NW10 7AB' 
          },
          {
            username: 'Lydia',
            email: 'lydia@email.com',
            password: 'pass',
            passwordConfirmation: 'pass',
            availablePickUpDays: [ 'Tuesday', 'Wednesday' ], 
            availablePickUpTimes: [ '20', '21' ],
            addressLineOne: '15 Cerulean Lane', 
            addressLineTwo: '', 
            addressCity: 'Cerulean City', 
            addressPostcode: 'SE8 5HY' 
          },
          {
            username: 'Felicia',
            email: 'felicia@email.com',
            password: 'pass',
            passwordConfirmation: 'pass',
            availablePickUpDays: [ 'Tuesday', 'Wednesday' ], 
            availablePickUpTimes: [ '18', '19', '20' ],
            addressLineOne: '15 Cerulean Lane', 
            addressLineTwo: '', 
            addressCity: 'Cerulean City', 
            addressPostcode: 'NW6 7TT' 
          }
          
        ])
      })
      .then(users => {
        return Veg.create([
          {
            title: 'Box of tomatoes',
            typeOfVeg: 'Tomato',
            varietyOfVeg: 'Cherry',
            pickedDate: 5,
            description: 'Very sweet.',
            image: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg?w=1155&h=1528',
            isClaimed: false,
            vegLocation: 'SW18 4TQ',
            user: users[0],
            availablePickUpDays: ['Monday', 'Tuesday'],
            availablePickUpTimes: ['18', '19']
          },
          {
            title: 'A basket of cucumbers',
            typeOfVeg: 'Cucumber',
            varietyOfVeg: 'Armenian',
            pickedDate: 8,
            description: 'Mmmmm so juicy.',
            image: 'https://www.edenbrothers.com/store/media/Seeds-Vegetables/resized/SVCUC124-1_medium.jpg',
            isClaimed: false,
            vegLocation: 'SW11 1XT',
            user: users[1],
            availablePickUpDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            availablePickUpTimes: ['8', '9', '10']
          },
          {
            title: '5 Aubergines',
            typeOfVeg: 'Aubergine',
            varietyOfVeg: 'English',
            pickedDate: 5,
            description: 'Full of flavour and quite large.',
            image: 'https://www.nhm.ac.uk/content/dam/nhmwww/discover/aubergine-evolution/aubergine-shutterstock-full-width.jpg.thumb.1920.1920.png',
            isClaimed: false,
            vegLocation: 'E1 7PT',
            user: users[2],
            availablePickUpDays: ['Saturday', 'Sunday'],
            availablePickUpTimes: ['9', '10', '11']
          },
          {
            title: 'A bunch of asparagus',
            typeOfVeg: 'Asparagus',
            varietyOfVeg: 'English',
            pickedDate: 5,
            description: 'Beautiful colour...',
            image: 'https://www.thespruce.com/thmb/AslNxNSnIywOCJuM4fcUAU7VWBA=/1983x1416/filters:fill(auto,1)/Asparagus-GettyImages-135630192-5be349fcc9e77c0051aac6ea.jpg',
            isClaimed: false,
            vegLocation: 'SW12 8RJ',
            user: users[3],
            availablePickUpDays: ['Wednesday', 'Thursday', 'Friday'],
            availablePickUpTimes: ['12', '13']
          },
          { title: 'Delicious Broad beans',
            typeOfVeg: 'Broad Beans',
            varietyOfVeg: 'English',
            pickedDate: 5,
            description: 'Freshly picked and crunchy.',
            image: 'https://www.thompson-morgan.com/static-images/master/static-images/how-to-grow-broadbeans/how-to-grow-broad-beans-lead.jpg',
            isClaimed: false,
            vegLocation: 'E8 2RS',
            user: users[0],
            availablePickUpDays: ['Friday', 'Saturday'],
            availablePickUpTimes: ['14', '15']
          },
          { title: 'Halloween Pumpkins',
            typeOfVeg: 'Pumpkin',
            varietyOfVeg: 'American',
            pickedDate: 5,
            description: 'Big, scary pumpkins.',
            image: 'https://www.quickenloans.com/blog/wp-content/uploads/2013/10/Stock-HalloweenPumpkins-t20_knkgvE.jpg',
            isClaimed: false,
            vegLocation: 'NW6 3PJ',
            user: users[2],
            availablePickUpDays: ['Friday', 'Saturday'],
            availablePickUpTimes: ['14', '15']
          },
          { title: 'Lots of Mushrooms',
            typeOfVeg: 'Mushrooms',
            varietyOfVeg: 'French',
            pickedDate: 2,
            description: 'Yum yum yum',
            image: 'https://www.goodnewsnetwork.org/wp-content/uploads/2019/03/Mushrooms-National-University-of-Singapore-Released.jpg',
            isClaimed: false,
            vegLocation: 'W4 2LJ',
            user: users[3],
            availablePickUpDays: ['Monday', 'Tuesday'],
            availablePickUpTimes: ['19', '20']
          },
          { title: 'My Cauliflower',
            typeOfVeg: 'Cauliflower',
            varietyOfVeg: 'Garden',
            pickedDate: 1,
            description: 'Earthy',
            image: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/4F91/production/_108296302_cauliflowergetty.jpg',
            isClaimed: false,
            vegLocation: 'N5 2HS',
            user: users[1],
            availablePickUpDays: ['Wednesday', 'Friday'],
            availablePickUpTimes: ['10', '11']
          },
          { title: ' 10 Courgettes',
            typeOfVeg: 'Courgette',
            varietyOfVeg: 'French',
            pickedDate: 2,
            description: 'Small but flavoursome.',
            image: 'https://www.marshalls-seeds.co.uk/images/products/product_8155.jpg',
            isClaimed: false,
            vegLocation: 'SW3 3RA',
            user: users[5],
            availablePickUpDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            availablePickUpTimes: ['19', '20', '21', '22']
          },
          { title: 'Bunch of carrots',
            typeOfVeg: 'Carrots',
            varietyOfVeg: 'From my garden',
            pickedDate: 2,
            description: 'Sweet and lots of flavour.',
            image: 'https://www.foxandbriar.com/wp-content/uploads/2019/03/Honey-Roasted-Carrots-1-of-9.jpg',
            isClaimed: false,
            vegLocation: 'SE8 3BU',
            user: users[4],
            availablePickUpDays: ['Monday', 'Tuesday'],
            availablePickUpTimes: ['7', '8', '9', '10']
          }, 
          { title: 'Sack of potatoes',
            typeOfVeg: 'Potatoes',
            varietyOfVeg: '',
            pickedDate: 1,
            description: 'Perfect for mash.',
            image: 'https://images.unsplash.com/photo-1563012678-bdfec255931b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80',
            isClaimed: false,
            vegLocation: 'SE8 3BU',
            user: users[4],
            availablePickUpDays: ['Monday', 'Tuesday'],
            availablePickUpTimes: ['7', '8', '9', '10']
          }, 
          {
            title: 'Three Bull heart tomatoes',
            typeOfVeg: 'Tomato',
            varietyOfVeg: 'Bull heart',
            pickedDate: 8,
            description: 'Perfect with mozarella.',
            image: 'https://live.staticflickr.com/5003/5228203435_a9348c127b_b.jpg',
            isClaimed: false,
            vegLocation: 'E1 7PT',
            user: users[1],
            availablePickUpDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            availablePickUpTimes: ['8', '9', '10']
          },
          {
            title: 'Sweet potato',
            typeOfVeg: 'Potato',
            varietyOfVeg: 'Sweet',
            pickedDate: 3,
            description: 'Look at this beauty.',
            image: 'https://images.unsplash.com/photo-1570723735746-c9bd51bd7c40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
            isClaimed: false,
            vegLocation: 'SW13 9PF',
            user: users[2],
            availablePickUpDays: ['Saturday', 'Sunday'],
            availablePickUpTimes: ['9', '10', '11']
          }, 
          {
            title: 'Leafy Greens',
            typeOfVeg: 'Lettuce',
            varietyOfVeg: '',
            pickedDate: 3,
            description: 'Perfect for garnish and smoothies.',
            image: 'https://images.unsplash.com/photo-1506073881649-4e23be3e9ed0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80',
            isClaimed: false,
            vegLocation: 'SW18 4TQ',
            user: users[0],
            availablePickUpDays: ['Monday', 'Tuesday'],
            availablePickUpTimes: ['18', '19']
          },
          {
            title: 'A lot of onions',
            typeOfVeg: 'Onion',
            varietyOfVeg: 'Yellow onion',
            pickedDate: 8,
            description: 'So oniony.',
            image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            isClaimed: false,
            vegLocation: 'SW11 1XT',
            user: users[1],
            availablePickUpDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            availablePickUpTimes: ['8', '9', '10']
          },
          {
            title: 'Garlic',
            typeOfVeg: 'Garlic',
            varietyOfVeg: '',
            pickedDate: 5,
            description: 'Pungent and spicy.',
            image: 'https://images.unsplash.com/reserve/E6Ai8EoSQp2unXHEd1GA_GarlicHarvest.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            isClaimed: false,
            vegLocation: 'SW13 9PF',
            user: users[2],
            availablePickUpDays: ['Saturday', 'Sunday'],
            availablePickUpTimes: ['9', '10', '11']
          }, 
          { title: 'Butternut squash',
            typeOfVeg: 'Squash',
            varietyOfVeg: '',
            pickedDate: 1,
            description: 'Sweet, moist and nutty tasting.',
            image: 'https://images.unsplash.com/photo-1476455493505-114dd6921b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            isClaimed: false,
            vegLocation: 'E2 8QA',
            user: users[4],
            availablePickUpDays: ['Monday', 'Tuesday'],
            availablePickUpTimes: ['7', '8', '9', '10']
          },
          { title: 'Perfect cauliflower',
            typeOfVeg: 'Cauliflower',
            varietyOfVeg: '',
            pickedDate: 2,
            description: 'The flavor is mild with subtle cruciferous and nutty sweet nuances, a taste which is amplified when roasted.',
            image: 'https://images.unsplash.com/photo-1558108722-d672acd746b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            isClaimed: false,
            vegLocation: 'E6 5LT',
            user: users[5],
            availablePickUpDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            availablePickUpTimes: ['19', '20', '21', '22']
          },
          { title: 'Chilli',
            typeOfVeg: 'Chilli',
            varietyOfVeg: '',
            pickedDate: 2,
            description: 'Very spicy.',
            image: 'https://images.unsplash.com/photo-1566045023256-fb2339a82526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            isClaimed: false,
            vegLocation: 'E2 8QA',
            user: users[5],
            availablePickUpDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            availablePickUpTimes: ['19', '20', '21', '22']
          },
          { title: 'Crunchy Chard',
            typeOfVeg: 'Chard',
            varietyOfVeg: '',
            pickedDate: 7,
            description: 'Great tasting and freshly picked',
            image: 'https://gofreshusa.com/wp-content/uploads/2018/04/Depositphotos_31672627_original-e1523467588980-1024x750.jpg',
            isClaimed: false,
            vegLocation: 'SE19 1HF',
            user: users[3],
            availablePickUpDays: ['Monday', 'Wednesday', 'Thursday', 'Friday'],
            availablePickUpTimes: ['12', '13']
          },
          { title: 'Sweet shallots',
            typeOfVeg: 'Shallot',
            varietyOfVeg: '',
            pickedDate: 3,
            description: 'Really nice to cook with',
            image: 'https://www.ocado.com/productImages/384/384721011_0_640x640.jpg?identifier=fdb35ef2977c6ede48351968b6ced299',
            isClaimed: false,
            vegLocation: 'w12 7gf',
            user: users[3],
            availablePickUpDays: ['Thursday', 'Friday'],
            availablePickUpTimes: ['15', '16']
          },
          { title: 'Spring onions',
            typeOfVeg: 'Spring onions',
            varietyOfVeg: '',
            pickedDate: 4,
            description: 'nice in salad',
            image: 'https://www.kerrysfresh.co.uk/wp-content/uploads/2016/09/Spring-Onions.jpg',
            isClaimed: false,
            vegLocation: 'n8 9dg',
            user: users[2],
            availablePickUpDays: ['Monday', 'Friday'],
            availablePickUpTimes: ['10', '11', '12', '13', '17']
          },
          { title: '5 Marrows',
            typeOfVeg: 'Marrow',
            varietyOfVeg: '',
            pickedDate: 1,
            description: 'great to cook with',
            image: 'https://www.kerrysfresh.co.uk/wp-content/uploads/2016/09/Marrow-600x600.jpg',
            isClaimed: false,
            vegLocation: 'W1B 2QD',
            user: users[4],
            availablePickUpDays: ['Monday', 'Friday'],
            availablePickUpTimes: ['10', '11', '12', '13', '17']
          },
          { title: 'Crate of Pears',
            typeOfVeg: 'Pear',
            varietyOfVeg: '',
            pickedDate: 10,
            description: 'sweet and juicy, almost ripe',
            image: 'https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/pears.jpg?itok=CGjollRu',
            isClaimed: false,
            vegLocation: 'W11 3JE',
            user: users[2],
            availablePickUpDays: ['Wednesday', 'Friday'],
            availablePickUpTimes: ['12', '15', '17']
          }
          
        ])
      })
      .then(vegetables => console.log(`${vegetables.length} Vegetables created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)