import Link from 'next/link'

const Header = () => {
  return (
    <div style={{padding:20}}>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link href="repos/">Repos</Link> &nbsp;|&nbsp;
            <Link href="summary/">Summary</Link>&nbsp;
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;