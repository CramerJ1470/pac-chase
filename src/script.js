const buttons = document.querySelectorAll(".ripple");
  const body = document.querySelector("body");
  const outsideRip = document.querySelector(".outsideRipple");
  const randomGuyColors = ["red", "blue", "purple", "green"];
  const otherGuys = ["camo", "pirate", "cyborg", "policeman"];
  const scoreTitle = document.getElementById("scoreTitle");
  const directions = document.getElementById("directions");
  let score = Number(document.getElementById("score").innerText);
  const players = [""];
  const badGuys = [];
  
  function newGame() {
    function new3Monsters() {
      for (let x = 0; x < 3; x++) {
        addMonster();
      }
    }
    score =0;
    new3Monsters();
  
    function addMonster() {
      const badGuy = document.createElement("button");
      badGuy.style.onclick = "addPoints()";
      badGuy.classList.add("badGuy");
  
      let guyColor = randomGuyColors[Math.floor(Math.random() * 4)];
      badGuy.style.backgroundImage = `url("../src/${guyColor}.png")`;
      let right = Math.floor(Math.random() * 200) + 700;
  
      badGuy.style.right = `${right}px`;
      let bottom = Math.floor(Math.random() * 200) + 600;
  
      badGuy.style.bottom = `${bottom}px`;
      badGuy.style.backgroundSize = "cover";
      badGuy.style.backgroundRepeat = "no-repeat";
      badGuy.style.position = "absolute";
      badGuy.style.width = "auto";
      badGuy.style.height = "60px";
      badGuy.style.border = "none";
      badGuy.style.zIndex = 0;
      badGuy.style.transition = "all ease 1.5s";
  
      badGuy.style.backgroundColor = "transparent";
  
      body.appendChild(badGuy);
      badGuys.push(badGuy);
    }
  
    function moveBadGuys() {
      badGuys.forEach((baddie) => {
        let vert = Math.random() > 0.5 ? 1 : -1;
        let horiz = Math.random() > 0.5 ? 1 : -1;
  
        let moreThanOneDir = +Math.random().toFixed(2);
  
        let distance = Math.floor(Math.random() * 100);
        if (moreThanOneDir < 0.5) {
          let dist = distance * Number(vert);
  
          changeVertF(dist, baddie);
        } else {
          let dist = distance * Number(horiz);
  
          changeHorizF(dist, baddie);
        }
        baddie.addEventListener("click", addPoints);
      });
    }
  
    function changeVertF(distance, baddie) {
      let changeVert = baddie.style.bottom;
  
      changeVert = changeVert.slice(0, changeVert.length - 2);
      changeVert = Number(changeVert) + distance;
      if (changeVert < 100) {
        changeVert = 100;
        baddie.style.bottom = changeVert.toString() + "px";
      } else if (changeVert > 900) {
        changeVert = 900;
        baddie.style.bottom = changeVert.toString() + "px";
      } else {
        baddie.style.bottom = changeVert.toString() + "px";
      }
  
      /*if (baddie.page === 400) {
              baddie.pageY = 399;
            } else if (baddie.pageY === -400) {
              baddie.pageY = -399;
            }
            */
    }
    function changeHorizF(distance, baddie) {
      let changeHoriz = baddie.style.right;
      changeHoriz = changeHoriz.slice(0, changeHoriz.length - 2);
      changeHoriz = Number(changeHoriz) + distance;
      if (changeHoriz < 200) {
        changeHoriz = 200;
        baddie.style.right = changeHoriz.toString() + "px";
      } else if (changeHoriz > 1200) {
        changeHoriz = 1200;
        baddie.style.right = changeHoriz.toString() + "px";
      } else {
        baddie.style.right = changeHoriz.toString() + "px";
      }
    }
  
    buttons.forEach((button) => {
      button.addEventListener("mousemove", function (e) {
        const x = e.pageX;
        const y = e.pageY;
  
        const cursorRight = e.target.offsetRight;
        const cursorLeft = e.target.offsetLeft;
        const cursorTop = e.target.offsetTop;
        const cursorBottom = e.target.offsetBottom;
  
        const xInside = x - cursorLeft;
        const yInside = y - cursorTop;
  
        const circle1 = document.createElement("span");
        const circle2 = document.createElement("span");
        const circle3 = document.createElement("span");
        const circle4 = document.createElement("span");
  
        circle1.classList.add("circle", "red");
        circle2.classList.add("circle", "yellow");
        circle3.classList.add("circle", "green");
        circle4.classList.add("circle");
  
        circle1.style.top = yInside + 2 + "px";
        circle1.style.left = xInside + 2 + "px";
        circle2.style.top = yInside + 5 + "px";
        circle2.style.left = xInside + 5 + "px";
        circle3.style.top = yInside + 8 + "px";
        circle3.style.left = xInside + 8 + "px";
        circle4.style.top = yInside + 11 + "px";
        circle4.style.left = xInside + 11 + "px";
  
        this.appendChild(circle1);
        this.appendChild(circle2);
        this.appendChild(circle3);
        this.appendChild(circle4);
  
        setTimeout(() => {
          circle4.remove();
          circle3.remove();
          circle2.remove();
          circle1.remove();
        }, 500);
      });
    });
    let x = false;
    buttons.forEach((button) => {
      button.addEventListener("click", function (e) {
        directions.innerText = "";
  
        setTheme();
        if (x === true) {
          body.classList.remove("back", "circle");
  
          button.classList.remove("butn");
  
          x = false;
        } else if (x === false) {
          body.classList.add("back", "circle");
  
          button.classList.add("butn");
          button.remove();
  
          body.addEventListener("mousemove", function (e) {
            moveBadGuys();
            const x = e.pageX;
            const y = e.pageY;
  
            const cursorRight = e.target.offsetRight;
            const cursorLeft = e.target.offsetLeft;
            const cursorTop = e.target.offsetTop;
            const cursorBottom = e.target.offsetBottom;
  
            const xInside = x - cursorLeft;
            const yInside = y - cursorTop;
  
            const circle1 = document.createElement("span");
            const circle2 = document.createElement("span");
            const circle3 = document.createElement("span");
            const circle4 = document.createElement("span");
  
            circle1.classList.add("circle", "red");
            circle2.classList.add("circle", "yellow");
            circle3.classList.add("circle", "green");
            circle4.classList.add("circle");
  
            circle1.style.top = yInside + 2 + "px";
            circle1.style.left = xInside + 2 + "px";
            circle2.style.top = yInside + 5 + "px";
            circle2.style.left = xInside + 5 + "px";
            circle3.style.top = yInside + 8 + "px";
            circle3.style.left = xInside + 8 + "px";
            circle4.style.top = yInside + 11 + "px";
            circle4.style.left = xInside + 11 + "px";
  
            this.appendChild(circle1);
            this.appendChild(circle2);
            this.appendChild(circle3);
            this.appendChild(circle4);
  
            setTimeout(() => {
              circle4.remove();
              circle3.remove();
              circle2.remove();
              circle1.remove();
            }, 150);
          });
          x = true;
        }
      });
    });
  
    function addPoints() {
      addMonster();
      let score = Number(document.getElementById("score").innerText);
      if (score > 45) {
        settime();
        body.classList.remove("back");
        body.classList.add("lightning");
  
        setTimeout(() => {
          body.classList.remove("lightning");
        }, 250);
  
        let killTheMonsters = document.querySelectorAll(".badGuy");
  
        killTheMonsters.forEach((baddie) => {
          baddie.remove();
        });
        body.classList.remove("back");
        stopTheme();
        const MonsterDiv = document.getElementById("MonsterDiv");
        const newGameBtn = document.createElement("button");
        newGameBtn.classList.add("button");
        newGameBtn.innerText = "WellDone! \n Play Again? \n doubleClick to start";
        newGameBtn.addEventListener("click", function () {
          newGameBtn.remove();
          body.classList.add("back");
          newGame();
        });
        directions.innerText =
          "Click on the monsters to get points upto 100";
        MonsterDiv.appendChild(newGameBtn);
        document.getElementById("score").innerText = score;
      } else {
        score += 5;
        document.getElementById("score").innerText = score;
      }
    }
    function settime() {
      var audio = document.getElementById("myaudio");
      audio.currentTime = 16;
      audio.play();
  
      // this is to check the currentTime in the console log
    }
  
  function setTheme() {
    var audio1 = document.getElementById("audioTheme");
    audio1.currentTime = 0;
    audio1.play();
  }
  
  function stopTheme() {
    var audio1 = document.getElementById("audioTheme");
    audio1.pause();
  }
}
  newGame();