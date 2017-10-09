#pragma strict
var thrust : float = 50;
var enemy : GameObject;
function Start () 
{

}

function FixedUpdate () 
{
	//if(enemy.GetComponent(en_bulletManager).shootBullet)
	{

        //Debug.Log("shooting");
		 GetComponent(Rigidbody).AddForce(transform.forward * thrust);
    }
}