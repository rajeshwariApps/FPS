#pragma strict
var player_PlaceHolder : GameObject;
var playerBullet : GameObject;
var player_BulletArray : GameObject[];
var ply_BulletIndex : int;
var timeCounter : float;
var gunHand : Transform;
var i : int = 0;
var pBulletIndex : int = 0;
function Start () 
{
	for(i = 0 ; i < player_BulletArray.length; i++)
	{
		player_BulletArray[i] = Instantiate( playerBullet, Vector3( gunHand.position.x, gunHand.position.y, gunHand.position.z), playerBullet.transform.rotation);
		player_BulletArray[i].SetActive(false);
	} 

}

function Update () 
{

}