// You don't need to do anything to this file
// it just displays/animates the police officer hat
function setupPoliceofficer(y)
{
    return new policeofficer(y);
}

function animatePoliceofficer(x, y)
{
    policeofficer.display(x, y);
}

function policeofficer(y) {
  "use strict"; "use strong"
  this.x = 0;
  this.y = y;
  this.avatar;
  this.current_dir = 0
  this.switchState = false;
  this.switchCount = 0;
  this.dir = 1;
  this.angle = 0;

  this.display = function(x,y) {
    if ((this.dir == 1 && this.current_dir > x) && (!this.switchState)) {
      this.switchState = true;
      this.dir = 0;
    }else if ((this.dir == 0 && this.current_dir < x) && (!this.switchState)) {
      this.switchState = true;
      this.dir = 1;
    }else {
      this.current_dir = x;
    }

    if (this.switchState) {
      if (this.switchCount < 180) {
        push();
        translate(x, y);
        rotate(radians(this.angle + this.switchCount));
        image(this.avatar, -19, -16);
        pop();
        this.switchCount += 8;
      } else {
        this.angle+=180
        this.switchState = false;
        this.switchCount = 0;
        push();
        translate(x, y);
        if (this.dir == 0)
        {
          rotate(radians(this.angle));
        }
        image(this.avatar, -19, -16);
        pop();
      }
    } else {
      push();
      translate(x, y);
      if (this.dir == 0)
      {
        rotate(radians(this.angle));
      }
      image(this.avatar, -19, -16);
      pop();
    }
  }
}