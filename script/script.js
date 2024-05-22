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

for (let index = 0; index < 6; index++) {
    const teamContainer = document.querySelector(".our-team")
    const newParagraph = document.createElement("p")
    newParagraph.append(`${team[index].name} ${team[index].role} ${team[index].pic}`)
    teamContainer.appendChild(newParagraph)
}