#pragma strict

var charController : CharacterController;
var startMarker: Transform;
var moveSpeed : float = 1.0;
var rotateSpeed : float = 6.0;
var jumpSpeed : float = 2.0;
var gravity : float = 5.0;
var jump : boolean = false;
var waypointArray: Transform[];

private var moveDirection : Vector3 = Vector3.zero;
private var journeyLength: float;
private var rotationLength: float;
private var startTime: float;
private var rotationAngle: float;
private var isMove: boolean = false;
private var isRotate: boolean = true;
private var endMarker : Transform;
private var targetPoint: Vector3;
private var targetRotation: Quaternion;
private var nextWaypoint : int = 0;
private var moveCompletely : boolean = false;


function Start ()
{
     startTime = Time.time;
     startMarker = transform;
     assignWP();
}

var reached : boolean = false;
function Update ()
{
	if(reached == false)
	{
		Rotate();
		Move();
		if ( moveCompletely)
		{
	        	isMove = false;
	        	isRotate = true;
	        	nextWaypoint++; 
	        	moveCompletely= false;
	        	startTime = Time.time;
	        	if(nextWaypoint< waypointArray.Length)
	        	{
		 		   assignWP();
		 		}else {
		 		  reached = true;
		 		}
	     }
	 }
	 
}

function assignWP()
{
		endMarker = waypointArray[nextWaypoint];
}

function Move()
{
   if(isMove)
	{
	    var distCovered = (Time.time - startTime) * moveSpeed;
	   
	    journeyLength = Vector3.Distance(startMarker.position, endMarker.position);
	    
	    var fracJourney = distCovered / journeyLength;
	    
	    endMarker.position.y = transform.position.y;
	    
	    if (charController.isGrounded) 
	    {
	        moveDirection = Vector3.Lerp(startMarker.position, endMarker.position, fracJourney) - transform.position;

	        if (jump)
	        {
	            moveDirection.y = jumpSpeed;
	        }
	    }

        moveDirection.y -= gravity * Time.deltaTime;

        charController.Move(moveDirection);
        startTime = Time.time;
	    if ( distCovered >= journeyLength) {
        	isMove = false;
        	isRotate = true;
        	moveCompletely = true;
        	startMarker.position = transform.position;
        }
    }
}
function Rotate()
{
    if(isRotate)
	{
        var angleCovered = (Time.time - startTime) * rotateSpeed ;
	    
	    rotationLength = Vector3.Angle(startMarker.position, endMarker.position);
	    
	    var fracAngle = angleCovered / rotationLength;
        
        targetPoint = new Vector3(endMarker.position.x, transform.position.y, endMarker.position.z) - transform.position;
        targetRotation = Quaternion.LookRotation (targetPoint, Vector3.up);
        transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, fracAngle);
        //Debug.Log(rotationAngle);
        //Debug.Log(rotationLength);
        rotationAngle += fracAngle * angleCovered;
        if (rotationAngle >= rotationLength) {
        	isRotate = false;
        	isMove = true;
        	startTime = Time.time;
        	rotationAngle = 0;
        }
	}
}

