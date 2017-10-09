/*#pragma strict

function Start () {

}

function Update () {

}
 
     var   Target :Transform;
     var  RotationSpeed: float;
 
    
     private var _lookRotation : Quaternion;
     private var   _direction :Vector3;
    
     void Update()
     {
       
         _direction = (Target.position - transform.position).normalized;
 
        
         _lookRotation = Quaternion.LookRotation(_direction);
 
        
         transform.rotation = Quaternion.Slerp(transform.rotation, _lookRotation, Time.deltaTime * RotationSpeed);
     }
 }*/