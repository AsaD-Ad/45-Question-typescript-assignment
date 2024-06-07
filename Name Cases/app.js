var personName = "Asad";
console.log("lowercase:", personName.toLowerCase());
// UPPERCASE
console.log("lowercase:", personName.toUpperCase());
// Title Case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
