const team =[
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        pic:"wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        pic:"angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        pic:"walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        pic:"angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        pic:"scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        pic:"barbara-ramos-graphic-designer.jpg"
    }
]

//! MILESTONE 1
// team.forEach(member => {
//     for (const key in member) {
//         if (member.hasOwnProperty.call(member, key)) {
//             console.log(member[key]);
//         }
//     }
// });


// ! MILESTONE 2
// for (let index = 0; index < 6; index++) {
//     const teamContainer = document.querySelector(".our-team")
//     const newParagraph = document.createElement("p")
//     newParagraph.append(`${team[index].name} ${team[index].role} ${team[index].pic}`)
//     teamContainer.appendChild(newParagraph)
// }


// ! BONUS 1
// for (let index = 0; index < 6; index++) {
//     const teamContainer = document.querySelector(".our-team")
//     const newParagraph = document.createElement("p")
//     const memberImage = document.createElement("img")
//         memberImage.src = `./img/${team[index].pic}`
//         memberImage.alt = `A profile picture of ${team[index].name}`

//     newParagraph.append(`${team[index].name} ${team[index].role}`, memberImage)
//     teamContainer.appendChild(newParagraph)
// }

//! BONUS 2
const ourTeamSectionElement = document.querySelector("#our-team");

team.forEach(member => {
    const memberEl = document.createElement("article");
    const imageContainerEl = document.createElement("div")
    const imageEl = document.createElement("img")
        imageEl.id = "member-img"
        imageEl.src = `./img/${member.pic}`
        imageEl.alt = `A profile picture of ${member.name}`
    const textContainerEl= document.createElement("div")
        textContainerEl.id = "text-container"
    const displayNameEl = document.createElement("p")
        displayNameEl.append(member.name) 
    const displayRoleEl = document.createElement("p")
        displayRoleEl.append(member.role)

    imageContainerEl.appendChild(imageEl)
    textContainerEl.appendChild(displayNameEl)
    textContainerEl.appendChild(displayRoleEl)
    memberEl.appendChild(imageContainerEl);
    memberEl.appendChild(textContainerEl);

    ourTeamSectionElement.appendChild(memberEl)
});