#pragma strict
var moveDirection: Vector3 = Vector3.zero;
var speed : float = 6;
var jumpSpeed : float = 10;
var gravity : float = 20;
var playerCharController : CharacterController;
 //var rotSpeedX : float = 2.0;
 var rotSpeedY : float = 0.05;
//var startMoving : boolean ;
function Start ()
 {

}

function Update () 
{
	
	if(playerCharController.isGrounded)
	{
        //if(Input.GetKey("right") || Input.GetKey("left") || Input.GetKey("up") || Input.GetKey("down") )
            {
                //startMoving = true;
                //Debug.Log(startMoving);
            }
		var xMove = Input.GetAxis("Horizontal");
		var yMove = Input.GetAxis("Vertical");
		// Debug.Log("g" + xMove + "," + yMove);
		moveDirection = Vector3(xMove, 0, yMove);
		moveDirection = transform.TransformDirection(moveDirection);
		moveDirection = moveDirection * speed;

		var jump = Input.GetButton("Jump");
		// Debug.Log("j" + jump);
		if(jump)
		{
			moveDirection.y = jumpSpeed;
		}
	}

	moveDirection.y -= gravity * Time.deltaTime;
	var finalMove = moveDirection * Time.deltaTime;
	// Debug.Log("final move " + finalMove);
    //if(startMoving)
        {
            playerCharController.Move(finalMove);
            //startMoving = false;
        }
	
	transform.Rotate(Vector3(0, Input.GetAxis("Mouse X") * rotSpeedY, 0));

}