using Godot;

public class Quest : Node2D
{

    public override void _Ready()
    {
        ZIndex = (int)Position.y;
    }
    
}
