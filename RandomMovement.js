#pragma strict
var randomXDist: float ;
var randomZDist : float;
var randomTimeGenerator : int ;
var leftMostEnd_X : float = -20.0f;
var zMax : float = 23.0f;
var zMin : float = -23.0f;
var counter : int =0;
var buildingZMax : float;
var buildingZMin : float;
var buildingXMax : float;
var buildingXMin : float;

var assignMovement : boolean = false;
var moved : boolean = false;
private var startTime: float;
var moveSpeed : float = 1.0;
private var journeyLength: float;
var endMarker: Vector3;
var reached : int;
var moving : int;
var waiting : int;
var state : int;
var alarm : float ;


function Start () 
{
	reached = 0;
	moving = 1;
	waiting = 2;
    state = reached;
	buildingZMin = -3;
    buildingZMax = 2.5;
    if(this.gameObject.name == "enemy2")
    {
        leftMostEnd_X = -20.0f;
        buildingXMax = 7;
        buildingXMin = -6;
    }
    else if(this.gameObject.name == "enemy3")
    {
        leftMostEnd_X = 23.0f;
        buildingXMin = -6;
        buildingXMax = 10;
    }
}

function Update() 
{
    //Debug.Log(this.gameObject.name);
    
	switch (state) 
    {
		case 0: // reached
			alarm = Time.time + Random.Range(2, 5);
			state = waiting;
			break;
		case 1: // moving
			var response = moveEnemyRandomly();
			//Debug.Log(transform.position + "," + endMarker);
			//Debug.Log((transform.position - endMarker).magnitude);
			if ((response == 0) || (transform.position - endMarker).magnitude < 0.1) 
            {
				state = reached;
			}
			break;
		case 2: // waiting
			if(Time.time >= alarm)
			{
				generateMarkers();
				state = moving;
			}
			break;
		default:
			Debug.Log("default");

	}
}

function moveEnemyRandomly()
{
	
	//
	{
		var moveBy : Vector3 = ((endMarker - transform.position).normalized * moveSpeed * Time.deltaTime); 
		//transform.position = Vector3.Lerp(transform.position, endMarker, 0.5);
        if (moveBy.y < 0.0) {
          //Debug.Log("Y comp" + moveBy + "current=" + transform.position + ", next" + endMarker);
        }
        var finalPos : Vector3 = transform.position + moveBy;
        // Debug.Log("final position" + finalPos.x + "buildind max X" + buildingXMax  + "buildingmin" + buildingXMin);
        // Debug.Log("final position" + finalPos.z + "buildind max Z" + buildingZMax  + "buildingmin" + buildingZMin);
        if((finalPos.z < buildingZMax && finalPos.z > buildingZMin) && (finalPos.x < buildingXMax && finalPos.x > buildingXMin))
        {
        	//Debug.Log("Inside");
            return 0;
        }
		
        transform.position = finalPos;
        return 1;
		transform.position.y = 0;
		//assignMovement = false;
		//Debug.Log("move by" + moveBy);
	}
}
 function generateMarkers()
 {
 	var currentX = transform.position.x;
	var rightMostEnd_X = -4;
	var maxLeftDist = leftMostEnd_X - currentX;
	var maxRightDist = -4 - currentX;
	//Debug.Log("c=" + currentX + ", left=" + leftMostEnd_X_map + ",right=" + rightMostEnd_X);
	randomXDist= Random.Range(maxLeftDist, maxRightDist);

	var currentZ = transform.position.z;
	var rightMostEnd_z = zMax;
	var leftMostEnd_z : float = zMin;
	var maxLeftDistZ = leftMostEnd_z - currentZ;
	var maxRightDistZ = rightMostEnd_z - currentZ;
	//Debug.Log("c=" + currentZ + ", left=" + leftMostEnd_z + ",right=" + rightMostEnd_z);
	randomZDist= Random.Range(maxLeftDistZ, maxRightDistZ);
	//Debug.Log("maxLeftDistZ=" + maxLeftDistZ + ", maxRightDistZ=" + maxRightDistZ + ",r=" + randomZDist);
	endMarker = Vector3(transform.position.x + randomXDist, 0, transform.position.z + randomZDist);
 }
