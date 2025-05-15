import Header from '../components/common/Header';
import Navigation from '../components/common/Navigation';

const PrivateLayout = ({ children, ...headerProps }) => (
  <div className="private-layout">
    <Header {...headerProps} />
    <Navigation />
    <div className="layout">
      <main className="main-content">
        {children}
      </main>
    </div>
  </div>
);

export default PrivateLayout;