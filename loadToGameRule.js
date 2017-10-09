#pragma strict

function Start () {

}

function Update () {

}
public function loadScene( )
{
	SceneManagement.SceneManager.LoadScene("GameruleScene");
    Time.timeScale = 1;
}