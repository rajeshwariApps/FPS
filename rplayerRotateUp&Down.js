#pragma strict
var speed : float = 50;

function Start () {

}

function Update () 
{
	transform.Rotate(Vector3(Input.GetAxis("Mouse Y") * (-speed), 0, 0));
}