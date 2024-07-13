export function loadImages() {
  const images = import.meta.glob("../images/*.{png,jpg,jpeg,svg}", {
    eager: true,
  });
  let imgMap = {};
  for (const path in images) {
    const key = path.split("/").pop().split(".")[0]; // Use file name as key
    imgMap[key] = images[path].default; // Get default export from each module
  }
  return imgMap;
}
