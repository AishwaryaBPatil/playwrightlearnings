// Q4. Create a function that uses the process object to display system information
// (platform, architecture, Node version)

function systemprocess() {
    console.log("platform", process.platform);
    console.log("architecture", process.arch);
    console.log("Node version", process.version);

}
systemprocess();

//another method
let sys = () => {
    return `platform ${process.platform}, architecture ${process.arch},Node version ${process.version} `;
}

console.log(sys());


