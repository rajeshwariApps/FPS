#pragma strict

function Start () {

}

function Update () {

}
public function loadScene( )
{
	SceneManagement.SceneManager.LoadScene("SettingScene");
    Time.timeScale = 1;
}