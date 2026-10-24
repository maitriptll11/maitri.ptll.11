const grid = document.getElementById("project-grid");
const emptyNote = document.getElementById("empty-note");
const dialog = document.getElementById("project-dialog");
let activeFilter = "All";

function renderProjects() {
  const filtered = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeFilter);

  grid.innerHTML = "";
  document.getElementById("all-count").textContent = String(PROJECTS.length).padStart(2, "0");
  emptyNote.hidden = filtered.length !== 0;

  filtered.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View ${project.title}`);
    card.innerHTML = `
      <div class="project-image-wrap">
        <span class="project-number">${String(index + 1).padStart(2, "0")} / ${project.year || ""}</span>
        <img class="project-image" src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-info">
        <div><h3>${project.title}</h3><p>${project.category}</p></div>
        <span class="project-arrow">↗</span>
      </div>`;
    const open = () => openProject(project);
    card.addEventListener("click", open);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); }
    });
    grid.appendChild(card);
  });
}

function openProject(project) {
  document.getElementById("dialog-image").src = project.image;
  document.getElementById("dialog-image").alt = project.title;
  document.getElementById("dialog-category").textContent = `${project.category} / ${project.year || ""}`;
  document.getElementById("dialog-title").textContent = project.title;
  document.getElementById("dialog-description").textContent = project.description || "";
  dialog.showModal();
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item === button));
    renderProjects();
  });
});
document.getElementById("dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
document.getElementById("year").textContent = new Date().getFullYear();
renderProjects();
