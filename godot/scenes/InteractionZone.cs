using Godot;

namespace MyOwn.scenes
{
    public partial class InteractionZone : Area2D
    {
        private AnimationPlayer _animator;
        private bool _isPlayerNear = false;
        private bool _isInteracting = false;
        private AnimatedSprite _playerSprite = null;
        private Control _popin = null;

        public override void _Ready()
        {
            _animator = GetParent().GetNode<AnimationPlayer>("AnimationPlayer");
            
            _popin = GetTree().CurrentScene.GetNode<Control>("UI/PopinSystem");

            Connect("body_entered", this, nameof(OnPlayerEntered));
            Connect("body_exited", this, nameof(OnPlayerExited));
            ZIndex = (int)Position.y;
        }

        private void OnPlayerEntered(PhysicsBody2D body)
        {
            if (body.Name == "Player")
            {
                _isPlayerNear = true;

                // Stocker la référence au sprite du joueur
                _playerSprite = body.GetNode<AnimatedSprite>("AnimatedSprite");

                GD.Print("💻 [ESPACE] pour voir mes projets");
            }
        }

        private void OnPlayerExited(PhysicsBody2D body)
        {
            if (body.Name == "Player")
            {
                _isPlayerNear = false;
                _playerSprite = null;
                EndInteraction();
                GD.Print("📺 Zone d'interaction quittée");
            }
        }

        public override void _Input(InputEvent @event)
        {
            if (!_isPlayerNear || _playerSprite == null) return;

            if (@event.IsActionPressed("ui_accept"))
            {
                try
                {
                    string currentAnimation = _playerSprite.Animation;
                    GD.Print($"Animation Player: {currentAnimation}");

                    if (currentAnimation.Contains("north"))
                    {
                        if (!_isInteracting)
                        {
                            StartInteraction();
                            _popin.Visible = true;
                        }
                        else
                        {
                            EndInteraction();
                        }
                    }
                }
                catch (System.Exception ex)
                {
                    GD.PrintErr($"Erreur récupération animation: {ex.Message}");

                    if (!_isInteracting)
                    {
                        StartInteraction();
                    }
                    else
                    {
                        EndInteraction();
                    }
                }
            }
        }

        private void StartInteraction()
        {
            _isInteracting = true;
            _animator.Play("static");
        }

        private void EndInteraction()
        {
            if (_isInteracting)
            {
                _isInteracting = false;
                _animator.Play("glisten");
                
                if (_popin != null)
                {
                    _popin.Visible = false;
                    GD.Print("📺 Popup cachée !");
                }
            }
        }
    }
    
}
