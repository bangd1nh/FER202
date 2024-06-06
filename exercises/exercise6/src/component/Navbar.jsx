import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand" href="#top">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#top">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#top">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#top" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#top">item</a></li>
                                <li><a class="dropdown-item" href="#top">item</a></li>
                                <li><a class="dropdown-item" href="#top">item</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <form class="d-flex" role="search">
                    <input class="me-2 p-1 border border-secondary-subtle ps-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="border border-primary border-2 text-primary " type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar