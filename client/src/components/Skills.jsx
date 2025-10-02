
export default function Skills() {
  const skills = ['React', 'JavaScript', 'HTML/CSS', 'Azure'];
  
  return (
    <section>
      <h2>Tekniska skills</h2>
      <ul>
        {skills.map(s => <li key={s}>{s}</li>)}
      </ul>
    </section>
  )
}