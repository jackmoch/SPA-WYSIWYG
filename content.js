var famousArray = [
{
  title: "Sax Player",
  name: "John Coltrane",
  bio: "An American jazz saxophonist and composer. Working in the bebop and hard bop idioms early in his career, Coltrane helped pioneer the use of modes in jazz and was later at the forefront of free jazz.",
  image: "http://ecx.images-amazon.com/images/I/51%2BO9oRiOyL._SX425_.jpg",
  lifespan: {
    birth: 1926,
    death: 1967
  }
},
{
  title: "Piano Player",
  name: "Herbie Hancock",
  bio: "An American pianist, keyboardist, bandleader, composer and actor. Starting his career with Donald Byrd, he shortly thereafter joined the Miles Davis Quintet where Hancock helped to redefine the role of a jazz rhythm section and was one of the primary architects of the post-bop sound.",
  image: "http://ecx.images-amazon.com/images/I/51ETNb3pUhL._SX425_.jpg",
  lifespan: {
    birth: 1940,
    death: "current"
  } 
},
{
  title: "Trumpet Player",
  name: "Miles Davis",
  bio: "An American jazz musician, bandleader, and composer, Davis was at the forefront of several major developments in jazz music.",
  image: "https://milesdavis.files.wordpress.com/2013/09/milesdavis-originalmonorecordings.jpg",
  lifespan: {
    birth: 1926,
    death: 1991
  }  
},
{
  title: "Piano Player",
  name: "Bill Evans",
  bio: "An American jazz pianist and composer who mostly worked in a trio setting. Evans' use of impressionist harmony, inventive interpretation of traditional jazz repertoire, block chords, and trademark rhythmically independent, 'singing' melodic lines continue to influence jazz pianists today",
  image: "http://25.media.tumblr.com/tumblr_m92nuqvor51r30xm8_1345496839_cover.jpg",
  lifespan: {
    birth: 1929,
    death: 1980
  }  
},
{
  title: "Piano Player",
  name: "Ahmad Jamal",
  bio: "An American jazz pianist, composer, group leader, and educator. For five decades, he has been one of the most successful small-group leaders in jazz.",
  image: "http://ecx.images-amazon.com/images/I/51vSXrgKs0L._SX425_.jpg",
  lifespan: {
    birth: 1930,
    death: "current"
  }  
}
]

var outputEl = document.getElementById('output');

for (var i = 0; i < famousArray.length; i++) {
  var currentPerson = famousArray[i];

  outputEl.innerHTML += `
    <div id="personDiv${i}" class="personDivStyle">  
      <person id="person${i}" class="personStyle">
        <header>
          <h2>
            ${currentPerson.name}
          </h2>
          <h4>
            ${currentPerson.title}
          </h4>  
        </header>
        <section>
          <img src="${currentPerson.image}"></img>
          <p id="bio${i}">${currentPerson.bio}</p>
        </section>
        <footer>
          <p>Lived ${currentPerson.lifespan.birth} to ${currentPerson.lifespan.death}
        </footer>
      </person>
    </div>  
  `
};











// var famousPeople = [
//   {
//     title: "Lord",
//     name: "Boromir",
//     bio: "Boromir was the son of Denathor and brother of Faramir. He was just a normal guy who really wanted to make his dad happy. He died trying to make his dad proud.",
//     image: "http://vignette3.wikia.nocookie.net/lotr/images/b/b4/Seanbean_boromir.jpg/revision/latest/scale-to-width-down/220?cb=20110327195115",
//     lifespan: {
//       birth: 2978,
//       death: 3019
//     }
//   },
//   {
//     title: "King",
//     name: "Stannis Baratheon",
//     bio: "Stannis was the true king of Westeros after the death of his brother Robert. He was denied his throne by a child and his conniving mother.",
//     image: "https://upload.wikimedia.org/wikipedia/en/0/05/Stannis_Baratheon-Stephen_Dillane.jpg",
//     lifespan: {
//       birth: 264,
//       death: 324
//     }
//   },
//   {
//     title: "Professor",
//     name: "Severus Snape",
//     bio: "Severus, commonly known as Snape, is the real hero of the epic poem of Harry Potter. His devotion to a dead woman who didn't love him back saved the muggle world",
//     image: "http://vignette2.wikia.nocookie.net/harrypotter/images/a/a3/Severus_Snape.jpg/revision/latest/scale-to-width-down/270?cb=20150307193047",
//     lifespan: {
//       birth: 1960,
//       death: 1998
//     }
//   },
//   {
//     title: "Son of God",
//     name: "Jesus H. Christ",
//     bio: "Jesus was a Jewish man born about 2000 years ago. Some people think he was really special, other people do not. He sounded like a good dude but some people still get really bent out of shape about him.",
//     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Cefal%C3%B9_Pantocrator_retouched.jpg/440px-Cefal%C3%B9_Pantocrator_retouched.jpg",
//     lifespan: {
//       birth: 0,
//       death: 33
//     }
//   },
//   {
//     title: "Captain",
//     name: "James T. Kirk",
//     bio: "Jim Kirk was a major badass in the early days of Starfleet. He was just good at what he did. Some day, in the future, he will save the world a whole bunch.",
//     image: "http://vignette3.wikia.nocookie.net/memoryalpha/images/9/98/James_Kirk%2C_2371.jpg/revision/latest/scale-to-width-down/270?cb=20101212224742&path-prefix=en",
//     lifespan: {
//       birth: 2233,
//       death: 2371
//     }
//   },
//   {
//     title: "Commander",
//     name: "Jane Shepard",
//     bio: "Shepard pretty much defines BAMF. She lead the recon team that encountered the reapers on Eden Prime, defeated the Collectors, and ultimately lead to the downfall of the reapers.",
//     image: "http://cdn.bleedingcool.net/wp-content/uploads/2015/01/mass-effect-3-the-real-female-shepard.jpg",
//     lifespan: {
//       birth: 2154,
//       death: 2245
//     }
//   }
// ]
// var personDOM = document.getElementById("output");
// //add content to DOM
// for (var i = 0; i < famousPeople.length; i++) {
//   var currentPerson = famousPeople[i];

//   personDOM.innerHTML += `
//       <person id="personCard${i}" class="personCardStyle" onCLink="identifyClickedElement()">
//         <header>
//           <h3>${currentPerson.title} ${currentPerson.name}</h3>
//         </header>
//         <section class="infoSection">
//           <img class="famousHeadshot" src="${currentPerson.image}" alt="${currentPerson.title} ${currentPerson.name}">
//           <p>${currentPerson.bio}</p>
//         </section>
//         <section class="lifeSpan">
//           <p>Born: ${currentPerson.lifespan.birth}</p>
//           <p>Died: ${currentPerson.lifespan.death}</p>
//         </section>
//       </person>
//     `;
// }

















