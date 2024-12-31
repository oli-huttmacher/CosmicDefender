export class PhysicsEngine {
   gravity: number; // Force gravitationnelle
   friction: number; // Coefficient de friction
   entities: Array<{ x: number; y: number; velocityX: number; velocityY: number; width: number; height: number }>;
 
   constructor(gravity = 0.1, friction = 0.1) {
     this.gravity = gravity;
     this.friction = friction;
     this.entities = [];
   }
 
   // Ajouter une entité au moteur physique
   addEntity(entity: { x: number; y: number; velocityX: number; velocityY: number; width: number; height: number }) {
     this.entities.push(entity);
   }
 
   // Mettre à jour la physique pour toutes les entités
   update(deltaTime: number) {
     for (const entity of this.entities) {
       // Appliquer la gravité
       entity.velocityY += this.gravity;
 
       // Appliquer la friction
       entity.velocityX *= this.friction;
 
       // Mettre à jour les positions
       entity.x += entity.velocityX * deltaTime;
       entity.y += entity.velocityY * deltaTime;
 
       // Empêcher de tomber sous le sol (600 étant la hauteur du canvas)
       if (entity.y + entity.height > 600) {
         entity.y = 600 - entity.height;
         entity.velocityY = 0; // Arrêter le mouvement vertical
       }
 
       // Empêcher de sortir des bords horizontaux
       if (entity.x < 0) {
         entity.x = 0;
         entity.velocityX = 0;
       }
       if (entity.x + entity.width > 800) { // Supposons que 800 est la largeur du canvas
         entity.x = 800 - entity.width;
         entity.velocityX = 0;
       }
     }
   }
 }
 