#pragma strict

function Start () {

}

function Update () {

}
public function loadScene( )
{
	SceneManagement.SceneManager.LoadScene("scene1");
    Time.timeScale = 1;
}