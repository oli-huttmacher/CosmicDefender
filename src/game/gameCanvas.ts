export class GameCanvas {
   width: number;
   height: number;
 
   constructor(width: number, height: number) {
     this.width = width;
     this.height = height;
   }
 
   constrainEntity(entity: { x: number; y: number; width: number; height: number; velocityX: number; velocityY: number }) {
     if (entity.x < 0) {
       entity.x = 0;
       entity.velocityX = 0;
     }
     if (entity.x + entity.width > this.width) {
       entity.x = this.width - entity.width;
       entity.velocityX = 0;
     }
     if (entity.y < 0) {
       entity.y = 0;
       entity.velocityY = 0;
     }
     if (entity.y + entity.height > this.height) {
       entity.y = this.height - entity.height;
       entity.velocityY = 0;
     }
   }
 }
 