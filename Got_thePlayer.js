#pragma strict
var got_The_Player : boolean = false;
var rayDistance : float = 1000.0;
var totalRotation  : float = 0f;
var fullscanMode : int = 0;
var exploreMode : int = 1;
var mode : int = fullscanMode;
var rotatePerTurn : float = 0.1f;
var startTime : float = 0.0f;

var rayMagnitude : int = 5;
var searchTimeX : float = 10.0;
var searchTimeY : float = 1.0;
var upMultiplyingFactor : int = 0.5;

private var startTimeX: float;
private var startTimeY: float;
private var newLocation : Vector3;
private var startXLocation : Vector3;
private var endXLocation : Vector3;
private var startYLocation : Vector3;
private var endYLocation : Vector3;
private var numConsectiveSpeedRotation : int;

var rayCastObj : GameObject;


function Start () 
{
	startTime = Time.time;
	rotatePerTurn = 1.0f;
    numConsectiveSpeedRotation = 6;
    startTimeX = Time.time;
    startTimeY = Time.time;
    startXLocation = Vector3.right;
    endXLocation = -Vector3.right;
    startYLocation = Vector3.up;
    endYLocation = -Vector3.up * upMultiplyingFactor;
}

function setRaycast()
{
	var hit : RaycastHit;
	var vector3 = transform.TransformDirection(Vector3.forward);
	var scan_Ray : Ray = new Ray(rayCastObj.transform.position, vector3*100);
	Debug.DrawRay(rayCastObj.transform.position, vector3 * upMultiplyingFactor,Color.red);
	got_The_Player = false;
	if (Physics.Raycast(scan_Ray, hit, rayDistance))
	{
		if (hit.collider.gameObject.name == "Player") 
              {
              		 //Debug.Log("YEEEEEEEEEEEEEEEEEEEEEEEEEEE");
                     got_The_Player = true;
              }
	}
     
}


var insideExplore : boolean = false;
function doExplore() {
   if (insideExplore == false) {
     startTime = Time.time;
   }
   insideExplore = true;
   // do nothing.
   if(Time.time - startTime >=3)
   {
   		mode = fullscanMode;
   		insideExplore = false;
   }
}

// rotate in z direction by 5 degree and raycast. once the initial angle is equal to the final angle the enemy should stop rotationg and 
// start exploring. if hit o strue stop and keep shooting.
function doFullscan()
{
	var numRotation = 15;
	numConsectiveSpeedRotation--;
	while (numRotation-- > 0) {
		if (numConsectiveSpeedRotation == -10) {
			numConsectiveSpeedRotation = 6;
			break;
		}
		if (numConsectiveSpeedRotation <= 0) {
			break;
		}
		transform.Rotate(0, rotatePerTurn, 0, Space.Self);
	    totalRotation = totalRotation + rotatePerTurn;
	    //Debug.Log(transform.rotation.eulerAngles + "|" +  totalRotation + "|" + rotatePerTurn + "FU");
		setRaycast();
		if(got_The_Player || totalRotation >= 360)
		{
			mode = exploreMode;
			totalRotation = 0.0;
			break;
			//Debug.Log("CHANGED");
		}
	}
}

function Update () 
{
//if(gameObject.name == "enemy4InsideBuil")
{
	//endYLocation = -Vector3.up ;
}
    rotatingRayCast();
	if(mode == fullscanMode)
	{
		doFullscan();
        
	}
	else if(mode == exploreMode)
	{
		doExplore();
	}
    
    //Debug.Log(mode);
}
function rotatingRayCast()
{
    var fracCompleteX = (Time.time - startTimeX) / searchTimeX;
    var fracCompleteY = (Time.time - startTimeY) / searchTimeY;
    
    newLocation.x = Mathf.Lerp(startXLocation.x, endXLocation.x, fracCompleteX);
    newLocation.y = Mathf.Lerp(startYLocation.y, endYLocation.y, fracCompleteY);
    
    Debug.DrawLine( transform.position , (newLocation - transform.position) * rayMagnitude, Color.green);
    
    if( newLocation.x == endXLocation.x )
        {
            endXLocation *= -1;
            startXLocation *= -1;
            startTimeX = Time.time;
        }
    if( newLocation.y == endYLocation.y )
        {
            endYLocation *= -1;
            startYLocation *= -1;
            startTimeY = Time.time;
        }
}

