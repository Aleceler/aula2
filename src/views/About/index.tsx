import {Outlet, useLocation} from 'react-router-dom';

const About = () => {
    const location = useLocation()
    const isChildRoute = location.pathname === '/about';

    return <>
        {isChildRoute && <h1>About</h1>}
        <Outlet />
    </>
}

export default About