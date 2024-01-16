let project = {
        'name' :["Madagasi'tsara","Taotranon'ny Nosy","CMS Jirama","Fanafodiko","Envoie email"],
        'description':["Java, Android Studio", "React js, node, express","Symfony, Oracle","React Native","Python"],
        'detail':["Application mobile: Encyclopedie des histoires des foko Malagasy", "Application web pour la gestion d'une entreprise de construction","Gestion du Centre Medicaux-Sociale du Jirama","Dictionnaire des medicaments et maladies les plus repondus a Madagascar","Envoie d'email automatique pendant une durree limite a une date precise"],
}

const span = document.querySelector('.insertProj');

console.log(span)


for (i=0;i<project.name.length;i++) {
    const div = "<div class='card'><p class='titreproj'>"+ project.name[i] +"</p><p class='descr'>"+ project.description[i] + "</p><p class='detail'>"+ project.detail[i] +"</p>"+ "<img src='./assets/img/git-logo.png' alt='profile image' class='git'>" +"</div>"
    
    console.log(div)

    span.innerHTML += div
}