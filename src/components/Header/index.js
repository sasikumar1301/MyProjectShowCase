import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <a href='https://drive.google.com/file/d/1puqVhltoKfIVfHdrNAzfg6TCEYdBmrdJ/view?usp=sharing'><p className="website-logo">SK</p></a>
      
      <ul className="nav-menu">
        <li><a href='https://www.linkedin.com/in/sasikumar1301/'>
          <img
            className="social-network-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSF5KidCb6QWURqk5Mmw6GTOEP2nprANpGPfOgSa1m0Afx2kVi-EGklF9FVxO3Hg8A18M&usqp=CAU"
            alt="Linked In"
          /></a>
        </li>
        <li>
          <a href='https://github.com/sasikumar1301'>
          <img
            className="social-network-img"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="Git Hub"
          /></a>
        </li>
        <li><a href='https://twitter.com/sasikumar_k_'>
          <img
            className="social-network-img x"
            src="https://i.pinimg.com/originals/ed/54/51/ed5451961869a97b434b185f2fe064cc.webp"
            alt="Twitter"
          /></a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header