const links = [
    {
        label: "🚀 Portfólio (VitóriaOS)",
        url: "https://vicfelas.vercel.app/",
        path: "vicfelas.vercel.app"
    },
    {
        label: "💻 GitHub",
        url: "https://github.com/vicbaltazar",
        path: "github.com/vicbaltazar"
    },
    {
        label: "💼 LinkedIn",
        url: "https://www.linkedin.com/in/vitoriabaltazar/",
        path: "linkedin.com/in/vitoriabaltazar"
    },
    {
        label: "📸 Instagram",
        url: "https://www.instagram.com/vicfelas/",
        path: "instagram.com/vicfelas"
    },
    {
        label: "✉️ E-mail de Contato",
        url: "mailto:vicbaltazar287@icloud.com",
        path: "vicbaltazar287@icloud.com"
    }
];

const container = document.getElementById("links");

if (container) {
    links.forEach((l) => {
        const a = document.createElement("a");
        a.href = l.url;
        a.className = "link-row";

        if (l.url.startsWith("http")) {
            a.target = "_blank";
            a.rel = "noopener noreferrer";
        }

        const keySpan = document.createElement("span");
        keySpan.className = "link-key";
        keySpan.textContent = l.label;

        const valSpan = document.createElement("span");
        valSpan.className = "link-val";
        valSpan.textContent = `${l.path} →`;

        a.appendChild(keySpan);
        a.appendChild(valSpan);
        container.appendChild(a);
    });
}
