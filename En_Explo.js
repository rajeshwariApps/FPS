#pragma strict
//var enemyExploArray:GameObject[];
var enemyExplosionObj : GameObject;
var enemy_explosions : GameObject[];
var audioo: AudioSource ;
function Start () {
audioo = GetComponent.<AudioSource>();
	for(var  j:int  = 0; j < enemy_explosions.Length; j++)
	{
		enemy_explosions[j] = Instantiate( enemyExplosionObj,Vector3(0, 0, 0 ), enemyExplosionObj.transform.rotation);
		enemy_explosions[j].SetActive(false);
	}

}

function Update () {

}
function OnTriggerEnter (col:Collider)
{
    
    
   if( col.name == "enemy4InsideBuil" || col.name == "enemy1" || col.name == "enemy2"|| col.name == "enemy3" || col.name == "norton (2)" 
   		|| col.name == "norton (3)" || col.name == "norton (4)" || col.name == "norton (5)"  || col.name == "norton (6)" )
    {
        
        for(var j:int = 0; j < enemy_explosions.Length; j++)
		{
			enemy_explosions[j].transform.position = col.transform.position;
			col.gameObject.SetActive(false);
			this.gameObject.SetActive(false);
			enemy_explosions[j].gameObject.SetActive(true);
            audioo.Play();

            //if(Time.time > alarm)
                {
                  //enemy_explosions[j].gameObject.SetActive(false);  
                }
        }
        Debug.Log("Enemy hit");
       

     

    }
}
