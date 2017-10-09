#pragma strict
var thrust : float = 100;
function Start () 
{

}

function FixedUpdate () 
{
		 GetComponent(Rigidbody).AddForce(transform.forward * thrust);
}