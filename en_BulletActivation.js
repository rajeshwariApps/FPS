#pragma strict
var enemy_PlaceHolder : GameObject;
var enemyBullet : GameObject;
var enemy_BulletArray : GameObject[];
var timeCounter : float;
var enemy : Transform;
var i : int = 0;
var eBulletIndex : int = 0;
function Start () 
{
	//Debug.Log("len" + enemy_BulletArray.length);
		
	for(i = 0 ; i < enemy_BulletArray.length; i++)
	{
		enemy_BulletArray[i] = Instantiate( enemyBullet, Vector3( enemy.position.x, enemy.position.y, enemy.position.z), enemyBullet.transform.rotation);
		enemy_BulletArray[i].SetActive(false);
	} 

}

function Update () 
{

}