export function filterVideoProjects(projects, selectedField) {
  if (selectedField === 'All') return projects
  return projects.filter((project) => project.field === selectedField)
}

export function getInstagramEmbedUrl(value) {
  try {
    const url = new URL(value)
    if (!['instagram.com', 'www.instagram.com'].includes(url.hostname)) return ''

    const match = url.pathname.match(/^\/(reel|p)\/([^/]+)\/?$/)
    if (!match) return ''

    return `https://www.instagram.com/${match[1]}/${match[2]}/embed/`
  } catch {
    return ''
  }
}
