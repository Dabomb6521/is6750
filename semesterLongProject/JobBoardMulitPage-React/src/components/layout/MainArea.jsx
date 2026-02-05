import { use } from "react"
import ProfileContext from "../../store/ProfileContext"


const MainArea = ({children}) => {

  return (
    <main>
        <section className="hero-section">
            <div className="container">
                <h2>Find Your Next Opportunity</h2>
                <div className="search-container">
                    <input type="text" id="searchInput" placeholder="Search by job title, skill, or keyword"/>
                    <input type="text" id="locationInput" placeholder="Location (e.g., Logan, UT)"/>
                    <button id="searchBtn">Search</button>
                </div>
            </div>
        </section>

        <section className="content-section container">
           {children}
        </section>
    </main>
  )
}

export default MainArea
