class Person extends GameObject {
    constructor(config) {
        super(config);
        this.movingProgressRemaining = 0;

        this.isPlayerControlled = config.isPlayerControlled || false;

        this.directionUpdate = {
            "up": ["y", -1],
            "down": ["y", 1],
            "left": ["x", -1],
            "right": ["x", 1],
        }
    }

    update(state) {
        // Move if progress is greater than 0
        
        if  (this.movingProgressRemaining > 0) {
            this.updatePosition();
        } else {
            // Cases for Walking Here

            //Case: Keyboard Ready & Arrow Pressed
            if (this.isPlayerControlled && state.arrow) {
                this.startBehavior(state, {
                    type: 'walk',
                    direction: state.arrow
                })
            }
            this.updateSprite(state);
        }
    }

    startBehavior(state, behavior) {
        // Set charcter direction to behavior 
        this.direction = behavior.direction;

        if (behavior.type === 'walk') {

            // Stop here if space not free
            if (state.map.isSpaceTaken(this.x, this.y, this.direction)) {
                return;
            }

            //ready to walk
            state.map.moveWall(this.x, this.y, this.direction);
            this.movingProgressRemaining = 16;
        }
    }

    updatePosition() {
        const [property, change] = this.directionUpdate[this.direction]
        this[property] += change;
        this.movingProgressRemaining -= 1;
    }

    updateSprite() {
        if(this.movingProgressRemaining > 0) {
            this.sprite.setAnimation("walk-"+this.direction)
            return
        }

        this.sprite.setAnimation("idle-"+this.direction);
    }
}