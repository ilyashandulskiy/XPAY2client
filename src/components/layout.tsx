
interface Iprops {
    children: React.ReactElement[]
}

const Layout = ({children}: Iprops) => {

    return (
        <>
            <div className="header">
                <header className="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
                <div className="container-fluid d-flex align-items-center">
                    <h1 className="d-flex align-items-center fs-4 text-white mb-0">
                    XPAY 4.0
                        </h1>
                        <p className="text-white header__trainer">Сергей Владимирович - тренер</p>
               </div>
                </header>
            </div>
            <div className="main">
                {children}
            </div>
        </>
    )

}

export default Layout