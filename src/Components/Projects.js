import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Typical from 'react-typical';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftRounded';

export function Encrypt() {
    return (
        <div>
            <div className="Page TopMargin">
                <div className="Title">
                    <h2><Link to="/portfolio"><ChevronLeftIcon className="arrow big" variant="contained" color="action" /></Link>The development of <span className="tag">encrypt.</span></h2>
                    <code><p className="subtitle">A {` `}
                        <Typical className="tag" loop={1} wrapper="b" steps={[`community driven 2D platformer.`]} />
                    </p></code>
                </div>
                <div className="Content PageText">
                    <h3>Developlment Recap</h3>
                    <p className="FullText">"encrypt."</p>
                    <br></br>
                    <div className="info FullText"><h4>We had some difficulties lol</h4><p>We we're dumb lol. no the game is good play it</p></div>
                    <img src="https://img.namespace.media/images/2021/09/15/stageInfo06.png" alt="WIP" />
                    <br></br><br></br>
                    <h3>{"Challenges & Requirements"}</h3>
                    <p className="FullText">Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.</p>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetuer.
                        </li>
                        <li>
                            Aenean commodo ligula eget dolor.
                        </li>
                        <li>
                            Aenean massa cum sociis natoque penatibus.
                        </li>
                        <li>
                            Pellentesque auctor neque nec urna.
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export function XP() {
    return (
        <div>
            <div className="Page TopMargin">
                <div className="Title">
                    <h2><Link to="/portfolio"><ChevronLeftIcon className="arrow big" variant="contained" color="action" /></Link>The development of <span className="tag">XP</span></h2>
                    <code><p className="subtitle">The {` `}
                        <Typical className="tag" loop={1} wrapper="b" steps={[`Top-Tier leveling solution on Discord.`]} />
                    </p></code>
                </div>
                <div className="Content PageText">
                    <h3>Project Background</h3>
                    <p className="FullText">Project summary goes here. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.</p>
                </div>

            </div>
        </div>
    );
}
