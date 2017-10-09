#pragma strict
var e_bulletManagerScript : en_BulletActivation;
var gotPlayerBooleanScript : Got_thePlayer;

var fireCounter : float = 0 ;
var enemyNum : GameObject;
//var enemyNum2 : GameObject;
var enBulletObj : GameObject;
var fireGap : float = 0.5;
var enBulletPlaceHolder : GameObject;
var shootBullet : boolean = false;
//var anim : Animator;
function Start ()
 {
 	e_bulletManagerScript = enemyNum.GetComponent(en_BulletActivation);
 	gotPlayerBooleanScript = enemyNum.GetComponent(Got_thePlayer);

}

function Update () 
{
	shootE_Bullet();
}

function shootE_Bullet () 
{

			if( gotPlayerBooleanScript.got_The_Player)
			{
				
				if(fireCounter == 0)
				{
					//anim.SetBool("shoot", true);
				    Debug.Log("index: " + e_bulletManagerScript.eBulletIndex + "," + e_bulletManagerScript.enemy_BulletArray);
					e_bulletManagerScript.enemy_BulletArray[e_bulletManagerScript.eBulletIndex].SetActive(true);
					shootBullet = true;
					e_bulletManagerScript.enemy_BulletArray[e_bulletManagerScript.eBulletIndex].transform.position = enBulletPlaceHolder.transform.position;

					e_bulletManagerScript.enemy_BulletArray[e_bulletManagerScript.eBulletIndex].transform.rotation = enBulletPlaceHolder.transform.rotation;
					e_bulletManagerScript.enemy_BulletArray[e_bulletManagerScript.eBulletIndex].GetComponent(Rigidbody).velocity = Vector3.zero;
					e_bulletManagerScript.enemy_BulletArray[e_bulletManagerScript.eBulletIndex].GetComponent(Rigidbody).angularVelocity =Vector3.zero;
					//e_bulletManagerScript.enemy_BulletArray[e_bulletManagerScript.eBulletIndex].GetComponent(PM_playerBulletMovement).//tAudio.Play();
					e_bulletManagerScript.eBulletIndex++;

					if(e_bulletManagerScript.eBulletIndex == e_bulletManagerScript.enemy_BulletArray.length)
					{
						e_bulletManagerScript.eBulletIndex = 0;
					}
				}
				//anim.SetBool("shoot",false);
				//anim.SetBool("run", true);
				fireCounter += Time.deltaTime;
				if(fireCounter >= fireGap)
				{
					fireCounter = 0;
				}
			}
			else
			{
				fireCounter = 0;
			}
	}

