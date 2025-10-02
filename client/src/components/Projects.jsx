
export default function Projects() {
  const projects = [
    {
      name: 'Portfolio Maje',
      description: 'Min portfolio byggd med React och Vite',
      link: 'https://github.com/Majeeee/portfolio-maje'
    },
    {
      name: 'Projekt 2',
      description: 'Beskrivning av projekt 2',
      link: '#'
    }
  ]

  return (
    <section>
      <h2>Projekt</h2>
      <ul>
        {projects.map((p, index) => (
          <li key={index}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">Se projekt</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
