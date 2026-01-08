/* Use the profile below */
var profile = {
    bio: {
        first: "Draymond",
        last: "Green",
        title: "NBA Player",
        about: "Draymond Green is a professional basketball player known for his versatility, defensive prowess, and leadership on the Golden State Warriors. He is a three-time NBA champion and has won NBA Defensive Player of the Year honors."
    },

    social: [
        { facebook: "https://www.facebook.com/DraymondGreen" },
        { X: "https://twitter.com/Money23Green" },
        { youtube: "https://www.youtube.com/channel/UC2kJZjZ4u5j5fE5hpMogsmg" },
        { linkedIn: "https://www.linkedin.com/in/draymond-green-662b77187/" }
    ],

    edu: {
        name: "Michigan State University",
        major: "Communications"
    },

    career: {
        company: "Golden State Warriors",
        title: "Forward",
        role: "Defensive Specialist, Playmaker"
    },

    skills: [
        { title: "Defense", level: 95 },
        { title: "Playmaking", level: 90 },
        { title: "Rebounding", level: 85 }
    ]
};
document.addEventListener("DOMContentLoaded", function() {

    document.querySelector('img').src = "https://media1.s-nbcnews.com/i/rockcms/2024-01/218475/240104-draymond-green-phoenix-suns-basketball-wm-306p-91d94f_f6a0e01b07dbe89255929931415b450b7780933b.jpg";
    
    document.querySelector('.h4.mb-0').innerText = `${profile.bio.first} ${profile.bio.last}`;
    document.querySelector('.text-primary').innerText = profile.bio.title;


    document.querySelectorAll('.__cf_email__').forEach(el => el.innerText = 'draymond.green@example.com');
    document.querySelector('.fas.fa-mobile-alt').nextElementSibling.innerText = '+1 (555) 123-4567';
    document.querySelector('.fas.fa-map-marker-alt').nextElementSibling.innerText = 'Oakland, California, USA';

 
    document.querySelector('#About Me').nextElementSibling.innerHTML = profile.bio.about;

   
    document.querySelector('.card-body > h3').innerText = profile.edu.name;
    document.querySelector('.card-body > p').innerText = `Major: ${profile.edu.major}`;

  
    document.querySelector('.card-body > h3').innerText = profile.career.company;
    document.querySelector('.card-body > p').innerText = `Title: ${profile.career.title}, Role: ${profile.career.role}`;

  
    let progressBars = document.querySelectorAll('.custom-progress .progress-bar');
    profile.skills.forEach((skill, index) => {
        progressBars[index].style.width = `${skill.level}%`;
        progressBars[index].setAttribute('aria-valuenow', skill.level);
        document.querySelectorAll('.progress-text .fw-bold')[index].innerText = skill.title;
        document.querySelectorAll('.progress-text .text-end')[index].innerText = `${skill.level}%`;
    });


    document.querySelectorAll('.fab.fa-facebook-f').forEach(el => el.parentElement.setAttribute('href', profile.social[0].facebook));
    document.querySelectorAll('.fab.fa-twitter').forEach(el => el.parentElement.setAttribute('href', profile.social[1].X));
    document.querySelectorAll('.fab.fa-youtube').forEach(el => el.parentElement.setAttribute('href', profile.social[2].youtube));
    document.querySelectorAll('.fab.fa-linkedin-in').forEach(el => el.parentElement.setAttribute('href', profile.social[3].linkedIn));


    document.body.style.backgroundColor = "#f4f4f4";
    document.body.style.color = "#333";
});

