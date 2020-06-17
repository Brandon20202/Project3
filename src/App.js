import React, { Component } from 'react';
import NavBar from "./components/NavBar";
// import { useAuth0 } from "./react-auth0-spa";
import Menu from './components/Menu/Menu'
import SidePanel from './components/SidePanel/Sidepanel';



class App extends Component {

  state = {
    menuPanelOpen: false
  }
  menuToggleClickHandler = () => {
    this.setState((prevState) => {
      return { menuPanelOpen: !prevState.menuPanelOpen };
    });
  };

  sidetoggleClickHandler = () => {
    this.setState({ menuPanelOpen: false });
  }

  render() {
    let menuPanel;
    let sidepanel;

    if (this.state.menuPanelOpen) {
      menuPanel = <Menu />;
      sidepanel = <SidePanel click={this.sidetoggleClickHandler} />
    }
    return (
      <div style={{ height: '100%' }}>
        <NavBar menuClickHandler={this.menuToggleClickHandler} />
        <Menu show={this.state.menuPanelOpen} />
        {sidepanel}
        <main style={{ marginTop: '64px' }}>
          <p>This is a page content</p>
        </main>
      </div>
    );
  }
}
export default App;





