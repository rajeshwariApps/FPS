#pragma strict

function Start () {

}

function Update () {

}
public function loadScene( )
{
	SceneManagement.SceneManager.LoadScene("MenuScene");
    Time.timeScale = 1;
}