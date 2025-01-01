import "./styles/style.css";
import { Player } from "@game/player";
import { PhysicsEngine } from "@game/physicsEngine";
import { GameCanvas } from "@game/gameCanvas";
import vaisseauTab1 from "@assets/img/vaisseau1.png";
import { Background } from "@game/background";
import  imgBackground  from "@assets/img/univers.png";
// import { timeStamp } from "console";

/*================== Variables stystem=================*/
const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
if (!ctx) {
  throw new Error("Votre navigateur ne supporte pas Canvas 2D.");
}
let lastTime = 0;
const directions = { x: 0, y: 0 }; // Indique si on avance ou pas

/*================== creation du jeu =================*/
const gameCanvas = new GameCanvas(800,600);
const player = new Player(100, 50, 50, 50, vaisseauTab1);
const background = new Background(imgBackground, 50);
console.log(background);
const physicsEngine = new PhysicsEngine(1, 0.1);

// Ajouter le joueur au moteur physique
physicsEngine.addEntity(player);

/*================== le keybord =================*/



window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") directions.x = -1;
  if (e.key === "ArrowRight") directions.x = 1;
  if (e.key === "ArrowUp") directions.y = -1;
  if (e.key === "ArrowDown") directions.y = 1;
});

window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") directions.x = 0;
  if (e.key === "ArrowUp" || e.key === "ArrowDown") directions.y = 0;
});


/*================== function LOOP =================*/

function gameLoop(timestamp: number) {
  const deltaTime = (timestamp - lastTime) / 1000;
  lastTime = timestamp;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
   // Mettre à jour et dessiner le background
   background.update(deltaTime, canvas.width);
   background.draw(ctx, canvas.height);

  // Appliquer les directions pour ajuster la vélocité
  player.applyForce(directions.x, directions.y);

  // Mettre à jour et dessiner le joueur
  player.update(deltaTime,gameCanvas);
  player.draw(ctx);

  requestAnimationFrame(gameLoop);
}

/*================== execution de la fonction =================*/
requestAnimationFrame(gameLoop);
