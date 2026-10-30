const links = [
    { label: "github",   url: "https://github.com/vicbaltazar",      path: "github.com/vicbaltazar",       color: "var(--pink-dark)" },
    { label: "linkedin", url: "https://www.linkedin.com/in/vitoriabaltazar/", path: "linkedin.com/in/vitoriabaltazar/",  color: "var(--green-mint)" },
    { label: "portfolio",url: "https://vicfelas.vercel.app/",    path: "vicfelas.vercel.app/",        color: "var(--green-lime)" },
    { label: "instagram",url: "https://www.instagram.com/httpsvis",   path: "instagram.com/httpsvis",    color: "var(--pink-dark)" },
];

const container = document.getElementById('links');
links.forEach(l => {
    const a = document.createElement('a');
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "link-row";
    a.innerHTML = `
        <span class="link-key" style="color: ${l.color}">${l.label}</span>
        <span class="link-val">${l.path}</span>
    `;
    container.appendChild(a);
});
