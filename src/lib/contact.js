export function buildMailtoLink(email, subject) {
  const encode = (value) =>
    encodeURIComponent(value).replace(/[!'()*]/g, (character) =>
      `%${character.charCodeAt(0).toString(16).toUpperCase()}`,
    )

  return `mailto:${encode(email)}?subject=${encode(subject)}`
}
