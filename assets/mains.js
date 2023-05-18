const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const mario = document.querySelector('.mario');
const peach = document.querySelector('.peach');
const toad = document.querySelector('.toad');
const imgPersonaje = document.querySelector('.main-character');
const personajeAnimacion = document.querySelector('.character-animation');
const personajeFortalezas = document.querySelector('.fortalezas');
const personajeDebilidades = document.querySelector('.debilidades');
const changeText= document.querySelector('.changeText');
const personajeRasgos= document.querySelector('.personaje-rasgos');
const mainCharacter = document.querySelector('.personaje-frase');
const fraseCancion = document.querySelector('.frase-cancion');
const frase = document.querySelector('.frase');
const analysisForm = document.querySelector('.send-message');
const sexoGeneroForm = document.querySelector('.sexo-genero');
const descriptionInput = document.querySelector('.description');
const getAnalysisBtn = document.querySelector('.new-analysis');
const responseP = document.querySelector('.response');
const sexoGeneroBtn = document.querySelector('.sexo-genero-btn');
const sexoInput = document.querySelector('.sexo-txt');
const generoInput = document.querySelector('.genero-txt');
const changeTextSexo= document.querySelector('.changeTextSexo');


let animationInterval;

const API = 'https://big-five-personality-insights.p.rapidapi.com/api/big5'

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '9966e16996msh286da2e6d5fcb6bp1e1acdjsnee3712e132c2',
		'X-RapidAPI-Host': 'big-five-personality-insights.p.rapidapi.com'
	},
	body: [{"id":"1","language":"en","text":"mensaje"}]
};

const personajes = {
    mario: "assets/images/mario-main.png",
    peach: "assets/images/peach-main.png",
    toad: "assets/images/toad-main.png"
}

const personajesWalking = {
    mario: "assets/images/mario-walk-",
    peach: "assets/images/peach-walk-",
    toad: "assets/images/toad-walk-"
}

const rasgos = {
    // 1 = positivo, 0 = negativo
    achievement_striving: ["logro_empeño",1,"desaliento"],
    active: ["activo",1,"pasivo"],
    adventurous: ["aventurero",1,"precavido"],
    agreeableness: ["afabilidad",1,"hostilidad"],
    altruism: ["altruismo",1,"egoísmo"],
    artistic: ["artístico",1,"sin_talento_artístico"],
    assertive: ["asertivo",1,"poco asertivo"],
    authority_challenging: ["desafío_autoridad",0,"respeto_autoridad"],
    cautious: ["cauteloso",1,"temerario"],
    cheerful: ["alegre",1,"triste"],
    conscientiousness: ["escrupulosidad",1,"descuido"],
    cooperative: ["cooperativo",1,"no_cooperativo"],
    disciplined: ["disciplinado",1,"indisciplinado"],
    dutiful: ["deber",1,"desobligación"],
    emotionally_aware: ["conciencia_emocional",1,"poca_conciencia_emocional"],
    excitement_seeking: ["búsqueda_emoción",0,"serenidad"],
    extraversion: ["extraversión",1,"introversión"],
    fiery: ["fogoso",1,"tranquilo"],
    gregariousness: ["gregario",1,"solitario"],
    imaginative: ["imaginativo",1,"poco_imaginativo"],
    immoderation: ["immoderación",0,"moderación"],
    intellectual: ["intelectual",1,"poco_intelectual"],
    melancholy: ["melancolía",0,"felicidad"],
    modesty: ["modestia",1,"presunción"],
    neuroticism: ["neuroticismo",0,"estabilidad_emocional"],
    openness: ["apertura",1,"cerrado"],
    orderliness: ["orden",1,"desorden"],
    outgoing: ["extrovertido",1,"introvertido"],
    prone_to_worry: ["propenso_a_preocuparse",0,"despreocupado"],
    self_conscious: ["consciente_de_sí_mismo",1,"poca_conciencia_de_sí_mismo"],
    self_efficacy: ["autoeficacia",1,"inseguridad"],
    stress_prone: ["propenso_al_estrés",0,"resistente_al_estrés"],
    sympathy: ["simpatía",1,"insensibilidad"],
    trusting: ["confiado",1,"desconfiado"],
    uncompromising: ["intransigente",0,"flexible"]
}

let personaje = 'mario';
const paginas = ['.page1','.conceptualizacion','.presentacion-mei','.nivel1','.nivel1-1','.page2','.page3','.nivel1-2','.page4','.page5','.page6','.page7','.nivel1-3','.page8','.page10','.page11','.nivel1-4','.page12','.page14','.page15','.page16','.page17','.page18','.nivel2','.nivel2-5','.page19','.page20','.page21','.page22','.nivel2-6','.page23','.page24','.page25','.page26','.nivel2-7','.page27','.page28','.page29','.nivel3','.nivel3-8','.page30','.page31','.page32','.page33','.page34','.nivel3-9','.page35','.page36','.page37','.page38','.page39','.page40','.nivel3-10','.page41','.page42','.page43','.page44','.page46','.page47','.page49','.page50'];
let numPagina = 0;

/* Cambiar páginas */
function switchPages(operation) {
    if(operation==='next' && numPagina < paginas.length-1){
        numPagina += 1;
    } else if (operation==='prev' && numPagina > 0){
        numPagina -= 1;
    }
    for(let i = 0; i<paginas.length; i++){
        const pagina = document.querySelector(paginas[i]);
        i === numPagina ? pagina.classList.remove('inactive'): pagina.classList.add('inactive');
        const paginaVideo = document.querySelector('.page9');
        paginaVideo.classList.add('inactive')
        const pagina13Video = document.querySelector('.page13');
        pagina13Video.classList.add('inactive')
        const pagina45Video = document.querySelector('.page45');
        pagina45Video.classList.add('inactive')
        const pagina48Video = document.querySelector('.page48');
        pagina48Video.classList.add('inactive')
    }
    console.log(paginas[numPagina]);
    switch (paginas[numPagina]) {
        case '.page1':
            page1();
            break;
        case '.page2':
            page2();
            break;
        case '.page3':
            page3();
            break;
        case '.page4':
            page4();
            break;
        case '.page5':
            page5();
            break;
        case '.page6':
            page6();
            break;
        case '.page7':
            page7();
            break;
        case '.page8':
            page8();
            break;
        case '.page10':
            page10();
            break;
        case '.page11':
            page11();
            break;
        case '.page12':
            page12();
            break;
        case '.page16':
            page16();
            break;
        case '.page18':
            page18();
            break;
        case '.page20':
            page20();
            break;
        case '.page21':
            page21();
            break;
        case '.page22':
            page22();
            break;
        case '.page23':
            page23();
            break;
        case '.page24':
            page24();
            break;
        case '.page25':
            page25();
            break;
        case '.page26':
            page26();
            break;    
        case '.page27':
            page27();
            break;  
        case '.page28':
            page28();
            break;
        case '.page29':
            page29();
            break;  
        case '.page30':
            page30();
            break; 
        case '.page31':
            page31();
            break; 
        case '.page33':
            page33();
            break; 
        case '.page34':
            page34();
            break; 
        case '.page35':
            page35();
            break; 
        case '.page36':
            page36();
            break;
        case '.page37':
            page37();
            break;
        case '.page39':
            page39();
            break;
        case '.page40':
            page40();
            break;
        case '.page41':
            page41();
            break;
        case '.page42':
            page42();
            break;
        case '.page43':
            page43();
            break;
        case '.page44':
            page44();
            break;
        case '.page46':
            page46();
            break;
        case '.page47':
            page47();
            break;
        case '.page49':
            page49();
            break;
    }
}

btnNext.addEventListener('click',()=>switchPages('next'));

btnPrev.addEventListener('click',()=>switchPages('prev'));

function page1() {
    function elementosPagina1(classPage) {
        const page = document.querySelector(classPage);
        let topNube = 130;
        let leftNube = -30;
        for(let i = 0; i <2; i++) {
            const nube = document.createElement("img");
            nube.src = "assets/images/nube.png";
            nube.classList.add('nube');
            nube.style.top = topNube + "px";
            nube.style.left = leftNube + "px";
            page.append(nube);
            topNube=250;
            leftNube = 180;
        }
    
        for(let i = 0; i < 5; i++) {
            const bloque = document.createElement("img");
            bloque.src = "assets/images/bloque.png";
            bloque.classList.add('bloque');
            bloque.style.left = (60*i) + "px";
            page.append(bloque);
        }
    }
    elementosPagina1('.page1');
}
page1();

function page2(){
    function asignaPersonaje(personajePrin) {
        imgPersonaje.src = personajes[personaje];
    }
    
    mario.addEventListener('click', function() {
        personaje = 'mario';
        asignaPersonaje(personaje);
    })
    peach.addEventListener('click', function() {
        personaje = 'peach';
        asignaPersonaje(personaje);
    })
    toad.addEventListener('click', function() {
        personaje = 'toad';
        asignaPersonaje(personaje);
    
    })
}

function page3() {
    async function fetchData(urlAPI, options){
        const response = await fetch(urlAPI, options);
        const data = await response.json();
        return data;
    }


    function ordenaLista(analysis) {
        let listaOrdenada = [];
        for (let rasgo in analysis) {
            let puntaje;
            if (rasgos[rasgo][1] === 0){
                puntaje = 1 - analysis[rasgo];
            } else {
                puntaje = analysis[rasgo];
            }
            listaOrdenada.push([rasgos[rasgo][0], rasgos[rasgo][1],rasgos[rasgo][2], puntaje]);
        }
        listaOrdenada.sort(function(a, b) {
            return a[3] - b[3];
        });

        return listaOrdenada;
    }

    function fortalezasDebilidades(arr) {
        let fortaleza = arr.slice(-5);
        let debilidad = arr.slice(0,5);
        for(let i in fortaleza){
            if(fortaleza[i][1]===0) {
                fortaleza[i] = [fortaleza[i][2],fortaleza[i][3],fortaleza[i][1]];
            } else {
                fortaleza[i] = [fortaleza[i][0],fortaleza[i][3],fortaleza[i][1]];
            }
        }
        for(let i in debilidad){
            if(debilidad[i][1]===1) {
                debilidad[i] = [debilidad[i][2],debilidad[i][3],debilidad[i][1]];
            } else {
                debilidad[i] = [debilidad[i][0],debilidad[i][3],debilidad[i][1]];
            }
        }
        return [debilidad,fortaleza];
    }

    getAnalysisBtn.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(descriptionInput.value)
        options.body = `[{"id":"1","language":"es","text":"${descriptionInput.value}"}]`;
        (async () => {
            try {
                const analysis = await fetchData(API, options);
                analysisForm.remove();
                personajeRasgos.classList.remove('inactive');
                mainCharacter.classList.remove('inactive');
                frase.innerText = '"'+fraseCancion.value+'"';
                delete analysis[0]['id'];
                const lista = ordenaLista(analysis[0]);
                const clasificacion = fortalezasDebilidades(lista);
                const fortalezas = clasificacion[1];
                const debilidades = clasificacion[0];
                for(let i=0; i<5; i++) {
                    const elemento = document.createElement("li");
                    const texto = document.createTextNode(fortalezas[i][0]);
                    elemento.appendChild(texto);
                    personajeFortalezas.appendChild(elemento);
                }
                for(let i=0; i<5; i++) {
                    const elemento = document.createElement("li");
                    const texto = document.createTextNode(debilidades[i][0]);
                    elemento.appendChild(texto);
                    personajeDebilidades.appendChild(elemento);
                }
                
                changeText.innerText = "Quedó listo tu personaje!";
            } catch (error) {
                console.error(error);
            }
        })();
    })
}

function page4() {
    const page4 = document.querySelector('.page4');
    for(let i = 0; i < 5; i++) {
        const bloque = document.createElement("img");
        bloque.src = "assets/images/bloque.png";
        bloque.classList.add('bloque');
        bloque.style.left = (60*i) + "px";
        page4.append(bloque);
    }
    let nImage = 1
    let contador = 1
    let movimiento = 5;
    clearInterval(animationInterval);
    personajeAnimacion.style.left = '0px';
    animationInterval = setInterval(() => {
        personajeAnimacion.src = `${personajesWalking[personaje]}${nImage}.png`;
        
        if (nImage == 3) {
            contador = 3;
        } else if (nImage==1) {
            contador = 1;
        }

        (contador == 1)? nImage+=1: nImage-=1;
        
        personajeAnimacion.style.left = `${movimiento}px`;
        movimiento+=5;
        if(movimiento>=130) {
            movimiento = 130;
            personajeAnimacion.src = personajes[personaje];
            clearInterval(animationInterval);
        }
        //reset the position to show first sprite after the last one
    }, 100);

    sexoGeneroBtn.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(sexoInput.value, generoInput.value)
                changeTextSexo.innerText = `Listo! Tus respuestas fueron: \n Sexo: ${sexoInput.value}\nGénero: ${generoInput.value}`;
                sexoGeneroForm.remove();
    })
}



function page5() {
    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');

    const gravity = 1.5;
    class Player {
        constructor() {
            this.position = {
                x:100,
                y:100
            };
            this.velocity = {
                x: 0,
                y: 0
            }
            this.width = 30;
            this.height = 30;
        }
        draw() {
            c.fillStyle = 'red'
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }

        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;

            if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
            } else this.velocity.y = 0;
        }
    }

    class Platform {
        constructor(x,y,image) {
            this.position = {
                x:x,
                y:y
            }
            this.image = image;
            this.width = 50;
            this.height = 50;
        }

        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }

    const imageBrick = document.createElement('img');
    imageBrick.src = 'assets/images/brick.png';

    const imageFloor = document.createElement('img');
    imageFloor.src = 'assets/images/bloque.png';

    const imageQuestion = document.createElement('img');
    imageQuestion.src = 'assets/images/question-block.png'

    const player = new Player();
    const platforms = [new Platform(0,370,imageFloor),
        new Platform(50,370,imageFloor),
        new Platform(100,370,imageFloor),
        new Platform(150,370,imageFloor),
        new Platform(200,370,imageFloor),
        new Platform(250,370,imageFloor),
        new Platform(150,230,imageQuestion),
        new Platform(200,230,imageBrick),
        new Platform(250,230,imageQuestion),
        new Platform(300,230,imageBrick)]

    const keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        }
    }

    function animate() {
        if (paginas[numPagina] === '.page5') {
            requestAnimationFrame(animate);
        } else {  
            return;
        }
        c.clearRect(0,0,canvas.width, canvas.height)
        console.log('go')
        platforms.forEach(platform => {
            platform.draw();
        })
        player.update();

        if (keys.right.pressed && player.position.x < 300-player.width) {
            player.velocity.x = 5;
        } else if (keys.left.pressed && player.position.x > 0) {
            player.velocity.x = -5;
        } else {
            player.velocity.x = 0;
        }
        
        let brickCounter = 0;
        platforms.forEach(platform => {
            if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0;
            } else if (player.position.y >= platform.position.y + platform.height && player.position.y + player.velocity.y <= platform.position.y + platform.height && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 5;
                if(brickCounter == 6){
                    document.querySelector('.def-sexo').classList.remove('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                    console.log('sexo');
                } else if (brickCounter==8) {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.remove('inactive');
                    console.log('genero');
                } else {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                }
            }
            brickCounter +=1;
        })
    }
    animate();

    window.addEventListener('keydown', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = true;
                break;
            case 'ArrowRight':
                keys.right.pressed = true;
                break;
            case 'ArrowUp':
                player.velocity.y -= 20;
                break;
            case 'ArrowDown':
                break;
        }
    })
    window.addEventListener('keyup', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = false;
                break;
            case 'ArrowRight':
                keys.right.pressed = false;
                break;
            case 'ArrowUp':
                break;
            case 'ArrowDown':
                break;
        }
    })
}

function page6() {
    document.querySelector('.video-cactus').src = 'https://www.youtube.com/embed/18-bMttK_j4?controls=0';
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.classList);
}

function drop(ev){
    var data = ev.dataTransfer.getData("text");
    if(ev.target.classList[0].includes("genero-drop") &&  data.includes("genero-drop") || ev.target.classList[0].includes("sexo-drop") &&  data.includes("sexo-drop")) {
        ev.target.appendChild(document.querySelector(`.${data}`))
    }
}

function page7() {
    
}

function page8() {
    const canvas = document.querySelector('.canvas2');
    const c = canvas.getContext('2d');

    const gravity = 1.5;
    class Player {
        constructor() {
            this.position = {
                x:100,
                y:100
            };
            this.velocity = {
                x: 0,
                y: 0
            }
            this.width = 30;
            this.height = 30;
        }
        draw() {
            c.fillStyle = 'red'
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }

        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;

            if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
            } else this.velocity.y = 0;
        }
    }

    class Platform {
        constructor(x,y,image) {
            this.position = {
                x:x,
                y:y
            }
            this.image = image;
            this.width = 50;
            this.height = 50;
        }

        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }

    class Pipe {
        constructor(x,y,image) {
            this.position = {
                x,
                y
            }
            this.image = image;
            this.width = 60;
            this.height= 60;
        }
        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }

    const imageBrick = document.createElement('img');
    imageBrick.src = 'assets/images/brick.png';

    const imageFloor = document.createElement('img');
    imageFloor.src = 'assets/images/bloque.png';

    const imageQuestion = document.createElement('img');
    imageQuestion.src = 'assets/images/question-block.png'

    const imagePipe = document.createElement('img');
    imagePipe.src = 'assets/images/small-pipe.png'

    const player = new Player();
    const platforms = [new Platform(0,370,imageFloor),
        new Platform(50,370,imageFloor),
        new Platform(100,370,imageFloor),
        new Platform(150,370,imageFloor),
        new Platform(200,370,imageFloor),
        new Platform(250,370,imageFloor)]
    
    const pipes = [new Pipe(100,310,imagePipe),
        new Pipe(220,310,imagePipe)]

    const keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        }
    }

    function animate() {
        if (paginas[numPagina] === '.page8') {
            requestAnimationFrame(animate);
        } else {  
            return;
        }
        c.clearRect(0,0,canvas.width, canvas.height)
        console.log('go')
        platforms.forEach(platform => {
            platform.draw();
        })
        player.update();
        pipes.forEach(pipe => {
            pipe.draw();
        })

        if (keys.right.pressed && player.position.x < 300-player.width) {
            player.velocity.x = 5;
        } else if (keys.left.pressed && player.position.x > 0) {
            player.velocity.x = -5;
        } else {
            player.velocity.x = 0;
        }
        
        let brickCounter = 0;
        platforms.forEach(platform => {
            if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0;
            } else if (player.position.y >= platform.position.y + platform.height && player.position.y + player.velocity.y <= platform.position.y + platform.height && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 5;
                if(brickCounter == 6){
                    document.querySelector('.def-sexo').classList.remove('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                    console.log('sexo');
                } else if (brickCounter==8) {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.remove('inactive');
                    console.log('genero');
                } else {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                }
            }
            brickCounter +=1;
        })

        let pipeCounter = 0;
        pipes.forEach(platform => {
            if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0;
            } else if (player.position.y >= platform.position.y + platform.height && player.position.y + player.velocity.y <= platform.position.y + platform.height && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 5;
                if(brickCounter == 6){
                    document.querySelector('.def-sexo').classList.remove('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                    console.log('sexo');
                } else if (brickCounter==8) {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.remove('inactive');
                    console.log('genero');
                } else {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                }
            }
            if (player.position.x + player.width <= platform.position.x && player.position.x + player.width + player.velocity.x >= platform.position.x && player.position.y + player.height >= platform.position.y && player.position.y <= platform.position.y + platform.height){
                player.velocity.x = 0;
            } else if (player.position.x >= platform.position.x + platform.width && player.position.x + player.velocity.x <= platform.position.x + platform.width && player.position.y + player.height >= platform.position.y && player.position.y <= platform.position.y + platform.height){
                player.velocity.x = 0;
            }
            pipeCounter +=1;
        })
    }
    animate();

    window.addEventListener('keydown', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = true;
                break;
            case 'ArrowRight':
                keys.right.pressed = true;
                break;
            case 'ArrowUp':
                player.velocity.y -= 20;
                break;
            case 'ArrowDown':
                if(paginas[numPagina] === '.page8'){
                    let pipeCounter1 = 0;
                    pipes.forEach(pipe =>{
                        if(player.position.x >= pipe.position.x && player.position.y<= pipe.position.y && player.position.x + player.width <= pipe.position.x + pipe.width){
                            const videoPage = document.querySelector('.page9')
                            videoPage.classList.remove('inactive')
                            const pipePage = document.querySelector('.page8')
                            pipePage.classList.add('inactive')
                            if(pipeCounter1 === 0){
                                document.querySelector('.song-choose').src = 'https://www.youtube.com/embed/K4xcwQWCPow';
                            } else {
                                document.querySelector('.song-choose').src = 'https://www.youtube.com/embed/QL5-xyGQCtA';
                            }
                        }
                        pipeCounter1+=1;
                    })
                }
                break;
        }
    })
    window.addEventListener('keyup', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = false;
                break;
            case 'ArrowRight':
                keys.right.pressed = false;
                break;
            case 'ArrowUp':
                break;
            case 'ArrowDown':
                break;
        }
    })
}


const wrapText = function(ctx, text, x, y, maxWidth, lineHeight) {
    // First, start by splitting all of our text into words, but splitting it into an array split by spaces
    let words = text.split(' ');
    let line = ''; // This will store the text of the current line
    let testLine = ''; // This will store the text when we add a word, to test if it's too long
    let lineArray = []; // This is an array of lines, which the function will return

    // Lets iterate over each word
    for(var n = 0; n < words.length; n++) {
        // Create a test line, and measure it..
        testLine += `${words[n]} `;
        let metrics = ctx.measureText(testLine);
        let testWidth = metrics.width;
        // If the width of this test line is more than the max width
        if (testWidth > maxWidth && n > 0) {
            // Then the line is finished, push the current line into "lineArray"
            lineArray.push([line, x, y]);
            // Increase the line height, so a new line is started
            y += lineHeight;
            // Update line and test line to use this word as the first word on the next line
            line = `${words[n]} `;
            testLine = `${words[n]} `;
        }
        else {
            // If the test line is still less than the max width, then add the word to the current line
            line += `${words[n]} `;
        }
        // If we never reach the full max width, then there is only one line.. so push it into the lineArray so we return something
        if(n === words.length - 1) {
            lineArray.push([line, x, y]);
        }
    }
    // Return the line array
    return lineArray;
}

function page10() {
    const canvas = document.querySelector('.canvas3');
    const c = canvas.getContext('2d');

    const gravity = 1.5;
    class Player {
        constructor() {
            this.position = {
                x:100,
                y:100
            };
            this.velocity = {
                x: 0,
                y: 0
            }
            this.width = 30;
            this.height = 30;
        }
        draw() {
            c.fillStyle = 'red'
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }

        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;

            if (this.position.y + this.height + this.velocity.y <= canvas.height && this.position.x +this.width < 210) {
            this.velocity.y += gravity;
            } else this.velocity.y = 0;
        }
    }

    class Platform {
        constructor(x,y,image) {
            this.position = {
                x:x,
                y:y
            }
            this.velocity = {
                x: 0,
                y: 0
            }
            this.image = image;
            this.width = 50;
            this.height = 50;
        }

        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;
        }
    }

    class BeanStalk {
        constructor(x,y,image) {
            this.position = {
                x,
                y
            }
            this.velocity = {
                x: 0,
                y: 0
            }
            this.image = image;
            this.width = 60;
            this.height= 60;
        }
        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;
        }
    }

    class TextsBean {
        constructor(x, y, text) {
            this.position = {
                x,
                y
            };
            this.velocity = {
                x: 0,
                y: 0
            };
            this.text = text;
            this.maxWidth = 190; // Anchura máxima para ajustar el texto
            this.lineHeight = 20; // Altura de línea para ajustar el texto
        }
    
        wrapText(context, text, x, y, maxWidth, lineHeight) {
            var words = text.split(' ');
            var line = '';
    
            for (var i = 0; i < words.length; i++) {
                var testLine = line + words[i] + ' ';
                var metrics = context.measureText(testLine);
                var testWidth = metrics.width;
                
                if (testWidth > maxWidth) {
                    context.fillText(line, x, y);
                    line = words[i] + ' ';
                    y += lineHeight;
                } else {
                    line = testLine;
                }
            }
    
            context.fillText(line, x, y);
        }
    
        draw() {
            c.font = "16px VT323";
            c.fillStyle = "#000000";
            this.wrapText(c, this.text, this.position.x, this.position.y, this.maxWidth, this.lineHeight);
        }
    
        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;
        }
    }

    const imageBrick = document.createElement('img');
    imageBrick.src = 'assets/images/brick.png';

    const imageFloor = document.createElement('img');
    imageFloor.src = 'assets/images/bloque.png';

    const imageQuestion = document.createElement('img');
    imageQuestion.src = 'assets/images/question-block.png'

    const imageBeanStalk = document.createElement('img');
    imageBeanStalk.src = 'assets/images/beanstalk.png'

    const player = new Player();
    const platforms = [new Platform(0,370,imageFloor),
        new Platform(50,370,imageFloor),
        new Platform(100,370,imageFloor),
        new Platform(150,370,imageFloor),
        new Platform(200,370,imageFloor),
        new Platform(250,370,imageFloor)]
    
    const beanStalks = [
        new BeanStalk(210,310,imageBeanStalk),
        new BeanStalk(210,250,imageBeanStalk),
        new BeanStalk(210,190,imageBeanStalk),
        new BeanStalk(210,130,imageBeanStalk),
        new BeanStalk(210,70,imageBeanStalk),
        new BeanStalk(210,10,imageBeanStalk),
        new BeanStalk(210,-50,imageBeanStalk),
        new BeanStalk(210,-110,imageBeanStalk),
        new BeanStalk(210,-170,imageBeanStalk),
        new BeanStalk(210,-230,imageBeanStalk),
        new BeanStalk(210,-290,imageBeanStalk),
        new BeanStalk(210,-350,imageBeanStalk),
        new BeanStalk(210,-410,imageBeanStalk),
    ]
    const textsBeans = [
        new TextsBean(20,310,"Sube por la planta"),
        new TextsBean(20,240,"1. ¿Qué es identidad de género?"),
        new TextsBean(20,100,"2. La identidad de género se refiere a cómo te sientes en tu interior, es decir, si te sientes identificado como hombre, mujer, ambos o ninguno."),
        new TextsBean(20,-55,"3. Debes tener en cuenta que algunas personas se sienten cómodas con el género que se les asignó al nacer, mientras que otras pueden sentirse cómodas con un género diferente."),
        new TextsBean(20,-190,"4. Tú puedes expresar tu identidad de género de la manera que te haga feliz, por ejemplo, a través de tu ropa, gustos, cabello, entre otros aspectos"),
        new TextsBean(20,-380,"5. Te daré un ejemplo, Mario nació con cuerpo de hombre, sin embargo, al crecer comenzó a sentirse identificado con el género femenino, por lo tanto, el comenzó a comportarse y vestirse de manera femenina, pues se siente más feliz.")
    ]

    const keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        },
        up: {
            pressed: false
        }
    }

    function animate() {
        if (paginas[numPagina] === '.page10') {
            requestAnimationFrame(animate);
        } else {  
            return;
        }
        c.clearRect(0,0,canvas.width, canvas.height)
        platforms.forEach(platform => {
            platform.update();
        })
        beanStalks.forEach(beanStalk => {
            beanStalk.update();
        })
        textsBeans.forEach(textsBean => {
            textsBean.update();
        })
        player.update();

        if (keys.right.pressed && player.position.x < 300-player.width) {
            player.velocity.x = 5;
        } else if (keys.left.pressed && player.position.x > 0) {
            player.velocity.x = -5;
        } else {
            player.velocity.x = 0;
        }

        let brickCounter = 0;
        platforms.forEach(platform => {
            if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0;
            } else if (player.position.y >= platform.position.y + platform.height && player.position.y + player.velocity.y <= platform.position.y + platform.height && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 5;
                if(brickCounter == 6){
                    document.querySelector('.def-sexo').classList.remove('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                    console.log('sexo');
                } else if (brickCounter==8) {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.remove('inactive');
                    console.log('genero');
                } else {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                }
            }
            brickCounter +=1;
        })

        let beanStalkCounter = 0;
        beanStalks.forEach(beanStalk => {
            if(beanStalks[12].position.y+beanStalks[12].velocity.y <= 0) {
                if(keys.up.pressed && player.position.x >= beanStalk.position.x && player.position.x + player.width  <= beanStalk.position.x + beanStalk.width){
                    player.velocity.y = -2;
                    platforms.forEach(platform => {
                        platform.velocity.y = 2;
                    })
                    beanStalks.forEach(beanStalk => {
                        beanStalk.velocity.y = 2;
                    })
                    textsBeans.forEach(textsBean => {
                        textsBean.velocity.y = 2;
                    })
                    if (player.position.y + player.velocity.y <= 30){
                        player.velocity.y = 0
                    }
                } else {
                    platforms.forEach(platform => {
                        platform.velocity.y = 0;
                    })
                    beanStalks.forEach(beanStalk => {
                        beanStalk.velocity.y = 0;
                    })
                    textsBeans.forEach(textsBean => {
                        textsBean.velocity.y = 0;
                    })
                }
                beanStalkCounter +=1;
             } else {
                beanStalk.velocity.y = 0;
                textsBeans.forEach(textsBean => {
                    textsBean.velocity.y = 0;
                })
             }
        })
    }
    animate();

    window.addEventListener('keydown', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = true;
                break;
            case 'ArrowRight':
                keys.right.pressed = true;
                break;
            case 'ArrowUp':
                keys.up.pressed = true;
                break;
            case 'ArrowDown':
                break;
        }
    })
    window.addEventListener('keyup', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = false;
                break;
            case 'ArrowRight':
                keys.right.pressed = false;
                break;
            case 'ArrowUp':
                keys.up.pressed = false;
                break;
            case 'ArrowDown':
                break;
        }
    })
}

const formPage11 = document.querySelector('.page11-form')
const btnPage11 = document.querySelector('.btn-page-11');
const txtPage111 = document.querySelector('.page11-txt-1')
const txtPage112 = document.querySelector('.page11-txt-2')
const txtPage113 = document.querySelector('.page11-txt-3')
const txtPage114 = document.querySelector('.page11-txt-4')
const changeTextPage11 = document.querySelector('.changeTextPage11')

function page11() {
    
    

    btnPage11.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(sexoInput.value, generoInput.value)
                changeTextPage11.innerText = `Listo! Tus respuestas fueron: \n${txtPage111.value}\n${txtPage112.value} \n${txtPage113.value} \n${txtPage114.value}`;
                formPage11.remove();
    })
}

function page12() {
    const canvas = document.querySelector('.canvas4');
    const c = canvas.getContext('2d');

    const gravity = 1.5;
    class Player {
        constructor() {
            this.position = {
                x:100,
                y:100
            };
            this.velocity = {
                x: 0,
                y: 0
            }
            this.width = 30;
            this.height = 30;
        }
        draw() {
            c.fillStyle = 'red'
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }

        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;

            if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
            } else this.velocity.y = 0;
        }
    }

    class Platform {
        constructor(x,y,image) {
            this.position = {
                x:x,
                y:y
            }
            this.image = image;
            this.width = 50;
            this.height = 50;
        }

        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }

    class Pipe {
        constructor(x,y,image) {
            this.position = {
                x,
                y
            }
            this.image = image;
            this.width = 60;
            this.height= 60;
        }
        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }

    const imageBrick = document.createElement('img');
    imageBrick.src = 'assets/images/brick.png';

    const imageFloor = document.createElement('img');
    imageFloor.src = 'assets/images/bloque.png';

    const imageQuestion = document.createElement('img');
    imageQuestion.src = 'assets/images/question-block.png'

    const imagePipe = document.createElement('img');
    imagePipe.src = 'assets/images/small-pipe.png'

    const player = new Player();
    const platforms = [new Platform(0,370,imageFloor),
        new Platform(50,370,imageFloor),
        new Platform(100,370,imageFloor),
        new Platform(150,370,imageFloor),
        new Platform(200,370,imageFloor),
        new Platform(250,370,imageFloor)]
    
    const pipes = [new Pipe(100,310,imagePipe),
        new Pipe(220,310,imagePipe)]

    const keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        }
    }

    function animate() {
        if (paginas[numPagina] === '.page12') {
            requestAnimationFrame(animate);
        } else {  
            return;
        }
        c.clearRect(0,0,canvas.width, canvas.height)
        console.log('go')
        platforms.forEach(platform => {
            platform.draw();
        })
        player.update();
        pipes.forEach(pipe => {
            pipe.draw();
        })

        if (keys.right.pressed && player.position.x < 300-player.width) {
            player.velocity.x = 5;
        } else if (keys.left.pressed && player.position.x > 0) {
            player.velocity.x = -5;
        } else {
            player.velocity.x = 0;
        }
        
        let brickCounter = 0;
        platforms.forEach(platform => {
            if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0;
            } else if (player.position.y >= platform.position.y + platform.height && player.position.y + player.velocity.y <= platform.position.y + platform.height && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 5;
                if(brickCounter == 6){
                    document.querySelector('.def-sexo').classList.remove('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                    console.log('sexo');
                } else if (brickCounter==8) {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.remove('inactive');
                    console.log('genero');
                } else {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                }
            }
            brickCounter +=1;
        })

        let pipeCounter = 0;
        pipes.forEach(platform => {
            if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0;
            } else if (player.position.y >= platform.position.y + platform.height && player.position.y + player.velocity.y <= platform.position.y + platform.height && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 5;
                if(brickCounter == 6){
                    document.querySelector('.def-sexo').classList.remove('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                    console.log('sexo');
                } else if (brickCounter==8) {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.remove('inactive');
                    console.log('genero');
                } else {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                }
            }
            if (player.position.x + player.width <= platform.position.x && player.position.x + player.width + player.velocity.x >= platform.position.x && player.position.y + player.height >= platform.position.y && player.position.y <= platform.position.y + platform.height){
                player.velocity.x = 0;
            } else if (player.position.x >= platform.position.x + platform.width && player.position.x + player.velocity.x <= platform.position.x + platform.width && player.position.y + player.height >= platform.position.y && player.position.y <= platform.position.y + platform.height){
                player.velocity.x = 0;
            }
            pipeCounter +=1;
        })
    }
    animate();

    window.addEventListener('keydown', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = true;
                break;
            case 'ArrowRight':
                keys.right.pressed = true;
                break;
            case 'ArrowUp':
                player.velocity.y -= 20;
                break;
            case 'ArrowDown':
                if(paginas[numPagina] === '.page12'){
                    let pipeCounter1 = 0;
                    pipes.forEach(pipe =>{
                        if(player.position.x >= pipe.position.x && player.position.y<= pipe.position.y && player.position.x + player.width <= pipe.position.x + pipe.width){
                            const videoPage = document.querySelector('.page13')
                            videoPage.classList.remove('inactive')
                            const pipePage = document.querySelector('.page12')
                            pipePage.classList.add('inactive')
                            if(pipeCounter1 === 0){
                                document.querySelector('.song-choose-page12').src = 'https://www.youtube.com/embed/e09zoT6-G9A';
                            } else {
                                document.querySelector('.song-choose-page12').src = 'https://www.youtube.com/embed/P7JhmTL9g7c';
                            }
                        }
                        pipeCounter1+=1;
                    })
                }
                break;
        }
    })
    window.addEventListener('keyup', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = false;
                break;
            case 'ArrowRight':
                keys.right.pressed = false;
                break;
            case 'ArrowUp':
                break;
            case 'ArrowDown':
                break;
        }
    })
}

function allowDrop15(ev) {
    ev.preventDefault();
}

function drag15(ev) {
    ev.dataTransfer.setData("text", ev.target.classList[0]);
}

function drop15(ev){
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.querySelector(`.${data}`))
}

function page16() {
    const canvas = document.querySelector('.canvas5');
    const c = canvas.getContext('2d');

    const gravity = 1.5;
    class Player {
        constructor() {
            this.position = {
                x:100,
                y:100
            };
            this.velocity = {
                x: 0,
                y: 0
            }
            this.width = 30;
            this.height = 30;
        }
        draw() {
            c.fillStyle = 'red'
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }

        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;

            if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
            } else this.velocity.y = 0;
        }
    }

    class Platform {
        constructor(x,y,image) {
            this.position = {
                x:x,
                y:y
            }
            this.image = image;
            this.width = 50;
            this.height = 50;
        }

        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }

    const imageBrick = document.createElement('img');
    imageBrick.src = 'assets/images/brick.png';

    const imageFloor = document.createElement('img');
    imageFloor.src = 'assets/images/bloque.png';

    const imageQuestion = document.createElement('img');
    imageQuestion.src = 'assets/images/question-block.png'

    const player = new Player();
    const platforms = [new Platform(0,370,imageFloor),
        new Platform(50,370,imageFloor),
        new Platform(100,370,imageFloor),
        new Platform(150,370,imageFloor),
        new Platform(200,370,imageFloor),
        new Platform(250,370,imageFloor),
        new Platform(150,230,imageQuestion),
        new Platform(200,230,imageBrick),
        new Platform(250,230,imageQuestion),
        new Platform(300,230,imageBrick)]

    const keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        }
    }

    function animate() {
        if (paginas[numPagina] === '.page16') {
            requestAnimationFrame(animate);
        } else {  
            return;
        }
        c.clearRect(0,0,canvas.width, canvas.height)
        console.log('go')
        platforms.forEach(platform => {
            platform.draw();
        })
        player.update();

        if (keys.right.pressed && player.position.x < 300-player.width) {
            player.velocity.x = 5;
        } else if (keys.left.pressed && player.position.x > 0) {
            player.velocity.x = -5;
        } else {
            player.velocity.x = 0;
        }
        
        let brickCounter = 0;
        platforms.forEach(platform => {
            if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0;
            } else if (player.position.y >= platform.position.y + platform.height && player.position.y + player.velocity.y <= platform.position.y + platform.height && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 5;
                if(brickCounter == 6){
                    document.querySelector('.def-roles').classList.remove('inactive');
                    document.querySelector('.def-estereotipos').classList.add('inactive');
                    console.log('sexo');
                } else if (brickCounter==8) {
                    document.querySelector('.def-roles').classList.add('inactive');
                    document.querySelector('.def-estereotipos').classList.remove('inactive');
                    console.log('genero');
                } else {
                    document.querySelector('.def-roles').classList.add('inactive');
                    document.querySelector('.def-estereotipos').classList.add('inactive');
                }
            }
            brickCounter +=1;
        })
    }
    animate();

    window.addEventListener('keydown', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = true;
                break;
            case 'ArrowRight':
                keys.right.pressed = true;
                break;
            case 'ArrowUp':
                player.velocity.y -= 20;
                break;
            case 'ArrowDown':
                break;
        }
    })
    window.addEventListener('keyup', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = false;
                break;
            case 'ArrowRight':
                keys.right.pressed = false;
                break;
            case 'ArrowUp':
                break;
            case 'ArrowDown':
                break;
        }
    })
}

const formPage18 = document.querySelector('.page18-form')
const btnPage18 = document.querySelector('.btn-page-18');
const txtPage181 = document.querySelector('.page18-txt-1')
const txtPage182 = document.querySelector('.page18-txt-2')
const txtPage183 = document.querySelector('.page18-txt-3')
const txtPage184 = document.querySelector('.page18-txt-4')
const changeTextPage18 = document.querySelector('.changeTextPage18')

function page18() {
    btnPage18.addEventListener('click', function (event) {
        event.preventDefault();
                changeTextPage18.innerText = `Listo! Tus respuestas fueron: \n${txtPage181.value}\n${txtPage182.value} \n${txtPage183.value} \n${txtPage184.value}`;
                formPage18.remove();
    })
}

function page20() {
    const canvas = document.querySelector('.canvas6');
    const c = canvas.getContext('2d');

    const gravity = 1.5;
    class Player {
        constructor() {
            this.position = {
                x:100,
                y:100
            };
            this.velocity = {
                x: 0,
                y: 0
            }
            this.width = 30;
            this.height = 30;
        }
        draw() {
            c.fillStyle = 'red'
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }

        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;

            if (this.position.y + this.height + this.velocity.y <= canvas.height && this.position.x +this.width < 210) {
            this.velocity.y += gravity;
            } else this.velocity.y = 0;
        }
    }

    class Platform {
        constructor(x,y,image) {
            this.position = {
                x:x,
                y:y
            }
            this.velocity = {
                x: 0,
                y: 0
            }
            this.image = image;
            this.width = 50;
            this.height = 50;
        }

        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;
        }
    }

    class BeanStalk {
        constructor(x,y,image) {
            this.position = {
                x,
                y
            }
            this.velocity = {
                x: 0,
                y: 0
            }
            this.image = image;
            this.width = 60;
            this.height= 60;
        }
        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;
        }
    }

    class TextsBean {
        constructor(x, y, text, color) {
            this.position = {
                x,
                y
            };
            this.velocity = {
                x: 0,
                y: 0
            };
            this.text = text;
            this.color = color;
            this.maxWidth = 190; // Anchura máxima para ajustar el texto
            this.lineHeight = 20; // Altura de línea para ajustar el texto
        }
    
        wrapText(context, text, x, y, maxWidth, lineHeight) {
            var words = text.split(' ');
            var line = '';
    
            for (var i = 0; i < words.length; i++) {
                var testLine = line + words[i] + ' ';
                var metrics = context.measureText(testLine);
                var testWidth = metrics.width;
                
                if (testWidth > maxWidth) {
                    context.fillText(line, x, y);
                    line = words[i] + ' ';
                    y += lineHeight;
                } else {
                    line = testLine;
                }
            }
    
            context.fillText(line, x, y);
        }
    
        draw() {
            c.font = "16px VT323";
            c.fillStyle = "#000";
            c.shadowColor = this.color;
            c.shadowOffsetX = 0.5;
            c.shadowOffsetY = 0.5;
            this.wrapText(c, this.text, this.position.x, this.position.y, this.maxWidth, this.lineHeight);
        }
    
        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;
        }
    }

    const imageBrick = document.createElement('img');
    imageBrick.src = 'assets/images/brick.png';

    const imageFloor = document.createElement('img');
    imageFloor.src = 'assets/images/bloque.png';

    const imageQuestion = document.createElement('img');
    imageQuestion.src = 'assets/images/question-block.png'

    const imageBeanStalk = document.createElement('img');
    imageBeanStalk.src = 'assets/images/beanstalk.png'

    const player = new Player();
    const platforms = [new Platform(0,370,imageFloor),
        new Platform(50,370,imageFloor),
        new Platform(100,370,imageFloor),
        new Platform(150,370,imageFloor),
        new Platform(200,370,imageFloor),
        new Platform(250,370,imageFloor)]
    
    const beanStalks = [
        new BeanStalk(210,310,imageBeanStalk),
        new BeanStalk(210,250,imageBeanStalk),
        new BeanStalk(210,190,imageBeanStalk),
        new BeanStalk(210,130,imageBeanStalk),
        new BeanStalk(210,70,imageBeanStalk),
        new BeanStalk(210,10,imageBeanStalk),
        new BeanStalk(210,-50,imageBeanStalk),
        new BeanStalk(210,-110,imageBeanStalk),
        new BeanStalk(210,-170,imageBeanStalk),
        new BeanStalk(210,-230,imageBeanStalk),
        new BeanStalk(210,-290,imageBeanStalk),
        new BeanStalk(210,-350,imageBeanStalk),
        new BeanStalk(210,-410,imageBeanStalk),
    ]
    const textsBeans = [
        new TextsBean(20,310,"Sube por la planta","#000"),
        new TextsBean(20,240,"violentómetro","#000"),
        new TextsBean(20,70,"4. Necesitas ayuda de profesionales: Abuso sexual, amenazar de muerte, amenazarte con objetos, herirte hasta casi morir. Casos lamentables, homicidio o feminicidio", "#B10909"),
        new TextsBean(20,-55,"3. Reacciona, no te dejes destruir: Empujar, pellizcar, arañar, encerrar, y golpear","#FF8900"),
        new TextsBean(20,-240,"2. Ten cuidado, la violencia aumentara: Descalificar, ridiculizar, usar malas palabras hacia ti, controlar todo lo que haces, destruir artículos ","#FFE700"),
        new TextsBean(20,-380,"1. Por aquí se empieza: Bromas hirientes, mentir, engañar y chantajear.","#00FF00")
    ]

    const keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        },
        up: {
            pressed: false
        }
    }

    function animate() {
        if (paginas[numPagina] === '.page20') {
            requestAnimationFrame(animate);
        } else {  
            return;
        }
        c.clearRect(0,0,canvas.width, canvas.height)
        platforms.forEach(platform => {
            platform.update();
        })
        beanStalks.forEach(beanStalk => {
            beanStalk.update();
        })
        textsBeans.forEach(textsBean => {
            textsBean.update();
        })
        player.update();

        if (keys.right.pressed && player.position.x < 300-player.width) {
            player.velocity.x = 5;
        } else if (keys.left.pressed && player.position.x > 0) {
            player.velocity.x = -5;
        } else {
            player.velocity.x = 0;
        }

        let brickCounter = 0;
        platforms.forEach(platform => {
            if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0;
            } else if (player.position.y >= platform.position.y + platform.height && player.position.y + player.velocity.y <= platform.position.y + platform.height && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 5;
                if(brickCounter == 6){
                    document.querySelector('.def-sexo').classList.remove('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                    console.log('sexo');
                } else if (brickCounter==8) {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.remove('inactive');
                    console.log('genero');
                } else {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                }
            }
            brickCounter +=1;
        })

        let beanStalkCounter = 0;
        beanStalks.forEach(beanStalk => {
            if(beanStalks[12].position.y+beanStalks[12].velocity.y <= 0) {
                if(keys.up.pressed && player.position.x >= beanStalk.position.x && player.position.x + player.width  <= beanStalk.position.x + beanStalk.width){
                    player.velocity.y = -2;
                    platforms.forEach(platform => {
                        platform.velocity.y = 2;
                    })
                    beanStalks.forEach(beanStalk => {
                        beanStalk.velocity.y = 2;
                    })
                    textsBeans.forEach(textsBean => {
                        textsBean.velocity.y = 2;
                    })
                    if (player.position.y + player.velocity.y <= 30){
                        player.velocity.y = 0
                    }
                } else {
                    platforms.forEach(platform => {
                        platform.velocity.y = 0;
                    })
                    beanStalks.forEach(beanStalk => {
                        beanStalk.velocity.y = 0;
                    })
                    textsBeans.forEach(textsBean => {
                        textsBean.velocity.y = 0;
                    })
                }
                beanStalkCounter +=1;
             } else {
                beanStalk.velocity.y = 0;
                textsBeans.forEach(textsBean => {
                    textsBean.velocity.y = 0;
                })
             }
        })
    }
    animate();

    window.addEventListener('keydown', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = true;
                break;
            case 'ArrowRight':
                keys.right.pressed = true;
                break;
            case 'ArrowUp':
                keys.up.pressed = true;
                break;
            case 'ArrowDown':
                break;
        }
    })
    window.addEventListener('keyup', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = false;
                break;
            case 'ArrowRight':
                keys.right.pressed = false;
                break;
            case 'ArrowUp':
                keys.up.pressed = false;
                break;
            case 'ArrowDown':
                break;
        }
    })
}

function page21() {
    document.querySelector('.video-violencia').src = 'https://www.youtube.com/embed/Pv0L_1irw4M';
}

const formPage22 = document.querySelector('.page22-form')
const btnPage22 = document.querySelector('.btn-page-22');
const txtPage221 = document.querySelector('.page22-txt-1')
const txtPage222 = document.querySelector('.page22-txt-2')
const changeTextPage22 = document.querySelector('.changeTextPage22')

function page22() {
    btnPage22.addEventListener('click', function (event) {
        event.preventDefault();
                changeTextPage22.innerText = `Listo! Tus respuestas fueron: \n${txtPage221.value}\n${txtPage222.value}`;
                formPage22.remove();
    })
}

const formPage23 = document.querySelector('.page23-form')
const btnPage23 = document.querySelector('.btn-page-23');
const txtPage231 = document.querySelector('.page23-txt-1')
const changeTextPage23 = document.querySelector('.changeTextPage23')

function page23() {
    btnPage23.addEventListener('click', function (event) {
        event.preventDefault();
                changeTextPage23.innerText = `Listo! Tus respuestas fueron: \n${txtPage231.value}`;
                formPage23.remove();
    })
}

function page24() {
    const canvas = document.querySelector('.canvas7');
    const c = canvas.getContext('2d');

    const gravity = 1.5;
    class Player {
        constructor() {
            this.position = {
                x:100,
                y:100
            };
            this.velocity = {
                x: 0,
                y: 0
            }
            this.width = 30;
            this.height = 30;
        }
        draw() {
            c.fillStyle = 'red'
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }

        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;

            if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
            } else this.velocity.y = 0;
        }
    }

    class Platform {
        constructor(x,y,image) {
            this.position = {
                x:x,
                y:y
            }
            this.image = image;
            this.width = 50;
            this.height = 50;
        }

        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }

    const imageBrick = document.createElement('img');
    imageBrick.src = 'assets/images/brick.png';

    const imageFloor = document.createElement('img');
    imageFloor.src = 'assets/images/bloque.png';

    const imageQuestion = document.createElement('img');
    imageQuestion.src = 'assets/images/question-block.png'

    const player = new Player();
    const platforms = [new Platform(0,370,imageFloor),
        new Platform(50,370,imageFloor),
        new Platform(100,370,imageFloor),
        new Platform(150,370,imageFloor),
        new Platform(200,370,imageFloor),
        new Platform(250,370,imageFloor),
        new Platform(100,230,imageQuestion),
        new Platform(150,230,imageQuestion),
        new Platform(200,230,imageQuestion),
        new Platform(250,230,imageQuestion),
        new Platform(300,230,imageBrick)]

    const keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        }
    }

    function animate() {
        if (paginas[numPagina] === '.page24') {
            requestAnimationFrame(animate);
        } else {  
            return;
        }
        c.clearRect(0,0,canvas.width, canvas.height)
        console.log('go')
        platforms.forEach(platform => {
            platform.draw();
        })
        player.update();

        if (keys.right.pressed && player.position.x < 300-player.width) {
            player.velocity.x = 5;
        } else if (keys.left.pressed && player.position.x > 0) {
            player.velocity.x = -5;
        } else {
            player.velocity.x = 0;
        }
        
        let brickCounter = 0;
        platforms.forEach(platform => {
            if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0;
            } else if (player.position.y >= platform.position.y + platform.height && player.position.y + player.velocity.y <= platform.position.y + platform.height && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 5;
                switch (brickCounter) {
                    case 6:
                        document.querySelector('.def-violencia-1').classList.remove('inactive');
                        document.querySelector('.def-violencia-2').classList.add('inactive');
                        document.querySelector('.def-violencia-3').classList.add('inactive');
                        document.querySelector('.def-violencia-4').classList.add('inactive');
                        break;
                    case 7:
                        document.querySelector('.def-violencia-1').classList.add('inactive');
                        document.querySelector('.def-violencia-2').classList.remove('inactive');
                        document.querySelector('.def-violencia-3').classList.add('inactive');
                        document.querySelector('.def-violencia-4').classList.add('inactive');
                        break;
                    case 8:
                        document.querySelector('.def-violencia-1').classList.add('inactive');
                        document.querySelector('.def-violencia-2').classList.add('inactive');
                        document.querySelector('.def-violencia-3').classList.remove('inactive');
                        document.querySelector('.def-violencia-4').classList.add('inactive');
                        break;
                    case 9:
                        document.querySelector('.def-violencia-1').classList.add('inactive');
                        document.querySelector('.def-violencia-2').classList.add('inactive');
                        document.querySelector('.def-violencia-3').classList.add('inactive');
                        document.querySelector('.def-violencia-4').classList.remove('inactive');
                        break;
                    default:
                        document.querySelector('.def-violencia-1').classList.add('inactive');
                        document.querySelector('.def-violencia-2').classList.add('inactive');
                        document.querySelector('.def-violencia-3').classList.add('inactive');
                        document.querySelector('.def-violencia-4').classList.add('inactive');
                        break;
                }
            }
            brickCounter +=1;
        })
    }
    animate();

    window.addEventListener('keydown', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = true;
                break;
            case 'ArrowRight':
                keys.right.pressed = true;
                break;
            case 'ArrowUp':
                player.velocity.y -= 20;
                break;
            case 'ArrowDown':
                break;
        }
    })
    window.addEventListener('keyup', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = false;
                break;
            case 'ArrowRight':
                keys.right.pressed = false;
                break;
            case 'ArrowUp':
                break;
            case 'ArrowDown':
                break;
        }
    })
}

function page25() {
    document.querySelector('.video-violencia2').src = 'https://www.youtube.com/embed/NGz1o46t9fo';
}

const formPage26 = document.querySelector('.page26-form')
const btnPage26 = document.querySelector('.btn-page-26');
const txtPage261 = document.querySelector('.page26-txt-1')
const changeTextPage26 = document.querySelector('.changeTextPage26')

function page26() {
    btnPage26.addEventListener('click', function (event) {
        event.preventDefault();
                changeTextPage26.innerText = `Listo! Tus respuestas fueron: \n${txtPage261.value}`;
                formPage26.remove();
    })
}

function page27() {
    document.querySelector('.video-miedo').src = 'https://www.youtube.com/embed/DS8Hlnso7mI';
}

function page28() {
    const canvas = document.querySelector('.canvas8');
    const c = canvas.getContext('2d');

    const gravity = 1.5;
    class Player {
        constructor() {
            this.position = {
                x:100,
                y:100
            };
            this.velocity = {
                x: 0,
                y: 0
            }
            this.width = 30;
            this.height = 30;
        }
        draw() {
            c.fillStyle = 'red'
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }

        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;

            if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
            } else this.velocity.y = 0;
        }
    }

    class Platform {
        constructor(x,y,image) {
            this.position = {
                x:x,
                y:y
            }
            this.image = image;
            this.width = 50;
            this.height = 50;
        }

        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }

    const imageBrick = document.createElement('img');
    imageBrick.src = 'assets/images/brick.png';

    const imageFloor = document.createElement('img');
    imageFloor.src = 'assets/images/bloque.png';

    const imageQuestion = document.createElement('img');
    imageQuestion.src = 'assets/images/question-block.png'

    const player = new Player();
    const platforms = [new Platform(0,370,imageFloor),
        new Platform(50,370,imageFloor),
        new Platform(100,370,imageFloor),
        new Platform(150,370,imageFloor),
        new Platform(200,370,imageFloor),
        new Platform(250,370,imageFloor),
        new Platform(0,100,imageQuestion),
        new Platform(50,230,imageQuestion),
        new Platform(100,230,imageBrick),
        new Platform(100,100,imageQuestion),
        new Platform(150,230,imageQuestion),
        new Platform(200,230,imageBrick),
        new Platform(200,100,imageQuestion),
        new Platform(250,230,imageQuestion),
        new Platform(50,100,imageBrick),
        new Platform(150,100,imageBrick)]

    const keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        }
    }

    function animate() {
        if (paginas[numPagina] === '.page28') {
            requestAnimationFrame(animate);
        } else {  
            return;
        }
        c.clearRect(0,0,canvas.width, canvas.height)
        console.log('go')
        platforms.forEach(platform => {
            platform.draw();
        })
        player.update();

        if (keys.right.pressed && player.position.x < 300-player.width) {
            player.velocity.x = 5;
        } else if (keys.left.pressed && player.position.x > 0) {
            player.velocity.x = -5;
        } else {
            player.velocity.x = 0;
        }
        
        let brickCounter = 0;
        platforms.forEach(platform => {
            if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0;
            } else if (player.position.y >= platform.position.y + platform.height && player.position.y + player.velocity.y <= platform.position.y + platform.height && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 5;
                switch (brickCounter) {
                    case 6:
                        document.querySelector('.def-contexto-1').classList.remove('inactive');
                        document.querySelector('.def-contexto-2').classList.add('inactive');
                        document.querySelector('.def-contexto-3').classList.add('inactive');
                        document.querySelector('.def-contexto-4').classList.add('inactive');
                        document.querySelector('.def-contexto-5').classList.add('inactive');
                        document.querySelector('.def-contexto-6').classList.add('inactive');
                        break;
                    case 7:
                        document.querySelector('.def-contexto-1').classList.add('inactive');
                        document.querySelector('.def-contexto-2').classList.remove('inactive');
                        document.querySelector('.def-contexto-3').classList.add('inactive');
                        document.querySelector('.def-contexto-4').classList.add('inactive');
                        document.querySelector('.def-contexto-5').classList.add('inactive');
                        document.querySelector('.def-contexto-6').classList.add('inactive');
                        break;
                    case 9:
                        document.querySelector('.def-contexto-1').classList.add('inactive');
                        document.querySelector('.def-contexto-2').classList.add('inactive');
                        document.querySelector('.def-contexto-3').classList.remove('inactive');
                        document.querySelector('.def-contexto-4').classList.add('inactive');
                        document.querySelector('.def-contexto-5').classList.add('inactive');
                        document.querySelector('.def-contexto-6').classList.add('inactive');
                        break;
                    case 10:
                        document.querySelector('.def-contexto-1').classList.add('inactive');
                        document.querySelector('.def-contexto-2').classList.add('inactive');
                        document.querySelector('.def-contexto-3').classList.add('inactive');
                        document.querySelector('.def-contexto-4').classList.remove('inactive');
                        document.querySelector('.def-contexto-5').classList.add('inactive');
                        document.querySelector('.def-contexto-6').classList.add('inactive');
                        break;
                    case 12:
                        document.querySelector('.def-contexto-1').classList.add('inactive');
                        document.querySelector('.def-contexto-2').classList.add('inactive');
                        document.querySelector('.def-contexto-3').classList.add('inactive');
                        document.querySelector('.def-contexto-4').classList.add('inactive');
                        document.querySelector('.def-contexto-5').classList.remove('inactive');
                        document.querySelector('.def-contexto-6').classList.add('inactive');
                        break;
                    case 13:
                        document.querySelector('.def-contexto-1').classList.add('inactive');
                        document.querySelector('.def-contexto-2').classList.add('inactive');
                        document.querySelector('.def-contexto-3').classList.add('inactive');
                        document.querySelector('.def-contexto-4').classList.add('inactive');
                        document.querySelector('.def-contexto-5').classList.add('inactive');
                        document.querySelector('.def-contexto-6').classList.remove('inactive');
                        break;
                    default:
                        document.querySelector('.def-contexto-1').classList.add('inactive');
                        document.querySelector('.def-contexto-2').classList.add('inactive');
                        document.querySelector('.def-contexto-3').classList.add('inactive');
                        document.querySelector('.def-contexto-4').classList.add('inactive');
                        document.querySelector('.def-contexto-5').classList.add('inactive');
                        document.querySelector('.def-contexto-6').classList.add('inactive');
                        break;
                }
            }
            brickCounter +=1;
        })
    }
    animate();

    window.addEventListener('keydown', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = true;
                break;
            case 'ArrowRight':
                keys.right.pressed = true;
                break;
            case 'ArrowUp':
                player.velocity.y -= 20;
                break;
            case 'ArrowDown':
                break;
        }
    })
    window.addEventListener('keyup', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = false;
                break;
            case 'ArrowRight':
                keys.right.pressed = false;
                break;
            case 'ArrowUp':
                break;
            case 'ArrowDown':
                break;
        }
    })
}

const formPage29 = document.querySelector('.page29-form')
const btnPage29 = document.querySelector('.btn-page-29');
const txtPage291 = document.querySelector('.page29-txt-1')
const changeTextPage29 = document.querySelector('.changeTextPage29')

function page29() {
    btnPage29.addEventListener('click', function (event) {
        event.preventDefault();
                changeTextPage29.innerText = `Listo! Tus respuestas fueron: \n${txtPage291.value}`;
                formPage29.remove();
    })
}

const formPage30 = document.querySelector('.page30-form')
const btnPage30 = document.querySelector('.btn-page-30');
const txtPage301 = document.querySelector('.page30-txt-1')
const txtPage302 = document.querySelector('.page30-txt-2')
const txtPage303 = document.querySelector('.page30-txt-3')
const txtPage304 = document.querySelector('.page30-txt-4')
const txtPage305 = document.querySelector('.page30-txt-5')
const txtPage306 = document.querySelector('.page30-txt-6')
const changeTextPage30 = document.querySelector('.changeTextPage30')

function page30() {
    btnPage30.addEventListener('click', function (event) {
        event.preventDefault();
                changeTextPage30.innerText = `Listo! Tus respuestas fueron: 
                \nL: ${txtPage301.value}
                \nG: ${txtPage302.value}
                \nB: ${txtPage303.value}
                \nT: ${txtPage304.value}
                \nI: ${txtPage305.value}
                \nQ: ${txtPage306.value}`;
                formPage30.remove();
    })
}

function page31() {
    const canvas = document.querySelector('.canvas9');
    const c = canvas.getContext('2d');

    const gravity = 1.5;
    class Player {
        constructor() {
            this.position = {
                x:100,
                y:100
            };
            this.velocity = {
                x: 0,
                y: 0
            }
            this.width = 30;
            this.height = 30;
        }
        draw() {
            c.fillStyle = 'red'
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }

        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;

            if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
            } else this.velocity.y = 0;
        }
    }

    class Platform {
        constructor(x,y,image) {
            this.position = {
                x:x,
                y:y
            }
            this.image = image;
            this.width = 50;
            this.height = 50;
        }

        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }

    const imageBrick = document.createElement('img');
    imageBrick.src = 'assets/images/brick.png';

    const imageFloor = document.createElement('img');
    imageFloor.src = 'assets/images/bloque.png';

    const imageQuestion = document.createElement('img');
    imageQuestion.src = 'assets/images/question-block.png'

    const player = new Player();
    const platforms = [new Platform(0,370,imageFloor),
        new Platform(50,370,imageFloor),
        new Platform(100,370,imageFloor),
        new Platform(150,370,imageFloor),
        new Platform(200,370,imageFloor),
        new Platform(250,370,imageFloor),
        new Platform(0,100,imageQuestion),
        new Platform(50,230,imageQuestion),
        new Platform(100,100,imageQuestion),
        new Platform(150,230,imageQuestion),
        new Platform(200,100,imageQuestion),
        new Platform(250,230,imageQuestion)]

    const keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        }
    }

    function animate() {
        if (paginas[numPagina] === '.page31') {
            requestAnimationFrame(animate);
        } else {  
            return;
        }
        c.clearRect(0,0,canvas.width, canvas.height)
        console.log('go')
        platforms.forEach(platform => {
            platform.draw();
        })
        player.update();

        if (keys.right.pressed && player.position.x < 300-player.width) {
            player.velocity.x = 5;
        } else if (keys.left.pressed && player.position.x > 0) {
            player.velocity.x = -5;
        } else {
            player.velocity.x = 0;
        }
        
        let brickCounter = 0;
        platforms.forEach(platform => {
            if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0;
            } else if (player.position.y >= platform.position.y + platform.height && player.position.y + player.velocity.y <= platform.position.y + platform.height && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 5;
                switch (brickCounter) {
                    case 6:
                        document.querySelector('.def-lgb-1').classList.remove('inactive');
                        document.querySelector('.def-lgb-2').classList.add('inactive');
                        document.querySelector('.def-lgb-3').classList.add('inactive');
                        document.querySelector('.def-lgb-4').classList.add('inactive');
                        document.querySelector('.def-lgb-5').classList.add('inactive');
                        document.querySelector('.def-lgb-6').classList.add('inactive');
                        break;
                    case 7:
                        document.querySelector('.def-lgb-1').classList.add('inactive');
                        document.querySelector('.def-lgb-2').classList.remove('inactive');
                        document.querySelector('.def-lgb-3').classList.add('inactive');
                        document.querySelector('.def-lgb-4').classList.add('inactive');
                        document.querySelector('.def-lgb-5').classList.add('inactive');
                        document.querySelector('.def-lgb-6').classList.add('inactive');
                        break;
                    case 8:
                        document.querySelector('.def-lgb-1').classList.add('inactive');
                        document.querySelector('.def-lgb-2').classList.add('inactive');
                        document.querySelector('.def-lgb-3').classList.remove('inactive');
                        document.querySelector('.def-lgb-4').classList.add('inactive');
                        document.querySelector('.def-lgb-5').classList.add('inactive');
                        document.querySelector('.def-lgb-6').classList.add('inactive');
                        break;
                    case 9:
                        document.querySelector('.def-lgb-1').classList.add('inactive');
                        document.querySelector('.def-lgb-2').classList.add('inactive');
                        document.querySelector('.def-lgb-3').classList.add('inactive');
                        document.querySelector('.def-lgb-4').classList.remove('inactive');
                        document.querySelector('.def-lgb-5').classList.add('inactive');
                        document.querySelector('.def-lgb-6').classList.add('inactive');
                        break;
                    case 10:
                        document.querySelector('.def-lgb-1').classList.add('inactive');
                        document.querySelector('.def-lgb-2').classList.add('inactive');
                        document.querySelector('.def-lgb-3').classList.add('inactive');
                        document.querySelector('.def-lgb-4').classList.add('inactive');
                        document.querySelector('.def-lgb-5').classList.remove('inactive');
                        document.querySelector('.def-lgb-6').classList.add('inactive');
                        break;
                    case 11:
                        document.querySelector('.def-lgb-1').classList.add('inactive');
                        document.querySelector('.def-lgb-2').classList.add('inactive');
                        document.querySelector('.def-lgb-3').classList.add('inactive');
                        document.querySelector('.def-lgb-4').classList.add('inactive');
                        document.querySelector('.def-lgb-5').classList.add('inactive');
                        document.querySelector('.def-lgb-6').classList.remove('inactive');
                        break;
                    default:
                        document.querySelector('.def-lgb-1').classList.add('inactive');
                        document.querySelector('.def-lgb-2').classList.add('inactive');
                        document.querySelector('.def-lgb-3').classList.add('inactive');
                        document.querySelector('.def-lgb-4').classList.add('inactive');
                        document.querySelector('.def-lgb-5').classList.add('inactive');
                        document.querySelector('.def-lgb-6').classList.add('inactive');
                        break;
                }
            }
            brickCounter +=1;
        })
    }
    animate();

    window.addEventListener('keydown', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = true;
                break;
            case 'ArrowRight':
                keys.right.pressed = true;
                break;
            case 'ArrowUp':
                player.velocity.y -= 20;
                break;
            case 'ArrowDown':
                break;
        }
    })
    window.addEventListener('keyup', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = false;
                break;
            case 'ArrowRight':
                keys.right.pressed = false;
                break;
            case 'ArrowUp':
                break;
            case 'ArrowDown':
                break;
        }
    })
}

function allowDrop32(ev) {
    ev.preventDefault();
}

function drag32(ev) {
    ev.dataTransfer.setData("text", ev.target.classList);
}

function drop32(ev){
    var data = ev.dataTransfer.getData("text");
    if(ev.target.classList[0].includes("rojo-drop") &&  data.includes("rojo-drop") || ev.target.classList[0].includes("naranja-drop") &&  data.includes("naranja-drop") || ev.target.classList[0].includes("amarillo-drop") &&  data.includes("amarillo-drop") || ev.target.classList[0].includes("verde-drop") &&  data.includes("verde-drop") || ev.target.classList[0].includes("azul-drop") &&  data.includes("azul-drop") || ev.target.classList[0].includes("morado-drop") &&  data.includes("morado-drop")) {
        ev.target.appendChild(document.querySelector(`.${data}`))
    }
}

function page33() {
    document.querySelector('.video-varon').src = 'https://www.youtube.com/embed/jCVMXhx3SsA';
}

const formPage34 = document.querySelector('.page34-form')
const btnPage34 = document.querySelector('.btn-page-34');
const txtPage341 = document.querySelector('.page34-txt-1')
const txtPage342 = document.querySelector('.page34-txt-2')
const txtPage343 = document.querySelector('.page34-txt-3')
const txtPage344 = document.querySelector('.page34-txt-4')
const txtPage345 = document.querySelector('.page34-txt-5')
const txtPage346 = document.querySelector('.page34-txt-6')
const changeTextPage34 = document.querySelector('.changeTextPage34')

function page34() {
    btnPage34.addEventListener('click', function (event) {
        event.preventDefault();
                changeTextPage34.innerText = `Listo! Tus respuestas fueron: 
                \n¿Por qué es LGBTIQ?: ${txtPage341.value}
                \n¿De qué trata la canción?: ${txtPage342.value}
                \n¿En qué se inspira la canción?: ${txtPage343.value}
                \n¿Qué idea tenías antes sobre esta comunidad?: ${txtPage344.value}
                \n¿Qué idea tienes ahora sobre esta comunidad?: ${txtPage345.value}`;
                formPage34.remove();
    })
}

function page35() {
    document.querySelector('.video-dani').src = 'https://www.youtube.com/embed/-F7vsaexLIg';
}
function page36() {
    document.querySelector('.video-cancion1').src = 'https://www.youtube.com/embed/zxBHJZ8swS0';
    document.querySelector('.video-cancion2').src = 'https://www.youtube.com/embed/QdNQ8V-P1k8';
}

const formPage37 = document.querySelector('.page37-form')
const btnPage37 = document.querySelector('.btn-page-37');
const txtPage371 = document.querySelector('.page37-txt-1')
const changeTextPage37 = document.querySelector('.changeTextPage37')

function page37() {
    btnPage37.addEventListener('click', function (event) {
        event.preventDefault();
                changeTextPage37.innerText = `Listo! Tus respuestas fueron: \n${txtPage371.value}`;
                formPage37.remove();
    })
}

function allowDrop38(ev) {
    ev.preventDefault();
}

function drag38(ev) {
    ev.dataTransfer.setData("text", ev.target.classList);
}

function drop38(ev){
    var data = ev.dataTransfer.getData("text");
    if(ev.target.classList[0].includes("igualdad-drop") &&  data.includes("igualdad-drop") || ev.target.classList[0].includes("libertad-drop") &&  data.includes("libertad-drop") || ev.target.classList[0].includes("auto-drop") &&  data.includes("auto-drop") || ev.target.classList[0].includes("estereotipos-drop") &&  data.includes("estereotipos-drop") || ev.target.classList[0].includes("empodera-drop") &&  data.includes("empodera-drop") || ev.target.classList[0].includes("respeto-drop") &&  data.includes("respeto-drop")) {
        ev.target.appendChild(document.querySelector(`.${data}`))
    }
}

const formPage39 = document.querySelector('.page39-form')
const btnPage39 = document.querySelector('.btn-page-39');
const txtPage391 = document.querySelector('.page39-txt-1')
const changeTextPage39 = document.querySelector('.changeTextPage39')

function page39() {
    btnPage39.addEventListener('click', function (event) {
        event.preventDefault();
                changeTextPage39.innerText = `Listo! Tus respuestas fueron: \n${txtPage391.value}`;
                formPage39.remove();
    })
}


const formPage40 = document.querySelector('.page40-form')
const btnPage40 = document.querySelector('.btn-page-40');
const txtPage401 = document.querySelector('.page40-txt-1')
const changeTextPage40 = document.querySelector('.changeTextPage40')

function page40() {
    btnPage40.addEventListener('click', function (event) {
        event.preventDefault();
                changeTextPage40.innerText = `Listo! Tus respuestas fueron: \n${txtPage401.value}`;
                formPage40.remove();
    })
}

function page41() {
    document.querySelector('.video-10').src = 'https://www.youtube.com/embed/1F2izz5JEUo';
}

const formPage42 = document.querySelector('.page42-form')
const btnPage42 = document.querySelector('.btn-page-42');
const txtPage421 = document.querySelector('.page42-txt-1')
const changeTextPage42 = document.querySelector('.changeTextPage42')

function page42() {
    btnPage42.addEventListener('click', function (event) {
        event.preventDefault();
                changeTextPage42.innerText = `Listo! Tus respuestas fueron: \n${txtPage421.value}`;
                formPage42.remove();
    })
}

function page43() {
    const canvas = document.querySelector('.canvas43');
    const c = canvas.getContext('2d');

    const gravity = 1.5;
    class Player {
        constructor() {
            this.position = {
                x:100,
                y:100
            };
            this.velocity = {
                x: 0,
                y: 0
            }
            this.width = 30;
            this.height = 30;
        }
        draw() {
            c.fillStyle = 'red'
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }

        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;

            if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
            } else this.velocity.y = 0;
        }
    }

    class Platform {
        constructor(x,y,image) {
            this.position = {
                x:x,
                y:y
            }
            this.image = image;
            this.width = 50;
            this.height = 50;
        }

        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }

    const imageBrick = document.createElement('img');
    imageBrick.src = 'assets/images/brick.png';

    const imageFloor = document.createElement('img');
    imageFloor.src = 'assets/images/bloque.png';

    const imageQuestion = document.createElement('img');
    imageQuestion.src = 'assets/images/question-block.png'

    const player = new Player();
    const platforms = [new Platform(0,370,imageFloor),
        new Platform(50,370,imageFloor),
        new Platform(100,370,imageFloor),
        new Platform(150,370,imageFloor),
        new Platform(200,370,imageFloor),
        new Platform(250,370,imageFloor),
        new Platform(100,100,imageQuestion),
        new Platform(150,230,imageQuestion),
        new Platform(200,100,imageQuestion),
        new Platform(250,230,imageQuestion)]

    const keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        }
    }

    function animate() {
        if (paginas[numPagina] === '.page43') {
            requestAnimationFrame(animate);
        } else {  
            return;
        }
        c.clearRect(0,0,canvas.width, canvas.height)
        console.log('go')
        platforms.forEach(platform => {
            platform.draw();
        })
        player.update();

        if (keys.right.pressed && player.position.x < 300-player.width) {
            player.velocity.x = 5;
        } else if (keys.left.pressed && player.position.x > 0) {
            player.velocity.x = -5;
        } else {
            player.velocity.x = 0;
        }
        
        let brickCounter = 0;
        platforms.forEach(platform => {
            if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0;
            } else if (player.position.y >= platform.position.y + platform.height && player.position.y + player.velocity.y <= platform.position.y + platform.height && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 5;
                switch (brickCounter) {
                    case 6:
                        document.querySelector('.def-tip-1').classList.remove('inactive');
                        document.querySelector('.def-tip-2').classList.add('inactive');
                        document.querySelector('.def-tip-3').classList.add('inactive');
                        document.querySelector('.def-tip-4').classList.add('inactive');
                        break;
                    case 7:
                        document.querySelector('.def-tip-1').classList.add('inactive');
                        document.querySelector('.def-tip-2').classList.remove('inactive');
                        document.querySelector('.def-tip-3').classList.add('inactive');
                        document.querySelector('.def-tip-4').classList.add('inactive');
                        break;
                    case 8:
                        document.querySelector('.def-tip-1').classList.add('inactive');
                        document.querySelector('.def-tip-2').classList.add('inactive');
                        document.querySelector('.def-tip-3').classList.remove('inactive');
                        document.querySelector('.def-tip-4').classList.add('inactive');
                        break;
                    case 9:
                        document.querySelector('.def-tip-1').classList.add('inactive');
                        document.querySelector('.def-tip-2').classList.add('inactive');
                        document.querySelector('.def-tip-3').classList.add('inactive');
                        document.querySelector('.def-tip-4').classList.remove('inactive');
                        break;
                    default:
                        document.querySelector('.def-tip-1').classList.add('inactive');
                        document.querySelector('.def-tip-2').classList.add('inactive');
                        document.querySelector('.def-tip-3').classList.add('inactive');
                        document.querySelector('.def-tip-4').classList.add('inactive');
                        break;
                }
            }
            brickCounter +=1;
        })
    }
    animate();

    window.addEventListener('keydown', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = true;
                break;
            case 'ArrowRight':
                keys.right.pressed = true;
                break;
            case 'ArrowUp':
                player.velocity.y -= 20;
                break;
            case 'ArrowDown':
                break;
        }
    })
    window.addEventListener('keyup', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = false;
                break;
            case 'ArrowRight':
                keys.right.pressed = false;
                break;
            case 'ArrowUp':
                break;
            case 'ArrowDown':
                break;
        }
    })
}

function page44() {
    const canvas = document.querySelector('.canvas44');
    const c = canvas.getContext('2d');

    const gravity = 1.5;
    class Player {
        constructor() {
            this.position = {
                x:100,
                y:100
            };
            this.velocity = {
                x: 0,
                y: 0
            }
            this.width = 30;
            this.height = 30;
        }
        draw() {
            c.fillStyle = 'red'
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }

        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;

            if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
            } else this.velocity.y = 0;
        }
    }

    class Platform {
        constructor(x,y,image) {
            this.position = {
                x:x,
                y:y
            }
            this.image = image;
            this.width = 50;
            this.height = 50;
        }

        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }

    class Pipe {
        constructor(x,y,image) {
            this.position = {
                x,
                y
            }
            this.image = image;
            this.width = 60;
            this.height= 60;
        }
        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }

    const imageBrick = document.createElement('img');
    imageBrick.src = 'assets/images/brick.png';

    const imageFloor = document.createElement('img');
    imageFloor.src = 'assets/images/bloque.png';

    const imageQuestion = document.createElement('img');
    imageQuestion.src = 'assets/images/question-block.png'

    const imagePipe = document.createElement('img');
    imagePipe.src = 'assets/images/small-pipe.png'

    const player = new Player();
    const platforms = [new Platform(0,370,imageFloor),
        new Platform(50,370,imageFloor),
        new Platform(100,370,imageFloor),
        new Platform(150,370,imageFloor),
        new Platform(200,370,imageFloor),
        new Platform(250,370,imageFloor)]
    
    const pipes = [new Pipe(100,310,imagePipe),
        new Pipe(220,310,imagePipe)]

    const keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        }
    }

    function animate() {
        if (paginas[numPagina] === '.page44') {
            requestAnimationFrame(animate);
        } else {  
            return;
        }
        c.clearRect(0,0,canvas.width, canvas.height)
        console.log('go')
        platforms.forEach(platform => {
            platform.draw();
        })
        player.update();
        pipes.forEach(pipe => {
            pipe.draw();
        })

        if (keys.right.pressed && player.position.x < 300-player.width) {
            player.velocity.x = 5;
        } else if (keys.left.pressed && player.position.x > 0) {
            player.velocity.x = -5;
        } else {
            player.velocity.x = 0;
        }
        
        let brickCounter = 0;
        platforms.forEach(platform => {
            if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0;
            } else if (player.position.y >= platform.position.y + platform.height && player.position.y + player.velocity.y <= platform.position.y + platform.height && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 5;
                if(brickCounter == 6){
                    document.querySelector('.def-sexo').classList.remove('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                    console.log('sexo');
                } else if (brickCounter==8) {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.remove('inactive');
                    console.log('genero');
                } else {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                }
            }
            brickCounter +=1;
        })

        let pipeCounter = 0;
        pipes.forEach(platform => {
            if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0;
            } else if (player.position.y >= platform.position.y + platform.height && player.position.y + player.velocity.y <= platform.position.y + platform.height && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 5;
                if(brickCounter == 6){
                    document.querySelector('.def-sexo').classList.remove('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                    console.log('sexo');
                } else if (brickCounter==8) {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.remove('inactive');
                    console.log('genero');
                } else {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                }
            }
            if (player.position.x + player.width <= platform.position.x && player.position.x + player.width + player.velocity.x >= platform.position.x && player.position.y + player.height >= platform.position.y && player.position.y <= platform.position.y + platform.height){
                player.velocity.x = 0;
            } else if (player.position.x >= platform.position.x + platform.width && player.position.x + player.velocity.x <= platform.position.x + platform.width && player.position.y + player.height >= platform.position.y && player.position.y <= platform.position.y + platform.height){
                player.velocity.x = 0;
            }
            pipeCounter +=1;
        })
    }
    animate();

    window.addEventListener('keydown', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = true;
                break;
            case 'ArrowRight':
                keys.right.pressed = true;
                break;
            case 'ArrowUp':
                player.velocity.y -= 20;
                break;
            case 'ArrowDown':
                if(paginas[numPagina] === '.page44'){
                    let pipeCounter1 = 0;
                    pipes.forEach(pipe =>{
                        if(player.position.x >= pipe.position.x && player.position.y<= pipe.position.y && player.position.x + player.width <= pipe.position.x + pipe.width){
                            if(pipeCounter1 === 0){
                                document.querySelector('.text-ups').classList.remove('inactive');
                            } else {
                                const videoPage = document.querySelector('.page45')
                                videoPage.classList.remove('inactive')
                                const pipePage = document.querySelector('.page44')
                                pipePage.classList.add('inactive')
                            }
                        }
                        pipeCounter1+=1;
                    })
                }
                break;
        }
    })
    window.addEventListener('keyup', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = false;
                break;
            case 'ArrowRight':
                keys.right.pressed = false;
                break;
            case 'ArrowUp':
                break;
            case 'ArrowDown':
                break;
        }
    })
}

function allowDrop45(ev) {
    ev.preventDefault();
}

function drag45(ev) {
    ev.dataTransfer.setData("text", ev.target.classList);
}

function drop45(ev){
    var data = ev.dataTransfer.getData("text");
    if(ev.target.classList[0].includes("primero-drop") &&  data.includes("primero-drop") || ev.target.classList[0].includes("segundo-drop") &&  data.includes("segundo-drop") || ev.target.classList[0].includes("tercero-drop") &&  data.includes("tercero-drop") || ev.target.classList[0].includes("cuarto-drop") &&  data.includes("cuarto-drop") || ev.target.classList[0].includes("quinto-drop") &&  data.includes("quinto-drop")) {
        ev.target.appendChild(document.querySelector(`.${data}`))
    }
}

function page46() {
    const canvas = document.querySelector('.canvas46');
    const c = canvas.getContext('2d');

    const gravity = 1.5;
    class Player {
        constructor() {
            this.position = {
                x:100,
                y:100
            };
            this.velocity = {
                x: 0,
                y: 0
            }
            this.width = 30;
            this.height = 30;
        }
        draw() {
            c.fillStyle = 'red'
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }

        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;

            if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
            } else this.velocity.y = 0;
        }
    }

    class Platform {
        constructor(x,y,image) {
            this.position = {
                x:x,
                y:y
            }
            this.image = image;
            this.width = 50;
            this.height = 50;
        }

        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }

    const imageBrick = document.createElement('img');
    imageBrick.src = 'assets/images/brick.png';

    const imageFloor = document.createElement('img');
    imageFloor.src = 'assets/images/bloque.png';

    const imageQuestion = document.createElement('img');
    imageQuestion.src = 'assets/images/question-block.png'

    const player = new Player();
    const platforms = [new Platform(0,370,imageFloor),
        new Platform(50,370,imageFloor),
        new Platform(100,370,imageFloor),
        new Platform(150,370,imageFloor),
        new Platform(200,370,imageFloor),
        new Platform(250,370,imageFloor),
        new Platform(0,100,imageQuestion),
        new Platform(50,230,imageQuestion),
        new Platform(100,100,imageQuestion),
        new Platform(150,230,imageQuestion),
        new Platform(200,100,imageQuestion),
        new Platform(250,230,imageQuestion)]

    const keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        }
    }

    function animate() {
        if (paginas[numPagina] === '.page46') {
            requestAnimationFrame(animate);
        } else {  
            return;
        }
        c.clearRect(0,0,canvas.width, canvas.height)
        console.log('go')
        platforms.forEach(platform => {
            platform.draw();
        })
        player.update();

        if (keys.right.pressed && player.position.x < 300-player.width) {
            player.velocity.x = 5;
        } else if (keys.left.pressed && player.position.x > 0) {
            player.velocity.x = -5;
        } else {
            player.velocity.x = 0;
        }
        
        let brickCounter = 0;
        platforms.forEach(platform => {
            if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0;
            } else if (player.position.y >= platform.position.y + platform.height && player.position.y + player.velocity.y <= platform.position.y + platform.height && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 5;
                switch (brickCounter) {
                    case 6:
                        document.querySelector('.def-ayuda-1').classList.remove('inactive');
                        document.querySelector('.def-ayuda-2').classList.add('inactive');
                        document.querySelector('.def-ayuda-3').classList.add('inactive');
                        document.querySelector('.def-ayuda-4').classList.add('inactive');
                        document.querySelector('.def-ayuda-5').classList.add('inactive');
                        document.querySelector('.def-ayuda-6').classList.add('inactive');
                        break;
                    case 7:
                        document.querySelector('.def-ayuda-1').classList.add('inactive');
                        document.querySelector('.def-ayuda-2').classList.remove('inactive');
                        document.querySelector('.def-ayuda-3').classList.add('inactive');
                        document.querySelector('.def-ayuda-4').classList.add('inactive');
                        document.querySelector('.def-ayuda-5').classList.add('inactive');
                        document.querySelector('.def-ayuda-6').classList.add('inactive');
                        break;
                    case 8:
                        document.querySelector('.def-ayuda-1').classList.add('inactive');
                        document.querySelector('.def-ayuda-2').classList.add('inactive');
                        document.querySelector('.def-ayuda-3').classList.remove('inactive');
                        document.querySelector('.def-ayuda-4').classList.add('inactive');
                        document.querySelector('.def-ayuda-5').classList.add('inactive');
                        document.querySelector('.def-ayuda-6').classList.add('inactive');
                        break;
                    case 9:
                        document.querySelector('.def-ayuda-1').classList.add('inactive');
                        document.querySelector('.def-ayuda-2').classList.add('inactive');
                        document.querySelector('.def-ayuda-3').classList.add('inactive');
                        document.querySelector('.def-ayuda-4').classList.remove('inactive');
                        document.querySelector('.def-ayuda-5').classList.add('inactive');
                        document.querySelector('.def-ayuda-6').classList.add('inactive');
                        break;
                    case 10:
                        document.querySelector('.def-ayuda-1').classList.add('inactive');
                        document.querySelector('.def-ayuda-2').classList.add('inactive');
                        document.querySelector('.def-ayuda-3').classList.add('inactive');
                        document.querySelector('.def-ayuda-4').classList.add('inactive');
                        document.querySelector('.def-ayuda-5').classList.remove('inactive');
                        document.querySelector('.def-ayuda-6').classList.add('inactive');
                        break;
                    case 11:
                        document.querySelector('.def-ayuda-1').classList.add('inactive');
                        document.querySelector('.def-ayuda-2').classList.add('inactive');
                        document.querySelector('.def-ayuda-3').classList.add('inactive');
                        document.querySelector('.def-ayuda-4').classList.add('inactive');
                        document.querySelector('.def-ayuda-5').classList.add('inactive');
                        document.querySelector('.def-ayuda-6').classList.remove('inactive');
                        break;
                    default:
                        document.querySelector('.def-ayuda-1').classList.add('inactive');
                        document.querySelector('.def-ayuda-2').classList.add('inactive');
                        document.querySelector('.def-ayuda-3').classList.add('inactive');
                        document.querySelector('.def-ayuda-4').classList.add('inactive');
                        document.querySelector('.def-ayuda-5').classList.add('inactive');
                        document.querySelector('.def-ayuda-6').classList.add('inactive');
                        break;
                }
            }
            brickCounter +=1;
        })
    }
    animate();

    window.addEventListener('keydown', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = true;
                break;
            case 'ArrowRight':
                keys.right.pressed = true;
                break;
            case 'ArrowUp':
                player.velocity.y -= 20;
                break;
            case 'ArrowDown':
                break;
        }
    })

    window.addEventListener('keyup', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = false;
                break;
            case 'ArrowRight':
                keys.right.pressed = false;
                break;
            case 'ArrowUp':
                break;
            case 'ArrowDown':
                break;
        }
    })
}

function page47() {
    const canvas = document.querySelector('.canvas47');
    const c = canvas.getContext('2d');

    const gravity = 1.5;
    class Player {
        constructor() {
            this.position = {
                x:100,
                y:100
            };
            this.velocity = {
                x: 0,
                y: 0
            }
            this.width = 30;
            this.height = 30;
        }
        draw() {
            c.fillStyle = 'red'
            c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }

        update() {
            this.draw();
            this.position.y += this.velocity.y;
            this.position.x += this.velocity.x;

            if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
            } else this.velocity.y = 0;
        }
    }

    class Platform {
        constructor(x,y,image) {
            this.position = {
                x:x,
                y:y
            }
            this.image = image;
            this.width = 50;
            this.height = 50;
        }

        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }

    class Pipe {
        constructor(x,y,image) {
            this.position = {
                x,
                y
            }
            this.image = image;
            this.width = 60;
            this.height= 60;
        }
        draw() {
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }

    const imageBrick = document.createElement('img');
    imageBrick.src = 'assets/images/brick.png';

    const imageFloor = document.createElement('img');
    imageFloor.src = 'assets/images/bloque.png';

    const imageQuestion = document.createElement('img');
    imageQuestion.src = 'assets/images/question-block.png'

    const imagePipe = document.createElement('img');
    imagePipe.src = 'assets/images/small-pipe.png'

    const player = new Player();
    const platforms = [new Platform(0,370,imageFloor),
        new Platform(50,370,imageFloor),
        new Platform(100,370,imageFloor),
        new Platform(150,370,imageFloor),
        new Platform(200,370,imageFloor),
        new Platform(250,370,imageFloor)]
    
    const pipes = [new Pipe(100,310,imagePipe),
        new Pipe(220,310,imagePipe)]

    const keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        }
    }

    function animate() {
        if (paginas[numPagina] === '.page47') {
            requestAnimationFrame(animate);
        } else {  
            return;
        }
        c.clearRect(0,0,canvas.width, canvas.height)
        console.log('go')
        platforms.forEach(platform => {
            platform.draw();
        })
        player.update();
        pipes.forEach(pipe => {
            pipe.draw();
        })

        if (keys.right.pressed && player.position.x < 300-player.width) {
            player.velocity.x = 5;
        } else if (keys.left.pressed && player.position.x > 0) {
            player.velocity.x = -5;
        } else {
            player.velocity.x = 0;
        }
        
        let brickCounter = 0;
        platforms.forEach(platform => {
            if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0;
            } else if (player.position.y >= platform.position.y + platform.height && player.position.y + player.velocity.y <= platform.position.y + platform.height && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 5;
                if(brickCounter == 6){
                    document.querySelector('.def-sexo').classList.remove('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                    console.log('sexo');
                } else if (brickCounter==8) {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.remove('inactive');
                    console.log('genero');
                } else {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                }
            }
            brickCounter +=1;
        })

        let pipeCounter = 0;
        pipes.forEach(platform => {
            if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0;
            } else if (player.position.y >= platform.position.y + platform.height && player.position.y + player.velocity.y <= platform.position.y + platform.height && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 5;
                if(brickCounter == 6){
                    document.querySelector('.def-sexo').classList.remove('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                    console.log('sexo');
                } else if (brickCounter==8) {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.remove('inactive');
                    console.log('genero');
                } else {
                    document.querySelector('.def-sexo').classList.add('inactive');
                    document.querySelector('.def-genero').classList.add('inactive');
                }
            }
            if (player.position.x + player.width <= platform.position.x && player.position.x + player.width + player.velocity.x >= platform.position.x && player.position.y + player.height >= platform.position.y && player.position.y <= platform.position.y + platform.height){
                player.velocity.x = 0;
            } else if (player.position.x >= platform.position.x + platform.width && player.position.x + player.velocity.x <= platform.position.x + platform.width && player.position.y + player.height >= platform.position.y && player.position.y <= platform.position.y + platform.height){
                player.velocity.x = 0;
            }
            pipeCounter +=1;
        })
    }
    animate();

    window.addEventListener('keydown', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = true;
                break;
            case 'ArrowRight':
                keys.right.pressed = true;
                break;
            case 'ArrowUp':
                player.velocity.y -= 20;
                break;
            case 'ArrowDown':
                if(paginas[numPagina] === '.page47'){
                    let pipeCounter1 = 0;
                    pipes.forEach(pipe =>{
                        if(player.position.x >= pipe.position.x && player.position.y<= pipe.position.y && player.position.x + player.width <= pipe.position.x + pipe.width){
                            const videoPage = document.querySelector('.page48')
                            videoPage.classList.remove('inactive')
                            const pipePage = document.querySelector('.page47')
                            pipePage.classList.add('inactive')
                            if(pipeCounter1 === 0){
                                document.querySelector('.song-choose-page47').src = 'https://www.youtube.com/embed/Vg3qKslEFjY';
                            } else {
                                document.querySelector('.song-choose-page47').src = 'https://www.youtube.com/embed/yU1gQw-RBj0';
                            }
                        }
                        pipeCounter1+=1;
                    })
                }
                break;
        }
    })
    window.addEventListener('keyup', (event)=>{
        switch (event.key) {
            case 'ArrowLeft':
                keys.left.pressed = false;
                break;
            case 'ArrowRight':
                keys.right.pressed = false;
                break;
            case 'ArrowUp':
                break;
            case 'ArrowDown':
                break;
        }
    })
}

const formPage49 = document.querySelector('.page49-form')
const btnPage49 = document.querySelector('.btn-page-49');
const txtPage491 = document.querySelector('.page49-txt-1')
const changeTextPage49 = document.querySelector('.changeTextPage49')

function page49() {
    btnPage49.addEventListener('click', function (event) {
        event.preventDefault();
                changeTextPage49.innerText = `Listo! Tus respuestas fueron: \n${txtPage491.value}`;
                formPage49.remove();
    })
}