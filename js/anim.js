
const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {
    //loop: true,
    deleteSpeed: 30
})

.changeDelay(50)
.typeString('Bienvenue sur mon Portfolio')
.pauseFor(300)
.typeString('<br> Emma Fouillat - 18ans')
.pauseFor(600)
.deleteChars(8)
.pauseFor(300)
.typeString('<br> <span style="color: #f94144;"> Dev HTML </span>')
.pauseFor(600)
.deleteChars(10)
.typeString('<span style="color: #f3722c;"> Dev CSS </span>')
.pauseFor(600)
.deleteChars(9)
.typeString('<span style="color: #d81159;"> Dev JS </span>')
.pauseFor(600)
.deleteChars(8)
.typeString('<span style="color: #f9c74f;"> Design </span>')
.pauseFor(600)
.deleteChars(7)
.typeString('<span style="color: #90be6d;"> Montage Photo / Vidéo </span>')
.pauseFor(600)
.deleteChars(22)
.typeString('<span style="color: #4d908e;"> Communication </span>')
.pauseFor(600)
.deleteChars(14)
.typeString('<span style="color: #00509d"> Polyvalente</span>')
.pauseFor(600)
.start()
.finish()