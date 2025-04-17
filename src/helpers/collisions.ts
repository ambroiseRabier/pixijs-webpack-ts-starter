import { Circle, Point, Rectangle } from 'pixi.js';

export function rectRect(r1: Rectangle, r2: Rectangle): boolean {
  return !(r1.top > r2.bottom || r1.bottom < r2.top || r1.left > r2.right || r1.right < r2.left);
}

export function circCirc(r1: Circle, r2: Circle): boolean {
  const bothRadius = r1.radius + r2.radius;
  const diff = new Point(r1.x - r2.x, r1.y - r2.y);
  const distance = Math.sqrt(diff.x * diff.x + diff.y * diff.y);

  return distance <= bothRadius;
}

export function circRect(circle: Circle, rect: Rectangle): boolean {
  // Find the closest point on the rectangle to the circle's center
  const closestX = Math.max(rect.x, Math.min(circle.x, rect.x + rect.width));
  const closestY = Math.max(rect.y, Math.min(circle.y, rect.y + rect.height));

  // Calculate the distance between the circle's center and the closest point
  const distanceX = circle.x - closestX;
  const distanceY = circle.y - closestY;

  // Calculate squared distance (avoids costly Math.sqrt)
  const distanceSquared = distanceX * distanceX + distanceY * distanceY;

  // Check if the distance is less than the circle's radius squared
  return distanceSquared < circle.radius * circle.radius;
}
