// Generate a random amplitude for each bounce between 30 and 70
amplitude = 100 + Math.random() * 40;

frequency = 1.0;

// Simple bounce expression with random amplitude
y = amplitude * Math.abs(Math.sin(frequency * time * 2 * Math.PI));

// Apply the bounce effect
[value[0], value[1] + y]
