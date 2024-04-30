import "../css/NABreadcrumbs.css"
import {Link, useLocation} from 'react-router-dom'

function Breadcrumbs() {
    const {pathname} = useLocation();
    const pathnames = pathname.split('/').filter((x)=> x);
    console.log(pathname);
    let breadcrumbPath = '';
    if (pathname === 'new-arrival') {
        pathname 
    }

    return (
        <>
            <div className="bread-container">
                <div className="breadscrumb-m">
                {pathnames.length > 0 && <Link to='/'>Home</Link>}
                {pathnames.map((name, index)=>{
                    if (name === 'new-arrivals') {
                        name = 'New Arrival' 
                    };
                    if (name === 'all-fragrances') {
                        name = 'All Featured Perfumes' 
                    }
                    breadcrumbPath += `/${name}`;
                    const isLast = index === pathnames.length - 1

                    return isLast ? <span className='gt' key={breadcrumbPath}> &gt; {name}</span> 
                    :
                    (<span className='gt' key={breadcrumbPath}> &gt;<Link to={breadcrumbPath}>{name}</Link></span>)  
                })}
                </div>
            </div>
        </>
    );
}

export default Breadcrumbs;
