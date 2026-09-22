export function filterVideoProjects(projects, selectedField) {
  if (selectedField === 'All') return projects
  return projects.filter((project) => project.field === selectedField)
}
