import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import {IoGameController, IoUmbrella} from 'react-icons/io5';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Home from './pages/Home';
import Movie from './pages/Movie';
import Game from './pages/Game';
import Login from './pages/Login';
import Register from './pages/Register';
import ChangePassword from './pages/ChangePassword';
import PageMovie from './pages/PageMovie';
import PageGame from './pages/PageGame';
import MovieEditor from './pages/MovieEditor';
import GameEditor from './pages/GameEditor';
import AddMovie from './pages/AddMovie';
import AddGame from './pages/AddGame';
import {UserContext} from './Context/UserProvider';
import {MovieContext} from './Context/MovieProvider';
import {GameContext} from './Context/GameProvider';

const MainLayout = () => {
    const [user, setUser] = useContext(UserContext);
    const [movieList, setMovieList] = useContext(MovieContext);
    const [gameList, setGameList] = useContext(GameContext);
    const { SubMenu } = Menu;
    const { Header, Content, Sider, Footer } = Layout;

    function PrivateRoute ({ children, ...rest }) {
        return (
          <Route {...rest} render={() => {
            return user !== null
              ? children
              : <Redirect to='/login' />
          }} />
        )
    }

    function LoginRoute ({ children, ...rest }) {
        return (
          <Route {...rest} render={() => {
            return user !== null
              ? <Redirect to='/' />
              : children
          }} />
        )
    }

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
        <Redirect to="/login" />
    }

    return (
        <Router>
            <Layout>
                <Header className="header">
                    <div className="logo">
                        <h1>SanMovGame</h1>
                    </div>
                    <Menu theme="dark" mode="horizontal" >
                        <Menu.Item key="1">
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/movie">Movie</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/game">Game</Link>
                        </Menu.Item>
                        {user && 
                            <>
                                <Menu.Item key="4">
                                    <button onClick={handleLogout} className="logout">Logout</button>
                                </Menu.Item>
                                <Menu.Item key="10" className="welcome">
                                    <h4>Welcome, {user.name}</h4>
                                </Menu.Item>
                            </>
                        }

                        {user === null &&
                            <>
                                <Menu.Item key="5">
                                    <Link to="/register">Register</Link>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <Link to="/login">Login</Link>
                                </Menu.Item>
                            </>
                        }
                    </Menu>
                </Header>
                <Layout>
                    {user && 
                    <Sider width={200} className="site-layout-background">
                        <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="1">
                                <Link to="/change-password">Change Password</Link>
                            </Menu.Item>
                            <Menu.Item key="2"><button onClick={handleLogout} className="logout">Logout</button></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<VideoCameraOutlined />} title="Movie List">
                            <Menu.Item key="5">
                                <Link to="/movie/create">Add New Movie</Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Link to="/movie-editor">Movie List Editor</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<IoGameController className="game-logo"/>} title="Game List">
                            <Menu.Item key="9">
                                <Link to="/game/create">Add New Game</Link>
                            </Menu.Item>
                            <Menu.Item key="10">
                                <Link to="/game-editor">Game List Editor</Link>
                            </Menu.Item>
                        </SubMenu>
                        </Menu>
                    </Sider>
                    }
                    <Layout style={user == null ? null : { padding: '0 24px 24px', marginTop: '20px' }}>
                        <Content
                        className="site-layout-background"
                        style={{
                            padding: 0,
                            margin: 0,
                            minHeight: 280,
                        }}
                        >
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route exact path="/movie">
                                    <Movie />
                                </Route>
                                <Route exact path="/game">
                                    <Game />
                                </Route>
                                <LoginRoute exact path="/register">
                                    <Register />
                                </LoginRoute>
                                <LoginRoute exact path="/login">
                                    <Login />
                                </LoginRoute>
                                <PrivateRoute exact path="/change-password">
                                    <ChangePassword />
                                </PrivateRoute>
                                {movieList.map((item) =>
                                    <Route exact path={"/movie/" + item.id}>
                                        <PageMovie id={item.id} />
                                    </Route>
                                )}
                                {movieList.map((item => 
                                    <PrivateRoute exact path={"/movie/edit/" + item.id}>
                                        <AddMovie id={item.id}/>
                                    </PrivateRoute>
                                ))}
                                {gameList.map((item) =>
                                    <Route exact path={"/game/" + item.id}>
                                        <PageGame id={item.id} />
                                    </Route>
                                )}
                                {gameList.map((item => 
                                    <PrivateRoute exact path={"/game/edit/" + item.id}>
                                        <AddGame id={item.id}/>
                                    </PrivateRoute>
                                ))}
                                <PrivateRoute exact path="/movie/create">
                                    <AddMovie />
                                </PrivateRoute>
                                <PrivateRoute exact path="/movie-editor">
                                    <MovieEditor />
                                </PrivateRoute>
                                <PrivateRoute exact path="/game/create">
                                    <AddGame />
                                </PrivateRoute>
                                <PrivateRoute exact path="/game-editor">
                                    <GameEditor />
                                </PrivateRoute>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
                <Footer className="footer">
                    SanMovGame&copy; Created by Khalid Rinaldy
                </Footer>
            </Layout>
        </Router>
    )
}

export default MainLayout;