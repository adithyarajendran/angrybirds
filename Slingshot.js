class Slingshot{

constructor(bodyA, pointB){

    var options = {

        bodyA : bodyA,
        pointB : pointB,
        
        stiffness :  2,
           length :  90,
    
        }
    this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);

}

display(){

if (this.sling.bodyA){



var pointA = this.sling.bodyA.position;
var pointB = this.pointB;

strokeWeight(3);
line(pointA.x, pointA.y, pointB.x, pointB.y);   


}}
fly(){

this.sling.bodyA = null;

}
}




















































