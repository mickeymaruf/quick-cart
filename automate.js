const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

// Directory where you want the .tgz file to be created
const targetDirectory = "../test-react-app/";

// Name of your package (replace 'your-package-name' with your actual package name)
const packageName = "quick-cart";

try {
  // Step 1: Run npm run build
  console.log("Running npm run build...");
  execSync("npm run build", { stdio: "inherit" });

  // Step 2: Run npm pack to create .tgz file
  console.log("Running npm pack...");
  const packedFile = execSync("npm pack", { encoding: "utf-8" }).trim();

  console.log(packedFile);

  // Step 3: Move the .tgz file to the target directory
  const currentDirectory = process.cwd();
  const sourceFile = path.join(currentDirectory, packedFile);
  const targetFile = path.join(targetDirectory, packedFile);

  console.log(`Moving ${packedFile} to ${targetDirectory}...`);
  fs.renameSync(sourceFile, targetFile);

  // Step 4: Run npm update in the target directory with the package name
  console.log(`Running npm update in ${targetDirectory} for ${packageName}...`);
  execSync(`npm update ${packageName}`, {
    cwd: targetDirectory,
    stdio: "inherit",
  });

  console.log("Automation process completed successfully.");
} catch (error) {
  console.error("Error occurred:", error);
}
