import './Footer.css'

export function Footer(){

    return <footer className="footer">
        <container className="container">
            <logo className="logo">
                <img src="assets/logo 2.png" alt="" />
            </logo>
            <list className="list">
                <ul>
                    <h4>Address</h4>
                    <li>Svobody str. 35</li>
                    <li>Kyiv</li>
                    <li>Ukraine</li>
                </ul>
            </list>
        </container>
    </footer>
}