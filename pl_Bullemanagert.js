#pragma strict
var p_bulletManagerScript : bulletActivationCode;
var fireCounter : float = 0 ;
var bulletManager : GameObject;
var playerBulletObj : GameObject;
var fireGap : float = 0.5;
var pb_placeHolder : GameObject;
var startShooting : boolean = false;
function Start ()
 {
 	p_bulletManagerScript = bulletManager.GetComponent(bulletActivationCode);
}

function Update () 
{
	shootP_Bullet();
}

function shootP_Bullet () 
{

			if( Input.GetButtonDown( "Fire1"))
			{
				startShooting = true;
				if(fireCounter == 0 && startShooting )
				{
					p_bulletManagerScript.player_BulletArray[p_bulletManagerScript.pBulletIndex].SetActive(true);
					p_bulletManagerScript.player_BulletArray[p_bulletManagerScript.pBulletIndex].transform.position = pb_placeHolder.transform.position;
					p_bulletManagerScript.player_BulletArray[p_bulletManagerScript.pBulletIndex].transform.rotation = pb_placeHolder.transform.rotation;
					p_bulletManagerScript.player_BulletArray[p_bulletManagerScript.pBulletIndex].GetComponent(Rigidbody).velocity = Vector3.zero;
					p_bulletManagerScript.player_BulletArray[p_bulletManagerScript.pBulletIndex].GetComponent(Rigidbody).angularVelocity =Vector3.zero;
					//p_bulletManagerScript.player_BulletArray[p_bulletManagerScript.pBulletIndex].GetComponent(PM_playerBulletMovement).//tAudio.Play();
					p_bulletManagerScript.pBulletIndex++;

					if(p_bulletManagerScript.pBulletIndex == p_bulletManagerScript.player_BulletArray.length)
					{
						p_bulletManagerScript.pBulletIndex = 0;
					}
				}
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

