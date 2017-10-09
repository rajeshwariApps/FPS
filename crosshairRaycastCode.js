/*#pragma strict
//var crossHairPosition : Transform;
var mainCam : GameObject;
function Start () {

}

function Update () 
{
	//this.transform = mainCam.transform;
	var hit : RaycastHit;
	var scan_Ray : Ray = new Ray(transform.position, Vector3.forward);
	Debug.DrawRay(transform.position, Vector3.forward,Color.green);
	if (Physics.Raycast(scan_Ray, hit, 100.0f))
	{
		Debug.Log("hey");
	}
}*/