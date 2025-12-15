using Godot;

public partial class Player : KinematicBody2D 
{
    [Export] public float Speed = 100.0f;
    
    private AnimatedSprite _sprite;
    private Vector2 _velocity = Vector2.Zero;
    private bool _isMoving = false;
    private string _currentDirection = "south";
    private Vector2 _inputVector = Vector2.Zero;   
    
    public override void _Ready()
    {
        _sprite = GetNode<AnimatedSprite>("AnimatedSprite");
        _sprite.Play("idle_south");
    }
    
    public override void _PhysicsProcess(float delta)
    {
        HandleInput();
        _velocity = MoveAndSlide(_velocity);
        UpdateAnimation();
    }
    
    private void HandleInput()
    {
        _inputVector = Vector2.Zero;
        
        if (Input.IsActionPressed("ui_up"))
            _inputVector.y -= 1;
        if (Input.IsActionPressed("ui_down"))
            _inputVector.y += 1;
        if (Input.IsActionPressed("ui_left"))
            _inputVector.x -= 1;
        if (Input.IsActionPressed("ui_right"))
            _inputVector.x += 1;
        
        _isMoving = _inputVector.Length() > 0;
        
        if (_isMoving)
        {
            _velocity = _inputVector.Normalized() * Speed;
        }
        else
        {
            _velocity = Vector2.Zero;
        }
    }

    
    private void UpdateAnimation()
    {
        if (!_isMoving) 
        {
            _sprite.Play($"idle_{_currentDirection}");
            return;
        }
        
        _currentDirection = GetDirectionFromVelocity(_inputVector);
        _sprite.Play($"walk_{_currentDirection}");
    }
    
    private string GetDirectionFromVelocity(Vector2 vel)
    {
        float angle = Mathf.Rad2Deg(Mathf.Atan2(vel.y, vel.x));
        if (angle < 0) angle += 360;
        
        if (angle >= 337.5f || angle < 22.5f)
            return "east";
        if (angle >= 22.5f && angle < 67.5f)
            return "south_east";
        if (angle >= 67.5f && angle < 112.5f)
            return "south";
        if (angle >= 112.5f && angle < 157.5f)
            return "south_west";
        if (angle >= 157.5f && angle < 202.5f)
            return "west";
        if (angle >= 202.5f && angle < 247.5f)
            return "north_west";
        if (angle >= 247.5f && angle < 292.5f)
            return "north";
        return "north_east";
    }
}