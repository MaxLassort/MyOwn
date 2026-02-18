using System;
using Godot;

namespace MyOwn.Shared
{
    public abstract partial class InteractionZone : Area2D
    {
    
        private bool _isPlayerIn = false;
        private bool _isInteracting = false;
        private AnimatedSprite _playerSprite = null;
    
        public override void _Ready()
        {
            Connect("body_entered", this, nameof(OnPlayerEntered));
            Connect("body_exited", this, nameof(OnPlayerExited));
            
        }

        public void OnPlayerEntered(PhysicsBody2D body)
        {
            if (body.Name != "Player")
            {
                return;
            }
            
            _isPlayerIn = true;
            // Stocker la référence au sprite du joueur
            _playerSprite = body.GetNode<AnimatedSprite>("AnimatedSprite");
            OnPlayerEnteredZone(body, _playerSprite.Animation);
        }

        public void OnPlayerExited(PhysicsBody2D body)
        {
            if (body.Name != "Player")
            {
                return;
            }
            _isPlayerIn = false;
            _playerSprite = body.GetNode<AnimatedSprite>("AnimatedSprite");
            OnPlayerExitedZone(body, _playerSprite.Animation);
        }

        public override void _Input(InputEvent @event)
        {
            if (!_isPlayerIn || _playerSprite == null) return;
        
            if (!@event.IsActionPressed("ui_accept")) return;
            try
            {
                var currentAnimation = _playerSprite.Animation;
                GD.Print($"Animation Player: {currentAnimation}");

                if (!currentAnimation.Contains("north")) return;
                _isInteracting = !_isInteracting;
            }
            catch (Exception ex)
            {
                GD.PrintErr($"Erreur récupération animation: {ex.Message}");
                _isInteracting = !_isInteracting;
            }
        }
  
        protected virtual void OnPlayerEnteredZone(PhysicsBody2D player, string animation) 
        {
            GD.Print("💻 Dans la zone"); 
        }

        protected virtual void OnPlayerExitedZone(PhysicsBody2D player, string animation)
        {
            GD.Print("💻 Plus dans la zone");
        }
    }
}
