export function healthRate(object) {
  if (object.health > 50) {
    console.log(`${object.name} healthy`);
    return "healthy";
  } else if (object.health <= 50 && object.health > 15) {
    console.log(`${object.name} wounded`);
    return "wounded";
  } else {
    console.log(`${object.name} critical`);
    return "critical";
  }
}
healthRate({ name: "Маг", health: 15 });
