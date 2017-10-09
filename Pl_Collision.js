var player:GameObject;
var audioo: AudioSource ;
var cameraObj : GameObject;
var counter : int = 0;
var alarm : float = 0;
var gap : float = 2.0;
var panelObj : GameObject;
var playerBulletObj : GameObject ;
function Start () 
{
    panelObj.gameObject.SetActive(false);

}

function Update () {

}
function OnTriggerEnter (col:Collider)
{
    
    
   if( col.name == "Player" )
    {
       
        /*col.gameObject.SetActive(false);
        this.gameObject.SetActive(false);
        Debug.Log("player hit");
        //Time.timeScale = 0;*/
         audioo.Play();
                cameraObj.transform.Rotate(0,0,180);
                alarm = Time.time + gap;
        this.gameObject.SetActive(false);
        
        
                Debug.Log("player hit");
            
       
        Time.timeScale = 0;
       
     	panelObj.gameObject.SetActive(true);
     

    }
}