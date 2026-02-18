using System.Linq;
using Godot;
using MyOwn.scripts.shared.utils;
using MyOwn.Shared;

namespace MyOwn.Templates
{
    public partial class BuildingInteraction : InteractionZone // ← Ajout partial !
    {
        private AnimatedSprite _buildingSprite = null;
        private bool _isInside = false;
        private CollisionPolygon2D _exteriorBoundaries = null;
        private CollisionPolygon2D _interiorBoundaries = null;

        public override void _Ready()
        {
            base._Ready();
            _buildingSprite = GetParent().GetNode<AnimatedSprite>("buildingSprites");
            _exteriorBoundaries = GetParent().FindNode("exteriorBoundaries") as CollisionPolygon2D;
            _interiorBoundaries = GetParent().FindNode("interiorBoundaries") as CollisionPolygon2D;
        }


        protected override void OnPlayerEnteredZone(PhysicsBody2D player, string animation)
        {
            if (!DirectionHelper.IsFacingSouth(animation) && !DirectionHelper.IsFacingAbsSides(animation)) return;
            if (!_isInside)
            {
                _buildingSprite.Play("opening");
            }
        }

        protected override void OnPlayerExitedZone(PhysicsBody2D player, string animation)
        {
            if (DirectionHelper.IsFacingSouth(animation) || DirectionHelper.IsFacingAbsSides(animation))
            {
                _buildingSprite.Play("closing");
                _isInside = false;
                CallDeferred(nameof(EnableInteriorCollision));
            }
            else if (DirectionHelper.IsFacingNorth(animation))
            {
                _buildingSprite.Play("displayInterior");
                _isInside = true;
                CallDeferred(nameof(DisableExteriorCollision));
            }
        }

        private void DisableExteriorCollision()
        {
            if (_exteriorBoundaries == null) return;
            _exteriorBoundaries.Disabled = true;
            _interiorBoundaries.Disabled = false;
            BoundaryHelper.DisableBoundaries(GetTree().CurrentScene);
        }


        private void EnableInteriorCollision()
        {
            if (_exteriorBoundaries == null) return;
            _exteriorBoundaries.Disabled = false;
            _interiorBoundaries.Disabled = true;
            BoundaryHelper.EnableBoundaries(GetTree().CurrentScene);
        }
    }
}