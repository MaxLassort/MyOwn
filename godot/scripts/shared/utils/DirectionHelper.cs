using Godot.Collections;
using MyOwn.scripts.model;

namespace MyOwn.scripts.shared.utils
{
   
    public static class DirectionHelper
    {
        private static readonly Dictionary<string, PlayerDirection> AnimationToDirection = new Dictionary<string, PlayerDirection>()
        {
            {"walk_north", PlayerDirection.North},
            {"walk_south", PlayerDirection.South},
            {"walk_east", PlayerDirection.East},
            {"walk_west", PlayerDirection.West},
            {"walk_north_east", PlayerDirection.NorthEast},
            {"walk_south_east", PlayerDirection.SouthEast},
            {"walk_south_west", PlayerDirection.SouthWest},
            {"walk_north_west", PlayerDirection.NorthWest},
            {"idle_north", PlayerDirection.North},
            {"idle_south", PlayerDirection.South},
            {"idle_east", PlayerDirection.East},
            {"idle_west", PlayerDirection.West}
        };
        
        private static PlayerDirection GetDirection(string animation)
        {
            return AnimationToDirection.TryGetValue(animation, out var direction) 
                ? direction 
                : PlayerDirection.Idle;
        }
        
        public static bool IsFacingSouth(string animation)
        {
            var dir = GetDirection(animation);
            return dir == PlayerDirection.South || 
                   dir == PlayerDirection.SouthEast || 
                   dir == PlayerDirection.SouthWest;
        }
        public static bool IsFacingNorth(string animation)
        {
            var dir = GetDirection(animation);
            return dir == PlayerDirection.North || 
                   dir == PlayerDirection.NorthEast || 
                   dir == PlayerDirection.NorthWest;
        }
        public static bool IsFacingAbsSides(string animation)
        {
            var dir = GetDirection(animation);
            return dir == PlayerDirection.West ||
                   dir == PlayerDirection.East;
        }
    }
}