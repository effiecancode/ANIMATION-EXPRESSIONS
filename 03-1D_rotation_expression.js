// Parameters for the rotation and distance animation
var rotationSpeedZ = 100.0; // Adjust the Z rotation speed as needed
var maxDistance = 200.0; // Adjust the maximum distance (radius) as needed

// Calculate Z rotation based on time
var rotationValueZ = rotationSpeedZ * time;

// Calculate distance based on rotation angle
var distance = maxDistance;

// Set the rotation for the Z axis
rotationValueZ
