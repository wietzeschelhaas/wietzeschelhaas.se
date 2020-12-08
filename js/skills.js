var skills = ["Java", "C#", "C", "C++", "Python", "Javascript", "Libgdx", "OpenGL", "OpenGL ES", "Android", "Matlab", "SQL","SQLite", "HTML", "CSS", "Bootstrap","Git", "Node.js", "Electron", "Latex", "Vim", "Visual Studio", "Intellij", "Gradle", "Keras","Box2D","Unity", "Apache", "REST"]

var htmlString = "";

for (i = 0; i < skills.length; i++) {
    htmlString +='<span id="#skill" class=" badge badge-pill badge-dark skill-badge">'+ skills[i] + '</span> \n'
  }


$('div.skills-container').html(htmlString);

$('#skills-search').on('input',function(e){
    htmlString = "";
    $( "div.skills-container" ).empty()
    var skillSearch = $('#skills-search').val();

    for (i = 0; i < skills.length; i++) {
        if(skills[i].toLowerCase().includes(skillSearch.toLowerCase())){
            htmlString +='<span class=" badge badge-pill badge-dark skill-badge">'+ skills[i] + '</span> \n';
        }
      }
    
    
    $('div.skills-container').html(htmlString);
});
