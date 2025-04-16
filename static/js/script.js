const input = document.getElementById("terminal-input");
const output = document.getElementById("output");

const commands = {
    "hi": "hi i am a terminal based website created via parv, this website is to show you his achivements and academics. type help for more....",
    "parv": "Hi, I'm Parv Ghai — Cloud Engineer with 1 year of experience in cloud infrastructure and operations, backed by a total of 4 years of work experience. Skilled in designing, deploying, and managing scalable cloud solutions with a strong foundation in system design, microservices architecture, and distributed systems best practices. Proficient in Java, Python, and microservices frameworks such as Spring Boot and Dropwizard. Experienced in containerization and orchestration technologies like Kubernetes and Docker, ensuring efficient deployment and management of applications.",
    "projects": "Opening GitHub... https://github.com/parvghai",
    "project": "Opening GitHub... https://github.com/parvghai",
    "contact": "Email: ghaiparv@gmail.com\nPhone: +91-7878820213",
    "about me": "Hi, I'm Parv Ghai — Cloud Engineer with 1 year of experience in cloud infrastructure and operations, backed by a total of 4 years of work experience. Skilled in designing, deploying, and managing scalable cloud solutions with a strong foundation in system design, microservices architecture, and distributed systems best practices. Proficient in Java, Python, and microservices frameworks such as Spring Boot and Dropwizard. Experienced in containerization and orchestration technologies like Kubernetes and Docker, ensuring efficient deployment and management of applications.",
    "resume": "Downloading resume...",
    "help": "Available commands:\nparv\nprojects\ncontact\nresume\nclear"
};


function typeOutput(text, callback) {
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            output.innerHTML += text.charAt(index);
            index++;
        } else {
            clearInterval(interval);
            output.innerHTML += "\n\n";
            if (callback) callback();
        }
    }, 25);
}

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const cmd = input.value.trim().toLowerCase();
        output.innerHTML += `➜ ${cmd}\n`;
        input.value = "";

        if (cmd === "clear") {
            output.innerHTML = "";
        } else if (commands[cmd]) {
            if (cmd === "projects") {
                typeOutput(commands[cmd], () => {
                    window.open("https://github.com/parvghai", "_blank");
                });
            } else if (cmd === "resume") {
                typeOutput(commands[cmd], () => {
                    const link = document.createElement("a");
                    link.href = "/static/resume/Parv_Ghai_Resume.pdf";
                    link.download = "Parv_Ghai_Resume.pdf";
                    link.click();
                });
            } else {
                typeOutput(commands[cmd]);
            }
        } else {
            typeOutput(`Command not found: ${cmd}\nType 'help' to see available commands.`);
        }
    }
});

