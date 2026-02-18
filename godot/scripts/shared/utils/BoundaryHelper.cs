using System;
using System.Linq;
using Godot;

namespace MyOwn.scripts.shared.utils
{
    public static class BoundaryHelper
    {
        public static void DisableBoundaries(Node scene)
        {
            try
            {
                var boundariesNode = scene.FindNode("Boundaries");
                boundariesNode.GetChildren()
                    .Cast<Node>()
                    .OfType<StaticBody2D>()
                    .SelectMany(b => b.GetChildren().Cast<Node>())
                    .OfType<CollisionShape2D>()
                    .ToList()
                    .ForEach(b => b.Disabled = true);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        public static void EnableBoundaries(Node scene)
        {
            try
            {
                var boundariesNode = scene.FindNode("Boundaries");
                boundariesNode.GetChildren()
                    .Cast<Node>()
                    .OfType<StaticBody2D>()
                    .SelectMany(b => b.GetChildren().Cast<Node>())
                    .OfType<CollisionShape2D>()
                    .ToList()
                    .ForEach(b => b.Disabled = false);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}