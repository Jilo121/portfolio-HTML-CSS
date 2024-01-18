let project = {
        'name' :["Madagasi'tsara","Taotranon'ny Nosy","CMS Jirama","Fanafodiko","Envoie email"],
        'description':["Java, Android Studio", "React js, node, express","Symfony, Oracle","React Native","Python"],
        'detail':["Application mobile: Encyclopedie des histoires des foko Malagasy", "Application web pour la gestion d'une entreprise de construction","Gestion du Centre Medicaux-Sociale du Jirama","Dictionnaire des medicaments et maladies les plus repondus a Madagascar","Envoie d'email automatique pendant une durree limite a une date precise"],
}

let langage = {
    'name':["HTML","CSS","Javascript","Python","React Js","React Native","Laravel","Symfony","Photoshop"],
    'image':["html.png","css.png","js.png","py.png","react.png","react.png","laravel.png","symfony.png","ps.png"]
}

const span = document.querySelector('.insertProj');
const comp_langage = document.querySelector('.langage_container');


for (i=0;i<project.name.length;i++) {
    const div = "<div class='card'><p class='titreproj'>"+ project.name[i] +"</p><p class='descr'>"+ project.description[i] + "</p><p class='detail'>"+ project.detail[i] +"</p>"+ "<img src='./assets/img/git-logo.png' alt='profile image' class='git'>" +"</div>"
    span.innerHTML += div
}
for (i=0;i<langage.name.length;i++) {
    const div = "<div class='card'><img src='./assets/img/"+ langage.image[i] +"' alt='"+ langage.image[i] +"' class='lname'><p class='descr'>"+ langage.name[i] + "</p></div>"
    comp_langage.innerHTML += div
}