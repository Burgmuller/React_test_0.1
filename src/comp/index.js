//import ReactDOM from 'react-dom';
//import React from 'react';
class Header extends React.Component {
    render() {
    return <div className="top-bar">
            <div className="row">
                <div className="page-logo"><a href='./' data-i18n_ap="logo"></a></div>
                <div className="top-bar-left">
                    <ul className="menu">
                        <li><a href="#" data-i18n_ap="nav1"></a></li>
                        <li><a href="#" data-i18n_ap="nav2"></a></li>
                        <li><a href="#" data-i18n_ap="nav3"></a></li>
                        <li><a href="#" data-i18n_ap="nav4"></a></li>
                        <li><a href="#" data-i18n_ap="nav5"></a></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li><input type="search" placeholder="My Opticron..." /></li>
                        <li><button type="button" className="button search-btn"><i className="fa fa-search" aria-hidden="true"></i></button></li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
class Slider extends React.Component {
    render() {
    return <div className="orbit">
            <ul className="orbit-container owl-carousel">
                <li><img src="./media/photos/slider/1.jpg" /></li>
                <li><img src="./media/photos/slider/2.jpg" /></li>
                <li><img src="./media/photos/slider/3.jpg" /></li>
            </ul>
        </div>;
    }
}
class TopProducts extends React.Component {
    render() {
    return  <div className="small-up-2 large-up-4">
                <div className="column">
                    <h2 data-i18n_ap="top1-title"></h2>
                    <img className="thumbnail" src="./img/t/top1.jpg" alt="" />
                    <p data-i18n_ap="top1-p"></p>
                    <a href="#" className="button expanded" data-i18n_ap="top1-btn"></a>
                </div>
                <div className="column">
                    <h2 data-i18n_ap="top2-title"></h2>
                    <img className="thumbnail" src="./img/t/top2.jpg" alt="" />
                    <p data-i18n_ap="top2-p"></p>
                    <a href="#" className="button expanded" data-i18n_ap="top2-btn"></a>
                </div>
                <div className="column">
                    <h2 data-i18n_ap="top3-title"></h2>
                    <img className="thumbnail" src="./img/t/top3.jpg" alt="" />
                    <p data-i18n_ap="top3-p"></p>
                    <a href="#" className="button expanded" data-i18n_ap="top3-btn"></a>
                </div>
                <div className="column">
                    <h2 data-i18n_ap="top4-title"></h2>
                    <img className="thumbnail" src="./img/t/top4.jpg" alt="" />
                    <p data-i18n_ap="top4-p"></p>
                    <a href="#" className="button expanded" data-i18n_ap="top4-btn"></a>
                </div>
        </div>;
    }
}
class Offers extends React.Component {
    render() {
    return  <div>
                <div className="callout large secondary">
                    <div className="small-up-1 large-up-1">
                        <h2 data-i18n_ap="offers-title"></h2>
                    </div>
                    <div className="small-up-1 large-up-3">
                        <div className="column">
                            <div className="callout small">
                                <img className="thumbnail" src="./img/t/o1.jpg" alt="" />
                                <h5 data-i18n_ap="offers-p1"></h5>
                            </div>
                        </div>
                        <div className="column">
                            <div className="callout small">
                                <img className="thumbnail" src="./img/t/o2.jpg" alt="" />
                                <h5 data-i18n_ap="offers-p2"></h5>
                            </div>
                        </div>
                        <div className="column">
                            <div className="callout small">
                                <img className="thumbnail" src="./img/t/o3.jpg" alt="" />
                                <h5 data-i18n_ap="offers-p3"></h5>
                            </div>
                        </div>
                    </div>
                    <div className="small-up-1 large-up-1">
                        <a href="#" className="button" data-i18n_ap="offers-btn"></a>
                    </div>
                </div>
        </div>;
    }
}
class Categories extends React.Component {
    render() {
    return  <div className="categories">
                <div className="small-up-1 large-up-1">
                    <h2 data-i18n_ap="cat-title"></h2>
                </div>
                <ul className="small-up-2 large-up-4">
                    <li className="column">
                        <img className="thumbnail" src="./img/t/b1.jpg" alt="" />
                        <p data-i18n_ap="cat-p1"></p>
                    </li>
                    <li className="column">
                        <img className="thumbnail" src="./img/t/b2.jpg" alt="" />
                        <p data-i18n_ap="cat-p2"></p>
                    </li>
                    <li className="column">
                        <img className="thumbnail" src="./img/t/b3.jpg" alt="" />
                        <p data-i18n_ap="cat-p3"></p>
                    </li>
                    <li className="column">
                        <img className="thumbnail" src="./img/t/b4.jpg" alt="" />
                        <p data-i18n_ap="cat-p4"></p>
                    </li>
                </ul>
        </div>;
    }
}
class Footer extends React.Component {
    render() {
    return <footer className="callout secondary">
            <div className="row small-up-1 large-up-2">
                <div className="column">
                    <p data-i18n_ap="foo-p1">Vivamus Hendrerit Arcu Sed Erat Molestie</p>
                    <ul className="menu">
                        <li><a href="#" data-i18n_ap="foo-n1"></a></li>
                        <li><a href="#" data-i18n_ap="foo-n2"></a></li>
                        <li><a href="#" data-i18n_ap="foo-n3"></a></li>
                        <li><a href="#" data-i18n_ap="foo-n4"></a></li>
                    </ul>
                </div>
                <div className="column">
                    <div className="call"><i className="foo-call" data-i18n_ap="foo-call"></i><i className="foo-call-num" data-i18n_ap="foo-call-num"></i></div>
                    <div className="email"><i className="foo-email" data-i18n_ap="foo-email"></i><i className="foo-email-txt" data-i18n_ap="foo-email-txt"></i></div>
                    <ul className="social">
                        <li className="fb"><a href="#"><i className="fa fa-facebook fa-2x"></i></a></li>
                        <li className="tw"><a href="#"><i className="fa fa-twitter fa-2x"></i></a></li>
                        <li className="in"><a href="#"><i className="fa fa-linkedin fa-2x"></i></a></li>
                        <li className="yt"><a href="#"><i className="fa fa-youtube fa-2x"></i></a></li>
                        <li className="go"><a href="#"><i className="fa fa-google-plus fa-2x"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>;
    }
}
function MyLanding() {
    return (
        <div className="main background--home">
            <Header />
            <Slider />
            <TopProducts />
            <Offers />
            <Categories />
            <Footer />
        </div>
    );
}
ReactDOM.render(<MyLanding />,document.getElementById('root'));