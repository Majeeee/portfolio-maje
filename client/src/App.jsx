import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function App(){
return (
<div className="container">
<header>
<h1>Maje</h1>
<p>Frontendutvecklare — React · JavaScript · Azure</p>
</header>
<main>
<About />
<Skills />
<Projects />
</main>
<footer>
<p>Kontakt: majid_t58@yahoo.com</p>
</footer>
</div>
)
}