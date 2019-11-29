![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Vegetable Sharing Platform

![image](https://user-images.githubusercontent.com/49749612/65820099-0528ce00-e21d-11e9-8ff8-f82e195a6171.png)

This was a project assigned to me by General Assembly during a software enginerring immersive course. The purpose of the project was to solidify the skills we learnt in the third module by putting them to use in a project of our choice. I worked on a team of four people over 5 days. My main focus on the project was on the front end.

People can use the app to share vegetables with others users by posting their own or claiming other poeples.

## Built With

1. HTML5
2. CSS3
3. JavaScript
4. React
5. Express
6. MongoDB
4. GitHub

## Deployment

The app is deployed on Heroku and it can be found here- vegetableshare.herokuapp.com

## Getting Started

Simply start browsing veg at the url provided and sign in to start posting and arranging pickup appointments with other users.

## How it works

Anybody can browse the vegetales that have been posted. After signing up, users can then post vegetales, claim other users vegetables or comment. There is a system in place for making and keeping track of pickup appointments. This inlcudes a messaging system between users that have agreed or about to agree on an appointment.  The vegetables are searchable by name on a list or map. The dashboard is where users have quick access to info and interactions with appointments and other users.

![](ezgif.com-video-to-gif.gif)

Below is the code that handles the filtering of the search.

```javascript
getPostcodes() {
    const vegetables = this.filterVegetables()
    const postcodes = vegetables.map(veg => veg.vegLocation.replace(' ', ''))
    axios.post('https://cors-anywhere.herokuapp.com/api.postcodes.io/postcodes/', { postcodes } )
      .then(res => this.setState({ postcodes: res.data.result, vegetables: vegetables }))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  onChange({ target: { name, value, dataset, innerHTML } }) {
    console.log('onchange was called. ')
    value ? this.setState({ [name]: value }) : this.setState({ [dataset.name]: (value || innerHTML) })
  }

  filterVegetables() {
    const { searchTerm, typeSearch } = this.state
    const re = new RegExp(searchTerm, 'i')
    const type = new RegExp(typeSearch, 'i')
    const filteredArr = this.state.vegetables.filter(veg => {
      //return re.test(veg.title) && (veg.typeOfVeg === typeSearch || typeSearch === 'All')
      return (!veg.pickUpAppointment || (veg.pickUpAppointment &&
         veg.pickUpAppointment.appointmentStatus !== 'completed')) &&
        (re.test(veg.title) && (type.test(veg.typeOfVeg) || (typeSearch === 'All')))
    })
    return filteredArr
  }
```

## Challenges and future improvements

The main challenge of this was collaborating on a team and making use if Git. I think we were quite organised and communicated well on this but still had some problems along the way. Communication as a whole was great and everyone worked well together until it came to styling. I think this is because styling is more subjective and everone has their own opinion.

A small challenge i had was to make the search bar re usable on multiple pages in that it would re direct upon submit and carry on the search on the index page. I was quite proud of this even though the solution is quite simple once found. The backend got quite comiplicated and it was hard for me to keep track of what was going on with the appointment models and its relations. Two other team members focused on that area so i realised i had to let go of that and focus on my own tasks.

![](leveleditor.gif)

## Author 

Lloyd Noone - portfolio: lloydnoone.com
