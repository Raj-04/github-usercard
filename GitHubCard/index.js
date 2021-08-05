import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards')

axios.get(`https://api.github.com/users/Raj-04`)
  .then((res) => {
    console.log(res.data)
    cardMaker(res.data)
  })
  .catch(err => console.error(err))
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  ' https://api.github.com/users/tetondan',
  'https://api.github.com/users/dustinmyers',
  'https://api.github.com/users/justsml',
  'https://api.github.com/users/luishrd',
  'https://api.github.com/users/bigknell',
  'https://api.github.com/users/rdperry031',
  'https://api.github.com/users/cqian12',
  'https://api.github.com/users/cyberkade',
  'https://api.github.com/users/patricelachelle',
  'https://api.github.com/users/ayv8er',
  'https://api.github.com/users/Krisf451',
  'https://api.github.com/users/vannguyen141290',
  'https://api.github.com/users/katherineyevsukov',
  'https://api.github.com/users/Jie-chelchel',
  'https://api.github.com/users/rkshockey',
  'https://api.github.com/users/TraNequaFauntleroy',
];

function createCards (oneArray) {
  console.log(oneArray)
  oneArray.forEach(element => {
    axios.get(element)
    .then(res => {
      cardMaker(res.data)
    })
    .catch(res =>{
      console.log(res.data)
    })
  });
}

createCards(followersArray);
console.log(cards)

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker (information){
  console.log(information)

  const card = document.createElement('div')
  card.classList.add('card')

  const image = document.createElement('img')
  image.src = information.avatar_url
  card.appendChild(image)

  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')
  card.appendChild(cardInfo)

  const name = document.createElement('h3')
  name.classList.add('name')
  name.innerText = information.name
  cardInfo.appendChild(name)
 
  const userName = document.createElement('p')
  userName.classList.add('username')
  userName.innerText = information.login
  cardInfo.appendChild(userName)

  const myLocation = document.createElement('p')
  myLocation.innerHTML = `Location: ${information.location}`
  cardInfo.appendChild(myLocation)
  
  const myProfile = document.createElement('p')
  myProfile.textContent = `Profile:`
  const myProfileAnchor = document.createElement('a')
  myProfileAnchor.setAttribute('href', information.html_url)
  myProfileAnchor.textContent = `Github-URL: ${information.html_url}`
  myProfile.appendChild(myProfileAnchor)
  cardInfo.appendChild(myProfile)

  const myFollowers = document.createElement('p')
  // myFollowers.textContent = `Followers: ${information.followers_url}`
  myFollowers.innerText = "followers: " + information.followers
  cardInfo.appendChild(myFollowers)
  
  const myFollowing = document.createElement('p')
  // myFollowing.textContent = `Following: ${information.following_url}`
  myFollowing.innerText = "following: " + information.following
  cardInfo.appendChild(myFollowing)

  const myBio = document.createElement('p')
  myBio.innerText = `Bio: ${information.bio}`
  cardInfo.appendChild(myBio)

  cards.appendChild(card)

  return card
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
