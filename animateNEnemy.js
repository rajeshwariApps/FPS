#pragma strict
var anim : Animation;
var enemy : GameObject;
var shootScript : en_bulletManager;
var movescript : RandomMovement;

function Start () 
{
	shootScript = enemy.GetComponent(en_bulletManager);
	movescript = enemy.GetComponent(RandomMovement);
}

function Update () 
{
//if(shootScript.shootBullet)
{
	anim.Play("Shoot");
}

}