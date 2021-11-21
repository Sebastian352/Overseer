// Send the app data to the server.
export async function send_data(appNames) {
    const data = {
        apps: appNames
    }
    const response = await fetch("http:localhost:8080/apps", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!response.ok) {
        console.log("[!] WARNING: Failed POST Request to /apps");
    }
    console.log("[+] Successful POST to /apps");
}

export async function get_data() {
    return await fetch("http://localhost:8080/apps")
    .then(res => res.text())
    .then(res => JSON.parse(res))
    .catch(error => console.log(error));
}
