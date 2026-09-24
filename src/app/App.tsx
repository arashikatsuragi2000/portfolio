import { About } from '../features/about/components/About'
import { Contact } from '../features/contact/components/Contact'
import { Experience } from '../features/experience/components/Experience'
import { Hero } from '../features/hero/components/Hero'
import { Footer } from '../features/navigation/components/Footer'
import { Header } from '../features/navigation/components/Header'
import { Works } from '../features/works/components/Works'

export default function App() {
  return <><Header /><main><Hero /><About /><Works /><Experience /><Contact /></main><Footer /></>
}
